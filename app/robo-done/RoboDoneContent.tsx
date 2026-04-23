"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import roboImage from "../../public/S__2080777.jpg";
import { TechGrid, FloatingCircuit, GlowOrb, TechBadge } from "@/components/RoboTechDecorations";
import DecorativeBlob from "@/components/DecorativeBlob";
import TrialCalendar from "@/components/TrialCalendar";
import TrialRegistrationForm from "@/components/TrialRegistrationForm";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Boxes, Handshake, Code2, Smile, Heart, Zap, Users, Map, ExternalLink } from "lucide-react";

export default function RoboDoneContent() {
    const [selectedSession, setSelectedSession] = useState<{ date: string; time: string; description: string } | null>(null);

    const handleSelectSession = (session: { date: string; time: string; description: string }) => {
        setSelectedSession(session);
        const formSection = document.getElementById("registration-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-slate-50 text-slate-700 overflow-hidden font-sans">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-white">
                <TechGrid className="text-blue-500" />
                <DecorativeBlob variant="primary" className="top-[-10%] left-[-10%] opacity-20" />
                <DecorativeBlob variant="secondary" className="bottom-[-10%] right-[-10%] opacity-20" />

                <div className="absolute inset-0 -z-10">
                    <FloatingCircuit className="top-20 left-[10%] text-blue-400" size={120} delay={0} />
                    <FloatingCircuit className="bottom-20 right-[15%] text-indigo-400" size={150} delay={2} />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <TechBadge className="mb-8 px-6 py-2 text-xs">
                            月9800円〜はじめるLEGOロボット制作×プログラミング教室
                        </TechBadge>
                        <h1 className="text-6xl font-black tracking-tight text-slate-900 sm:text-8xl mb-10 font-serif leading-[1.1]">
                            <span className="inline-block">ロボ団</span>
                            <span className="inline-block">高岡校</span>
                        </h1>
                        <p className="mt-8 text-2xl sm:text-3xl leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
                            本気で遊び、学ぶ。<br className="sm:hidden" /><span className="inline-block">子どもたちの未来を描く。</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Concept Section */}
            <Section
                title="Concept"
                subtitle="好奇心を、創造する力へ"
                className="relative bg-slate-50"
            >
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-lg leading-8 text-slate-600 space-y-6"
                    >
                        <p className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50/50 rounded-r-2xl font-bold text-slate-700 leading-relaxed">
                            ロボ団は、ロボット制作と<br />
                            プログラミングを通じて、<br />
                            理数・ITに強い子どもたちを育てる<br />
                            エデュテインメント・スクールです。
                        </p>
                        <p className="text-base text-center leading-loose">
                            「好き」という純粋な好奇心を<br />
                            「科学的な探究心」へと昇華させ、<br />
                            論理的思考力、問題解決能力、そして自分のアイデアを<br />
                            具現化する力を養います。
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src={roboImage}
                                alt="Robo Done Class"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <DecorativeBlob variant="accent" className="absolute -bottom-10 -right-10 w-64 h-64 opacity-30" />
                    </motion.div>
                </div>
            </Section>


            {/* 5 Points Section */}
            <Section
                title="Points"
                subtitle="ロボ団の5つのPOINT"
                className="bg-white relative overflow-hidden"
            >
                <TechGrid className="text-slate-100" />
                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: "01",
                                title: "好きを学びに、社会とつながる",
                                icon: Heart,
                                color: "bg-blue-50",
                                iconColor: "text-blue-600",
                                content: <>子どもたち自身の「好き」が「学び」に変わる。<br />学びが活きる「社会」に触れ、<br />「学ぶ理由」に気づき、<br />自分で未来を切り拓いていく。<br />トライ＆エラーを繰り返しながら、<br />あきらめずにやり抜く力を。<br />そういう姿が、いま正に社会で<br />求められている人材ではないでしょうか。</>
                            },
                            {
                                id: "02",
                                title: "「やりきるチカラ」が育みます",
                                icon: Zap,
                                color: "bg-indigo-50",
                                iconColor: "text-indigo-600",
                                content: <>従来の文系・理系の一方に偏るのではなく、<br />両方の素養を持つ人材の育成が求められています。<br />ロボ団では、理数教育を通じて理数系に強い<br />子どもを育てるだけでなく、社会へ出ても通用する<br />「やりきるチカラ」を育んでいきます。</>
                            },
                            {
                                id: "03",
                                title: "社会で活用されているプログラミングを楽しむ",
                                icon: Code2,
                                color: "bg-emerald-50",
                                iconColor: "text-emerald-600",
                                content: <>子どもたちに人気のLEGOを使ってロボットを制作。<br />自分で作ったロボットが自分で考えた<br />プログラミングで動くと、子どもたちは大興奮！<br />楽しみながらプログラミング的思考を<br />身につけることができます。</>
                            },
                            {
                                id: "04",
                                title: "ワークショップ形式の楽しいレッスン！！",
                                icon: Boxes,
                                color: "bg-orange-50",
                                iconColor: "text-orange-600",
                                content: <>ロボ団ではレッスンの度に<br />新しいプログラミングに挑戦。<br />「考えることが楽しい！」<br />仲間の発言から新しい気づきが<br />生まれてくるのも魅力のひとつ。<br />話すのが苦手だった子も、どんどん自分から<br />発言をしたくなるレッスンなのです。</>
                            },
                            {
                                id: "05",
                                title: "子どもたちでイベントの企画・開催！",
                                icon: Users,
                                color: "bg-rose-50",
                                iconColor: "text-rose-600",
                                content: <>高岡校では、イベントの企画や体験会のアイデアを、<br />子どもたちと一緒に考えています。<br />子どもたちが主体となって<br />地域のみなさんに伝える姿は、<br />とても頼もしく感じます。<br />社会の役に立っている。と子どもたちが<br />感じてもらえる経験を大切にしています。</>
                            }
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`group relative ${point.color} p-8 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col`}
                            >
                                <div className="absolute top-6 right-8 text-4xl font-black text-slate-900/5 font-serif">
                                    {point.id}
                                </div>
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform">
                                    <point.icon className={`w-8 h-8 ${point.iconColor}`} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex-grow">
                                    {point.title}
                                </h3>
                                <div className="text-slate-600 leading-relaxed text-sm">
                                    {point.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Curriculum Section */}
            <Section
                title="Curriculum"
                subtitle="確実な成長を約束するロードマップ"
                className="bg-slate-50"
            >
                <div className="mx-auto max-w-4xl relative z-10">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 border-l-4 border-blue-500/30"
                        >
                            <div className="absolute left-[-14px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg" />
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Phase 01: Discover</h3>
                            <p className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-xs">1年目〜3年目</p>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <p className="font-bold text-slate-800 text-lg mb-2">ビジュアルプログラミング</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    ブロックを組み合わせる直感的な環境で、アルゴリズムの基礎を楽しみながら習得。
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 border-l-4 border-indigo-500/30"
                        >
                            <div className="absolute left-[-14px] top-0 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white shadow-lg" />
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Phase 02: Evolve</h3>
                            <p className="text-indigo-600 font-bold mb-4 uppercase tracking-widest text-xs">4年目以降</p>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <p className="font-bold text-slate-800 text-lg mb-2">Python Mastery</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    実社会でも通用する本格的なプログラミング言語へ移行。AI開発の入り口に立ちます。
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Classes & Pricing Section */}
            <Section
                title="Classes & Pricing"
                subtitle="クラス・料金"
                className="bg-white relative"
            >
                <TechGrid className="text-slate-100" />
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "KINDER", age: "年長", price: "9,800", time: "50分 × 3回 / 月", color: "border-blue-200 bg-blue-50/30" },
                            { name: "BEGINNER", age: "小学1・2年生", price: "12,800", time: "50分 × 3回 / 月", color: "border-indigo-200 bg-indigo-50/30", popular: true },
                            { name: "CHALLENGER", age: "小学3年生以上", price: "15,800", time: "90分 × 3回 / 月", color: "border-purple-200 bg-purple-50/30" },
                            { name: "CREATOR", age: "経験者向け", price: "15,800", time: "90分 × 3回 / 月", color: "border-pink-200 bg-pink-50/30" },
                            { name: "INNOVATOR", age: "アドバンス", price: "15,800", time: "90分 × 3回 / 月", color: "border-emerald-200 bg-emerald-50/30" },
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`relative ${plan.color} border-2 p-8 rounded-[3rem] shadow-sm flex flex-col`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-tighter">
                                        Recommend
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                                    <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">{plan.age}</p>
                                </div>
                                <div className="mt-auto space-y-6">
                                    <div className="text-center bg-white py-6 rounded-2xl shadow-inner">
                                        <p className="text-4xl font-black text-slate-900">¥{plan.price}<span className="text-xs font-normal text-slate-500 ml-1"> / 月（税込）</span></p>
                                        <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">{plan.time}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center text-xs text-slate-400 font-medium space-y-2">
                        <p>※入会金：11,000円（税込）</p>
                        <p>※月謝及び入会金は、各教室により異なる場合がございます。</p>
                    </div>

                    <div className="mt-20 flex justify-center">
                        <Link
                            href="#trial"
                            className="group relative px-12 py-5 font-bold text-white transition-all duration-300 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                無料体験会にエントリー 🚀
                            </span>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Voices Section */}
            <Section
                title="Voices"
                subtitle="生徒・保護者の声"
                className="bg-white relative overflow-hidden"
            >
                <TechGrid className="text-slate-100" />
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Students */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                                    <Smile className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">生徒の声</h3>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    "ミッションをクリアさせるところがおもしろい",
                                    "いろんなロボットがあって楽しい",
                                    "レッスンの度に新しいプログラミングに挑戦できる",
                                    "達成感がある",
                                    "色んな考え方があってどれも正解なのがおもしろい"
                                ].map((voice, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <p className="text-slate-700 leading-relaxed">
                                            「{voice}」
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Parents */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
                                    <Heart className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">保護者の声</h3>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    "夢中で取り組む姿が印象的",
                                    "なにごとにも粘り強くなった",
                                    "何度も試行錯誤する力がついた",
                                    "失敗しても何故かを考えるようになった"
                                ].map((voice, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <p className="text-slate-700 leading-relaxed">
                                            「{voice}」
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Schools Section */}
            <Section
                title="Schools"
                subtitle="教室のご案内"
                className="bg-slate-50 relative overflow-hidden"
            >
                <TechGrid className="text-blue-500/5" />
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[
                            {
                                name: "金沢駅西校",
                                address: "〒920-8217 石川県金沢市近岡町60−２",
                                url: "https://www.kanazawa-robo.com/",
                                mapUrl: "https://maps.google.com/maps?q=石川県金沢市近岡町60-2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            },
                            {
                                name: "高岡サテライト校\n富山大学付属小学校前校",
                                address: "〒930-0882 富山県富山市五艘1493",
                                url: "https://npo-halea.com/application/",
                                mapUrl: "https://maps.google.com/maps?q=富山県富山市五艘1493&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            }
                        ].map((school, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col"
                            >
                                <div className="h-64 w-full">
                                    <iframe
                                        src={school.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={school.name}
                                    ></iframe>
                                </div>
                                <div className="p-8 sm:p-10 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 whitespace-pre-line">{school.name}</h3>
                                    <div className="space-y-6 flex-grow">
                                        <div className="flex items-start gap-4 text-slate-600">
                                            <Map className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                            <span className="font-medium leading-relaxed">{school.address}</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-slate-50">
                                        <Link
                                            href={school.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all group"
                                        >
                                            公式HPを見る
                                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Trial Calendar Section */}
            <Section
                id="trial"
                title="Trial Session"
                subtitle="体験会カレンダー"
                className="relative bg-slate-50"
            >
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-10">
                            <h3 className="text-4xl font-black text-slate-900 leading-tight">
                                プログラミングの<br />
                                未来を体感しよう
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                ロボ団では、入会前に授業内容をじっくり体験できる特別セッションをご用意しています。
                            </p>
                            <div className="space-y-4">
                                {[
                                    { text: "ロボット制作とプログラミングの完全体験" },
                                    { text: "保護者様向けカリキュラム説明会" },
                                    { text: "専任講師による学習アドバイス" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-200" />
                                        <span className="text-base font-bold text-slate-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-2xl">
                            <TrialCalendar
                                onSelectSession={handleSelectSession}
                                selectedDate={selectedSession?.date}
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Registration Form Section */}
            <Section id="registration-form" title="Registration" subtitle="体験会お申し込み" className="bg-white">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <p className="text-lg text-slate-600">
                        カレンダーで日程を選択し、以下のフォームよりお申し込みください。
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-slate-50 p-8 sm:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                    <DecorativeBlob variant="primary" className="absolute -top-20 -right-20 w-64 h-64 opacity-10" />
                    <DecorativeBlob variant="secondary" className="absolute -bottom-20 -left-20 w-64 h-64 opacity-10" />
                    <div className="relative z-10">
                        <TrialRegistrationForm selectedSession={selectedSession} />
                    </div>
                </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" title="Contact" subtitle="お問い合わせ" className="bg-slate-50">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <p className="text-lg text-slate-600">
                        その他、ご質問やご相談等ございましたら、以下のフォームよりお気軽にお問い合わせください。
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 sm:p-16 rounded-[4rem] border border-slate-100">
                    <ContactForm />
                </div>
            </Section>
        </div>
    );
}
