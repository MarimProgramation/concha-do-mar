import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { RowDataPacket } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "concha-do-mar-secret";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e password são obrigatórios" },
        { status: 400 }
      );
    }

    // Find user
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, name, email, password FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Email ou password incorretos" },
        { status: 401 }
      );
    }

    const dbUser = rows[0];

    // Verify password
    const valid = await bcrypt.compare(password, dbUser.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Email ou password incorretos" },
        { status: 401 }
      );
    }

    const user = { id: dbUser.id, name: dbUser.name, email: dbUser.email };
    const token = jwt.sign({ userId: dbUser.id, email: dbUser.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({ user, token });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
