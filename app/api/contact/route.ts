import { NextResponse } from "next/server";

// Receives contact, quote and newsletter submissions.
// TODO(before launch): forward to email/CRM — e.g. set RESEND_API_KEY + LEAD_EMAIL_TO,
// or post to an n8n / Google Sheets webhook via LEAD_WEBHOOK_URL.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const email = String(body.email || "");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }) }).catch(() => {});
  } else {
    console.log("[lead]", body);
  }
  return NextResponse.json({ ok: true });
}
