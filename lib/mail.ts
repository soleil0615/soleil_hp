import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendMail = async ({
    to,
    subject,
    text,
    html,
}: {
    to: string;
    subject: string;
    text: string;
    html?: string;
}) => {
    const info = await transporter.sendMail({
        from: `"${process.env.SITE_NAME || "Le Soleil"}" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text,
        html,
    });

    console.log("Message sent: %s", info.messageId);
    return info;
};
