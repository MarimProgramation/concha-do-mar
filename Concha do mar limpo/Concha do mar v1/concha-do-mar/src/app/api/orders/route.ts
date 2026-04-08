import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";
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

// GET — fetch user orders
export async function GET(req: NextRequest) {
  const payload = getUserFromToken(req);
  if (!payload) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const [orders] = await pool.query<RowDataPacket[]>(
      "SELECT id, status, total, shipping_address, created_at FROM orders WHERE user_id = ? ORDER BY created_at DESC",
      [payload.userId]
    );

    // Fetch items for each order
    for (const order of orders) {
      const [items] = await pool.query<RowDataPacket[]>(
        "SELECT id, product_id, product_name, quantity, price FROM order_items WHERE order_id = ?",
        [order.id]
      );
      order.items = items;
    }

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Orders fetch error:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
