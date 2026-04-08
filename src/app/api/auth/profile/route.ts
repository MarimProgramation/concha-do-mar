import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import type { RowDataPacket } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "concha-do-mar-secret";

function getUserFromToken(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  try {
    return jwt.verify(auth.slice(7), JWT_SECRET) as { userId: number; email: string };
  } catch {
    return null;
  }
}

// GET — fetch profile info
export async function GET(req: NextRequest) {
  const payload = getUserFromToken(req);
  if (!payload) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, name, email, phone, address, created_at FROM users WHERE id = ?",
      [payload.userId]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Utilizador não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ user: rows[0] });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}

// PUT — update profile info
export async function PUT(req: NextRequest) {
  const payload = getUserFromToken(req);
  if (!payload) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const { name, phone, address, currentPassword, newPassword } = await req.json();

    // If changing password, verify current one
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json({ error: "Password atual é obrigatória" }, { status: 400 });
      }

      const [rows] = await pool.query<RowDataPacket[]>(
        "SELECT password FROM users WHERE id = ?",
        [payload.userId]
      );

      const valid = await bcrypt.compare(currentPassword, rows[0].password);
      if (!valid) {
        return NextResponse.json({ error: "Password atual incorreta" }, { status: 400 });
      }

      const hashed = await bcrypt.hash(newPassword, 10);
      await pool.query("UPDATE users SET password = ? WHERE id = ?", [hashed, payload.userId]);
    }

    // Update other fields
    if (name || phone !== undefined || address !== undefined) {
      const fields: string[] = [];
      const values: (string | number)[] = [];

      if (name) { fields.push("name = ?"); values.push(name); }
      if (phone !== undefined) { fields.push("phone = ?"); values.push(phone); }
      if (address !== undefined) { fields.push("address = ?"); values.push(address); }

      if (fields.length > 0) {
        values.push(payload.userId);
        await pool.query(`UPDATE users SET ${fields.join(", ")} WHERE id = ?`, values);
      }
    }

    // Fetch updated user
    const [updated] = await pool.query<RowDataPacket[]>(
      "SELECT id, name, email, phone, address, created_at FROM users WHERE id = ?",
      [payload.userId]
    );

    return NextResponse.json({ user: updated[0] });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
