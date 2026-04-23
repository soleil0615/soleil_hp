"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface TrialRegistrationFormProps {
    selectedSession: {
        date: string;
        time: string;
        description: string;
    } | null;
}

export default function TrialRegistrationForm({ selectedSession }: TrialRegistrationFormProps) {
    const [formData, setFormData] = useState({
        childName: "",
        childNameKana: "",
        childGrade: "",
        parentName: "",
        email: "",
        phone: "",
        message: "",
        sessionDate: "",
        sessionTime: "",
    });

    useEffect(() => {
        if (selectedSession) {
            setFormData((prev) => ({
                ...prev,
                sessionDate: selectedSession.date,
                sessionTime: selectedSession.time,
            }));
        }
    }, [selectedSession]);

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
        setStatus("loading");
        setErrorMessage("");

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("childName", formData.childName);
            formDataToSubmit.append("childNameKana", formData.childNameKana);
            formDataToSubmit.append("childGrade", formData.childGrade);
            formDataToSubmit.append("parentName", formData.parentName);
            formDataToSubmit.append("email", formData.email);
            formDataToSubmit.append("phone", formData.phone);
            formDataToSubmit.append("message", formData.message);
            formDataToSubmit.append("sessionDate", formData.sessionDate);
            formDataToSubmit.append("sessionTime", formData.sessionTime);

            const response = await fetch("https://ssgform.com/s/My6TxYqDQ3z8", {
                method: "POST",
                body: formDataToSubmit,
            });

            if (!response.ok) {
                throw new Error("送信に失敗しました。時間をおいて再度お試しください。");
            }

            setStatus("success");
            setFormData({
                childName: "",
                childNameKana: "",
                childGrade: "",
                parentName: "",
                email: "",
                phone: "",
                message: "",
                sessionDate: "",
                sessionTime: "",
            });
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error.message || "予期せぬエラーが発生しました。");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6"
            >
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-20 h-20 text-emerald-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-serif">お申し込みありがとうございます</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    体験会のお申し込みを承りました。<br />
                    内容を確認の上、担当者より改めてご連絡させていただきます。
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-blue-600 font-bold hover:underline"
                >
                    フォームに戻る
                </button>
            </motion.div>
        );
    }

    return (
        <div className="relative">
            <AnimatePresence>
                {!selectedSession && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mb-8 p-4 sm:p-6 bg-blue-50 border border-blue-100 rounded-2xl sm:rounded-3xl text-center"
                    >
                        <p className="text-sm sm:text-base text-blue-700 font-bold">
                            上のカレンダーからご希望の体験会日程を選択してください
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8">
                    {/* Selected Session Info */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            ご希望の日程
                        </label>
                        <div className={clsx(
                            "w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 transition-all font-bold text-sm sm:text-base",
                            formData.sessionDate ? "bg-white border-blue-100 text-blue-600" : "bg-slate-50 border-slate-100 text-slate-400"
                        )}>
                            {formData.sessionDate
                                ? `${formData.sessionDate} ${formData.sessionTime}`
                                : "未選択（カレンダーから選んでください）"
                            }
                        </div>
                    </div>

                    {/* Child Name */}
                    <div>
                        <label htmlFor="childName" className="block text-sm font-bold text-slate-700 mb-2">
                            お子様のお名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="childName"
                            id="childName"
                            required
                            placeholder="例：山田 太郎"
                            value={formData.childName}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Child Name Kana */}
                    <div>
                        <label htmlFor="childNameKana" className="block text-sm font-bold text-slate-700 mb-2">
                            お子様のお名前（ふりがな） <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="childNameKana"
                            id="childNameKana"
                            required
                            placeholder="例：やまだ たろう"
                            value={formData.childNameKana}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Child Grade */}
                    <div className="sm:col-span-2">
                        <label htmlFor="childGrade" className="block text-sm font-bold text-slate-700 mb-2">
                            学年・年齢 <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="childGrade"
                            id="childGrade"
                            required
                            value={formData.childGrade}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                            <option value="">選択してください</option>
                            <option value="kinder-mid">年中</option>
                            <option value="kinder-high">年長</option>
                            <option value="grade1">小学1年生</option>
                            <option value="grade2">小学2年生</option>
                            <option value="grade3">小学3年生</option>
                            <option value="grade4">小学4年生</option>
                            <option value="grade5">小学5年生</option>
                            <option value="grade6">小学6年生</option>
                            <option value="none">その他</option>
                        </select>
                    </div>

                    {/* Parent Name */}
                    <div className="sm:col-span-2">
                        <label htmlFor="parentName" className="block text-sm font-bold text-slate-700 mb-2">
                            保護者様のお名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="parentName"
                            id="parentName"
                            required
                            placeholder="例：山田 花子"
                            value={formData.parentName}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                            メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            autoComplete="email"
                            placeholder="例：example@domain.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Phone */}
                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                            電話番号 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            autoComplete="tel"
                            placeholder="例：090-0000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                            ご質問・ご要望
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={3}
                            placeholder="例：駐車場はありますか？など"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full rounded-2xl border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {status === "error" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-700"
                    >
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{errorMessage}</span>
                    </motion.div>
                )}

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={status === "loading" || !formData.sessionDate}
                        className="w-full rounded-full bg-blue-600 px-6 py-3.5 sm:px-8 sm:py-4 text-center text-base sm:text-lg font-black text-white shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "送信中..." : "体験会に申し込む"}
                    </button>
                    {!formData.sessionDate && (
                        <p className="mt-4 text-center text-sm text-slate-400 font-medium">
                            ※まず最初に上のカレンダーから日程を選択してください
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}

import { clsx } from "clsx";
