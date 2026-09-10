"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: initialMessage,
    });
    const [honeypot, setHoneypot] = useState("");

    useEffect(() => {
        if (initialMessage) {
            setFormData((prev) => ({ ...prev, message: initialMessage }));
        }
    }, [initialMessage]);

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot: bots tend to fill every field, humans never see this one.
        if (honeypot) {
            setStatus("success");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("name", formData.name);
            formDataToSubmit.append("email", formData.email);
            formDataToSubmit.append("phone", formData.phone);
            formDataToSubmit.append("inquiryType", formData.inquiryType);
            formDataToSubmit.append("message", formData.message);

            const response = await fetch("https://ssgform.com/s/42cUaxkcIdW2", {
                method: "POST",
                body: formDataToSubmit,
                // Do not set Content-Type header when sending FormData, 
                // the browser will set it automatically with the boundary string
            });

            if (!response.ok) {
                throw new Error("送信に失敗しました。時間をおいて再度お試しください。");
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                inquiryType: "",
                message: "",
            });
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "予期せぬエラーが発生しました。");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white px-5 py-12 sm:px-12 lg:px-16 rounded-2xl shadow-sm ring-1 ring-gray-900/5 text-center"
            >
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <CheckCircle2 className="w-16 h-16 text-primary" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">お問い合わせありがとうございます</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                    内容を確認の上、担当者より改めてご連絡させていただきます。<br />
                    数日経っても返信がない場合は、お手数ですがお電話にてお問い合わせください。
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-primary font-bold hover:underline"
                >
                    フォームに戻る
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white px-5 py-8 sm:px-12 lg:px-16 rounded-2xl shadow-sm ring-1 ring-gray-900/5">
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
                {/* Honeypot field: hidden from humans via CSS, bots fill it in blindly */}
                <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold leading-6 text-foreground"
                        >
                            お名前 <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-foreground"
                        >
                            メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold leading-6 text-foreground"
                        >
                            電話番号
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="inquiryType"
                            className="block text-sm font-semibold leading-6 text-foreground"
                        >
                            お問い合わせ種別 <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <select
                                name="inquiryType"
                                id="inquiryType"
                                required
                                value={formData.inquiryType}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            >
                                <option value="">選択してください</option>
                                <option value="ロボ団高岡校について">ロボ団高岡校について</option>
                                <option value="人材育成コンサルティングについて">人材育成コンサルティングについて</option>
                                <option value="その他">その他のご質問</option>
                            </select>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                            ※誠に恐れ入りますが、営業・広告目的のご連絡はご遠慮いただいております。
                        </p>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-foreground"
                        >
                            お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-700"
                        >
                            <AlertCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">{errorMessage}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "送信中..." : "送信する"}
                    </button>
                </div>
            </form>
        </div>
    );
}
