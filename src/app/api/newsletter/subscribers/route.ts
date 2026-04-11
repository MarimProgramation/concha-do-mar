import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";

interface Subscriber extends RowDataPacket {
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Password incorreta." },
        { status: 401 }
      );
    }

    const [subscribers] = await pool.execute<Subscriber[]>(
      "SELECT email FROM newsletter_subscribers WHERE active = 1 ORDER BY subscribed_at DESC"
    );

    return NextResponse.json({
      emails: subscribers.map((s) => s.email),
      total: subscribers.length,
    });
  } catch (error) {
    console.error("List subscribers error:", error);
    return NextResponse.json(
      { error: "Erro ao carregar subscritores." },
      { status: 500 }
    );
  }
}
