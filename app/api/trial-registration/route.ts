import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            childName,
            childNameKana,
            childGrade,
            parentName,
            email,
            phone,
            message,
            sessionDate,
            sessionTime
        } = body;

        // Validation
        if (!childName || !childNameKana || !childGrade || !parentName || !email || !phone || !sessionDate) {
            return NextResponse.json(
                { error: "必須項目が入力されていません。" },
                { status: 400 }
            );
        }

        // Email content
        const subject = `【体験会申込】${childName}様 - ロボ団高岡校`;
        const text = `
ロボ団高岡校 体験会お申し込み

■体験会日程
日時: ${sessionDate} ${sessionTime}

■お子様情報
お名前: ${childName} (${childNameKana})
学年・年齢: ${childGrade}

■保護者様情報
お名前: ${parentName}
メールアドレス: ${email}
電話番号: ${phone}

■ご質問・ご要望
${message || "なし"}
        `.trim();

        // Send email
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await sendMail({
                to: process.env.TRIAL_REGISTRATION_EMAIL || "robodone.takaoka@gmail.com",
                subject,
                text,
            });
        } else {
            console.log("--- SMTP Credentials Missing (Simulated Send) ---");
            console.log(`To: robodone.takaoka@gmail.com`);
            console.log(`Subject: ${subject}`);
            console.log(`Body: \n${text}`);
            console.log("-----------------------------------------------");
            // Simulate delay
            await new Promise((resolve) => setTimeout(resolve, 800));
        }

        return NextResponse.json(
            { message: "体験会のお申し込みが送信されました。" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Trial registration error:", error);
        return NextResponse.json(
            { error: "エラーが発生しました。もう一度お試しください。" },
            { status: 500 }
        );
    }
}
