import Section from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import corporateLecturer from "../../public/corporate_lecturer_v4.png";
import mentalLecturer from "../../public/mental_coaching_scene.png";
import Image from "next/image";

export const metadata: Metadata = {
    title: "人材育成コンサルティング | 組織戦略パートナー",
    description: "点（個人）×線（関係）×面（組織文化）で組織の見えにくい「つながり」をデザインする。人的資本経営、組織文化変革、リーダー育成を支援します。",
    keywords: ["組織開発", "人的資本経営", "組織文化", "DEI", "1on1", "リーダー育成", "高岡市", "富山県"],
    alternates: {
        canonical: "/edu",
    },
    openGraph: {
        title: "人材育成コンサルティング | 株式会社ル・ソレイユ",
        description: "組織の見えにくい「つながり」をデザイン。人的資本経営、組織文化変革、リーダー育成を支援します。",
        images: ["/corporate_training_scene.png"],
    },
};

export default function EduPage() {
    return (
        <div className="bg-slate-50 font-sans text-slate-700">
            {/* 1. Hero Section */}
            <div className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
                        <p className="text-edu-primary font-bold tracking-widest uppercase mb-4 text-[10px] sm:text-base">
                            組織戦略パートナー
                        </p>
                        <h1 className="text-[6.5vw] xs:text-[7vw] sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 font-serif mb-8 leading-tight w-full text-center px-2">
                            <span className="inline-block">点（個人）</span>
                            <span className="text-edu-primary/30 mx-1 sm:mx-3 hidden sm:inline-block scale-75 sm:scale-100">×</span>
                            <div className="sm:hidden text-edu-primary/30 my-1 scale-75 leading-none">×</div>
                            <span className="inline-block">線（関係）</span>
                            <span className="text-edu-primary/30 mx-1 sm:mx-3 hidden sm:inline-block scale-75 sm:scale-100">×</span>
                            <div className="sm:hidden text-edu-primary/30 my-1 scale-75 leading-none">×</div>
                            <span className="text-edu-primary inline-block">面（組織文化）</span>
                        </h1>
                        <p className="text-[3.5vw] xs:text-[3.8vw] sm:text-2xl lg:text-[2vw] text-slate-600 font-medium mb-10 leading-relaxed whitespace-nowrap px-4 text-center tracking-tighter">
                            —— 組織の見えにくい「つながり」をデザインする ——
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/#contact"
                                className="w-full sm:w-auto px-10 py-4 bg-edu-cta text-white font-bold rounded-full shadow-lg hover:bg-edu-cta-hover transition-all flex items-center justify-center gap-2 group"
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                無料相談を申し込む
                            </Link>

                        </div>
                    </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-edu-accent/50 to-transparent blur-3xl opacity-40" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-50 to-transparent blur-3xl opacity-40" />
                </div>
            </div>

            {/* 2. Concept Section */}
            <Section
                title="Concept"
                subtitle="わたしたちが大切にしていること"
                className="bg-slate-50"
            >
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <p className="text-[14px] xs:text-[15px] sm:text-lg leading-7 sm:leading-9 text-slate-600 font-medium text-center px-4 tracking-tight sm:tracking-normal">
                        組織は「人」がつくり、<br />
                        「人の関係性」が文化を形づくります。<br />
                        私たちは、個人・チーム・組織に流れる<br />
                        “見えないつながり”を可視化し、<br />
                        持続的に成長する組織づくりを支援します。
                    </p>
                </div>

                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "点：個人の力の最大化",
                            desc: "自己理解・ウェルビーイング・メンタルヘルスを基盤に、働く人の力を引き出します。",
                            color: "bg-edu-secondary border-edu-accent text-edu-primary"
                        },
                        {
                            title: "線：関係性の質の向上",
                            desc: "1on1、コミュニケーション、心理的安全性、チーム協働を強化します。",
                            color: "bg-amber-50 border-amber-100 text-amber-600"
                        },
                        {
                            title: "面：文化と戦略の統合",
                            desc: "DEIマネジメント、組織文化変革、人的資本経営の実装を支えます。",
                            color: "bg-rose-50 border-rose-100 text-rose-600"
                        }
                    ].map((item, i) => (
                        <div key={i} className={`p-6 sm:p-8 rounded-3xl border ${item.color.replace("text-", "border-").replace("bg-", "border-opacity-50 ")} bg-white shadow-sm hover:shadow-md transition-all`}>
                            <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${item.color.split(" ").pop()}`}>{item.title}</h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 2.5. Story Message Section */}
            <Section
                className="bg-slate-50"
            >
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-white/80 backdrop-blur-lg p-6 py-12 sm:p-20 rounded-[3rem] sm:rounded-[4rem] shadow-2xl shadow-orange-900/5 border border-white relative overflow-hidden group">
                        {/* Decorative background element */}
                        <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-64 sm:h-64 bg-edu-secondary rounded-full blur-2xl sm:blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                        <div className="absolute -bottom-12 -left-12 sm:-bottom-24 sm:-left-24 w-48 h-48 sm:w-64 sm:h-64 bg-amber-50 rounded-full blur-2xl sm:blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-12">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-edu-secondary text-edu-primary text-sm font-bold tracking-widest uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-edu-accent animate-pulse" />
                                    Story Message
                                </div>
                                <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
                                    あなたの想い
                                </h2>
                            </div>

                            <div className="space-y-8 text-slate-600 leading-relaxed text-base sm:text-lg md:text-xl font-medium tracking-wide text-balance">
                                <p>
                                    <span className="inline-block">働く人が安心できて、</span><br />
                                    <span className="inline-block">自然体でいられる組織は、</span><br />
                                    <span className="inline-block">そのあたたかさがそのまま</span><br />
                                    <span className="inline-block">強さにつながっていきます。</span>
                                </p>
                                <p>
                                    <span className="inline-block">私は、ひとりひとりの想いに</span><br />
                                    <span className="inline-block">耳を傾けながら、</span><span className="inline-block">人と働く場を</span><br />
                                    <span className="inline-block">ていねいにつなぎ直す</span><br />
                                    <span className="inline-block">“関係性のデザイン”を</span><br />
                                    <span className="inline-block">大切にしています。</span>
                                </p>
                                <p>
                                    <span className="inline-block">「うまく言葉にできないけれど、</span><br />
                                    <span className="inline-block">なんとなくモヤモヤする」</span><br />
                                    <span className="inline-block">そんな小さなサインにも</span><br />
                                    <span className="inline-block">寄り添いながら、</span><br />
                                    <span className="inline-block">組織に流れる空気を、</span><br />
                                    <span className="inline-block">ゆっくり整えていきます。</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Service Section */}
            <Section
                title="Services"
                subtitle="提供サービス"
            >
                <div className="mx-auto max-w-6xl space-y-24">
                    {/* Group 1: Organization & Strategy */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src={corporateLecturer}
                                alt="Corporate Consulting"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-edu-primary/50 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-md">
                                組織戦略・人的資本
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-12">
                            {[
                                {
                                    title: "人的資本コンサルティング",
                                    items: ["組織診断（エンゲージメント・関係性測定・心理的安全性）", "人的資本/人事戦略策定", "人材ポートフォリオ設計", "人的資本情報開示の支援"]
                                },
                                {
                                    title: "組織文化・DEIマネジメント",
                                    items: ["組織文化調査", "DEI推進プログラム設計", "管理職・リーダー研修", "職場コミュニケーション改善支援"]
                                }
                            ].map((service, i) => (
                                <div key={i} className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-800 relative inline-block">
                                        {service.title}
                                        <span className="absolute bottom-1 left-0 w-full h-3 bg-edu-secondary -z-10 rounded-full"></span>
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-edu-secondary">
                                        {service.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-edu-primary shrink-0 mt-0.5" />
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Group 2: Mental & Development */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-12">
                            {[
                                {
                                    title: "企業内メンタルアドバイザー",
                                    items: ["社員向け1on1/カウンセリング", "メンタルヘルス教育", "管理職向けラインケア研修", "ハラスメント予防/相談対応支援"]
                                },
                                {
                                    title: "次世代後継者育成・リーダー開発",
                                    items: ["後継者アセスメント", "後継者コーチング", "リーダー研修（ファシリテーション・1on1・思考整理）"]
                                },
                                {
                                    title: "1on1スキル・メンタルトレーニング",
                                    items: ["エグゼクティブコーチング", "若手向けコーチングプログラム", "自己基盤強化プログラム"]
                                }
                            ].map((service, i) => (
                                <div key={i} className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-800 relative inline-block">
                                        {service.title}
                                        <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-100/50 -z-10 rounded-full"></span>
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-amber-100">
                                        {service.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src={mentalLecturer}
                                alt="Mental Training & Coaching"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-edu-primary/50 to-transparent" />
                            <div className="absolute bottom-6 right-6 text-white font-bold text-xl drop-shadow-md text-right">
                                メンタルヘルス・<br />人材育成
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. Target Audience (Issues) */}
            <Section
                title="Issues"
                subtitle="こんな課題を抱える企業へ"
                background="muted"
            >
                <div className="mx-auto max-w-4xl bg-white rounded-[2.5rem] p-8 sm:p-16 shadow-sm border border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {[
                            "人的資本経営が形だけになっている",
                            "社員の関係性や心理的安全性を高めたい",
                            "次世代リーダーを育てたい",
                            "組織文化を変えたい",
                            "離職・メンタル不調が増えている",
                            "1on1がうまく機能していない"
                        ].map((issue, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                                <span className="text-slate-700 font-bold">{issue}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center border-t border-slate-100 pt-10">
                        <p className="text-xl sm:text-2xl font-bold text-edu-primary">
                            あなたの会社に最適な組織戦略を<br className="sm:hidden" />共同でデザインします。
                        </p>
                        <div className="mt-10">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center px-8 py-4 bg-edu-cta text-white font-bold rounded-full hover:bg-edu-cta-hover transition-all shadow-lg hover:shadow-xl"
                            >
                                お問い合わせ・相談する
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
