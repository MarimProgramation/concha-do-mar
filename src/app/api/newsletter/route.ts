import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { ResultSetHeader } from "mysql2";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email é obrigatório." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    // Insert or reactivate if previously unsubscribed
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO newsletter_subscribers (email, active)
       VALUES (?, 1)
       ON DUPLICATE KEY UPDATE active = 1, subscribed_at = CURRENT_TIMESTAMP`,
      [email]
    );

    const isNew = result.affectedRows === 1;

    return NextResponse.json({
      message: isNew
        ? "Subscrição realizada com sucesso!"
        : "Subscrição reativada com sucesso!",
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
