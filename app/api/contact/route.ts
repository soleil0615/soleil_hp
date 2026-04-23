import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "必須項目が入力されていません。" },
                { status: 400 }
            );
        }

        // Email content
        const subject = `【お問い合わせ】${name}様 - Le Soleil`;
        const text = `
ウェブサイトからのお問い合わせ

■お客様情報
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}

■お問い合わせ内容
${message}
        `.trim();

        // Send email
        const targetEmail = process.env.CONTACT_EMAIL || "info@le-soleil0615.com";

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await sendMail({
                to: targetEmail,
                subject,
                text,
            });
        } else {
            console.log("--- SMTP Credentials Missing (Simulated Send) ---");
            console.log(`To: ${targetEmail}`);
            console.log(`Subject: ${subject}`);
            console.log(`Body: \n${text}`);
            console.log("-----------------------------------------------");
            // Simulate delay
            await new Promise((resolve) => setTimeout(resolve, 800));
        }

        return NextResponse.json(
            { message: "お問い合わせが送信されました。" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "エラーが発生しました。もう一度お試しください。" },
            { status: 500 }
        );
    }
}
