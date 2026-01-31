// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// type Body = {
//   name: string;
//   email: string;
//   venture?: string;
//   message: string;
//   // honeypot (bots fill this, humans don't see it)
//   company?: string;
// };

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, venture, message, company } = (await req.json()) as Body;

//     // Honeypot: if filled, pretend success
//     if (company && company.trim() !== "") {
//       return NextResponse.json({ ok: true });
//     }

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
//     }

//     const subject = `New inquiry — ${venture || "General"}`;

//     await resend.emails.send({
//       from: `Nirmittee Group <${process.env.CONTACT_FROM!}>`,
//       to: [process.env.CONTACT_TO!],
//       replyTo: email,
//       subject,
//       html: `
//         <div style="font-family:Inter,Arial,sans-serif;line-height:1.6">
//           <h2 style="margin:0 0 12px">New Contact Inquiry</h2>
//           <p><b>Name:</b> ${escape(name)}</p>
//           <p><b>Email:</b> ${escape(email)}</p>
//           <p><b>Interested in:</b> ${escape(venture || "—")}</p>
//           <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
//           <p style="white-space:pre-wrap">${escape(message)}</p>
//         </div>
//       `,
//       text: [
//         "New Contact Inquiry",
//         `Name: ${name}`,
//         `Email: ${email}`,
//         `Interested in: ${venture || "—"}`,
//         "",
//         message,
//       ].join("\n"),
//     });

//     return NextResponse.json({ ok: true });
//   } catch (e) {
//     return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
//   }
// }

// // tiny escape to avoid breaking HTML
// function escape(s: string) {
//   return s.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]!));
// }
import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name: string;
  email: string;
  venture?: string;
  message: string;
  // honeypot (bots fill this, humans don't see it)
  company?: string;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;

    // 🔐 Guard: do NOT crash during build or runtime
    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // ✅ Create client lazily (runtime only)
    const resend = new Resend(apiKey);

    const { name, email, venture, message, company } =
      (await req.json()) as Body;

    // Honeypot: bots get fake success
    if (company && company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subject = `New inquiry — ${venture || "General"}`;

    await resend.emails.send({
      from: `Nirmitee Group <${from}>`,
      to: [to],
      replyTo: email,
      subject,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">New Contact Inquiry</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Interested in:</b> ${escapeHtml(venture || "—")}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
      text: [
        "New Contact Inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Interested in: ${venture || "—"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 500 }
    );
  }
}

// tiny escape to avoid breaking HTML
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[m]!));
}
