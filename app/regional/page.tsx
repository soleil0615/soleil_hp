import Section from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import {
    Mail,
    GraduationCap,
    Building2,
    Landmark,
    Home,
    Sprout,
} from "lucide-react";

export const metadata: Metadata = {
    title: "地域活性化アドバイザー | 株式会社ル・ソレイユ",
    description:
        "学校・企業・行政・地域をつなぎ、教育・人材育成・組織開発の視点から地域の人づくりを支援します。地域課題×DXの探究学習、キャリア教育、企業研修まで一貫して伴走します。",
    keywords: [
        "地域活性化",
        "地方創生",
        "地域人材育成",
        "DX人材育成",
        "探究学習",
        "キャリア教育",
        "産官学連携",
        "富山県",
        "高岡市",
    ],
    alternates: {
        canonical: "/regional",
    },
    openGraph: {
        title: "地域活性化アドバイザー | 株式会社ル・ソレイユ",
        description:
            "「人材」と「つながり」を育て、地域の未来をつくる。学校・企業・行政・地域をつなぐアドバイザーです。",
    },
};

const targets = [
    { icon: GraduationCap, label: "学校・教育機関" },
    { icon: Building2, label: "企業・事業者" },
    { icon: Landmark, label: "行政・自治体" },
    { icon: Home, label: "地域・住民" },
];

const specialties = [
    "地域人材の育成・教育",
    "中高生向けDX・デジタル人材の育成",
    "プログラミング・AI・ICT教育",
    "学校・企業・行政の連携推進",
    "地元企業と学校をつなぐキャリア教育",
    "地域課題の解決に向けた学びや若者の地域参画",
    "地元企業の人材育成・組織開発",
    "産官学連携・官民連携の推進",
    "コミュニティづくり",
    "ロボット・eスポーツなどを活用した人材育成",
];

const achievements = [
    {
        title: "中高生向けDX・プログラミング教育の実施",
        body: "学校現場や放課後活動にて、プログラミング・AI・ICT教育の授業やワークショップを実施しています。",
    },
    {
        title: "自治体・学校・企業をつなぐ教育プログラムの提供",
        body: "地域課題の解決をテーマにした学びの場づくりや、キャリア教育プログラムを展開しています。",
    },
    {
        title: "地元企業の人材育成・組織開発支援",
        body: "研修設計や伴走支援を通じて、企業の人材力向上と組織の持続的な成長を支援しています。",
    },
    {
        title: "ロボット・eスポーツ等を活用した人材育成",
        body: "テクノロジーやeスポーツを通じて、挑戦する力・チームワーク・創造力を育む場を提供しています。",
    },
];

export default function RegionalPage() {
    return (
        <div className="bg-slate-50 font-sans text-slate-700">
            {/* 1. Hero */}
            <div className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <FadeIn delay={0.2}>
                        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
                            <p className="inline-block rounded-full bg-slate-800 px-4 py-1.5 text-[11px] sm:text-sm font-bold tracking-widest text-white mb-6">
                                地域とともに、未来をつくる
                            </p>
                            <h1 className="font-serif font-black tracking-tight text-slate-900 text-[8vw] sm:text-5xl lg:text-6xl leading-tight mb-8">
                                <span className="inline-block">地域活性化</span>
                                <span className="inline-block">アドバイザー</span>
                            </h1>
                            <p className="text-base sm:text-xl font-bold text-teal-700 mb-6">
                                <span className="inline-block">「人材」と「つながり」を育て、</span>
                                <span className="inline-block">地域の未来をつくる</span>
                            </p>
                            <p className="text-sm sm:text-lg leading-7 sm:leading-9 text-slate-600 max-w-2xl">
                                <span className="inline-block">学校・企業・行政・地域をつなぎ、</span>
                                <span className="inline-block">教育・人材育成・組織開発の視点から、</span>
                                <span className="inline-block">プロジェクトの企画・実施や</span>
                                <span className="inline-block">研修・教育プログラムの構築を行います。</span>
                                <span className="inline-block">人と組織の成長を支え、</span>
                                <span className="inline-block">持続可能で魅力ある地域づくりを</span>
                                <span className="inline-block">サポートします。</span>
                            </p>

                            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
                                {targets.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-3 py-5"
                                    >
                                        <Icon className="h-7 w-7 text-teal-700" aria-hidden="true" />
                                        <span className="text-xs sm:text-sm font-bold text-slate-700 text-center">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/#contact"
                                className="mt-12 w-full sm:w-auto px-10 py-4 bg-slate-800 text-white font-bold rounded-full shadow-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group"
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                ご相談・お問い合わせ
                            </Link>
                        </div>
                    </FadeIn>
                </div>
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-100/60 to-transparent blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-50 to-transparent blur-3xl" />
                </div>
            </div>

            {/* 2. 専門分野 */}
            <Section title="専門分野" subtitle="人づくりと学びの場づくりを軸に" className="bg-slate-50">
                <FadeIn delay={0.2}>
                    <p className="mx-auto max-w-3xl text-center text-sm sm:text-base leading-7 sm:leading-8 text-slate-600 mb-12">
                        <span className="inline-block">地域の未来をつくる「人づくり」と</span>
                        <span className="inline-block">「学びの場づくり」を軸に、</span>
                        <span className="inline-block">教育・産業・行政の連携による</span>
                        <span className="inline-block">持続可能な地域づくりに取り組んでいます。</span>
                    </p>
                    <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
                        {specialties.map((item, i) => (
                            <div key={item} className="flex items-start gap-4 border-b border-dashed border-slate-200 py-4">
                                <span className="font-serif text-lg font-bold text-teal-600 tabular-nums shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Section>

            {/* 3. 活動実績 */}
            <Section title="活動実績・取組事例" subtitle="教育・地域・産業のつながりを生む" className="bg-white">
                <FadeIn delay={0.2}>
                    <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Section>

            {/* 4. 地域の人材循環 */}
            <Section title="地域の人材循環" subtitle="地域づくりに対する想い" className="bg-slate-50">
                <FadeIn delay={0.2}>
                    <div className="mx-auto max-w-3xl rounded-2xl bg-white border border-slate-100 p-6 sm:p-10 shadow-sm">
                        <p className="text-sm sm:text-base leading-7 sm:leading-9 font-bold text-slate-700 text-center">
                            <span className="inline-block">単発の講義や研修にとどまらず、</span>
                            <span className="inline-block">課題の発見・共有から、</span>
                            <span className="inline-block">地域の人・企業・学校をつなぎ、</span>
                            <span className="inline-block">若者のチャレンジを後押しし、</span>
                            <span className="inline-block">地域企業も巻き込むことで、</span>
                            <span className="inline-block">人材が地域で育ち、</span>
                            <span className="inline-block">地域で活躍していく仕組みをつくります。</span>
                        </p>
                        <p className="mt-8 text-center font-serif text-lg sm:text-2xl font-bold text-slate-900 leading-relaxed">
                            学校 × 地域企業 × 行政 <br className="sm:hidden" />× 地域住民 × 若者
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* 5. 最終的に目指す姿 */}
            <Section title="最終的に目指す姿" className="bg-white">
                <FadeIn delay={0.2}>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="font-serif text-lg sm:text-3xl font-bold text-orange-500 mb-10 leading-relaxed">
                            『地域の中に、人を育てる仕組みが残ること』
                        </p>
                        <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-10">
                            <p className="text-sm sm:text-base leading-8 sm:leading-9 text-slate-700">
                                <span className="inline-block">中学生が高校生になり、</span>
                                <span className="inline-block">高校生が大学生・社会人になり、</span>
                                <span className="inline-block">社会人になった人が、</span>
                                <span className="inline-block">今度は地域の子どもたちを支える側になる。</span>
                            </p>
                            <p className="mt-6 text-sm sm:text-base leading-8 sm:leading-9 text-slate-700">
                                <span className="inline-block">その循環が生まれれば、</span>
                                <span className="inline-block">『若者が地域から出ていく』</span>
                                <span className="inline-block">という課題に対しても、</span>
                                <span className="inline-block">『地域と関わり続ける人を増やす』</span>
                                <span className="inline-block">という新しいアプローチが</span>
                                <span className="inline-block">可能になると考えています。</span>
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 6. Message */}
            <Section title="Message" className="bg-slate-50">
                <FadeIn delay={0.2}>
                    <div className="mx-auto max-w-3xl text-center">
                        <Sprout className="mx-auto h-8 w-8 text-teal-600 mb-8" aria-hidden="true" />
                        <p className="text-sm sm:text-lg leading-8 sm:leading-10 text-slate-700 font-medium">
                            <span className="inline-block">地域の未来をつくるのは、</span>
                            <span className="inline-block">新しい建物や制度だけではありません。</span>
                        </p>
                        <p className="mt-6 text-sm sm:text-lg leading-8 sm:leading-10 text-slate-700 font-medium">
                            <span className="inline-block">その地域で、</span>
                            <span className="inline-block">「やってみたい」と思える子どもが育つこと。</span>
                            <span className="inline-block">「応援したい」と思える大人が増えること。</span>
                            <span className="inline-block">「この地域で挑戦したい」と思える</span>
                            <span className="inline-block">若者が増えること。</span>
                        </p>
                        <p className="mt-6 text-sm sm:text-lg leading-8 sm:leading-10 text-slate-700 font-medium">
                            <span className="inline-block">そのために、</span>
                            <span className="inline-block">学校・企業・行政・地域をつなぎ、</span>
                            <span className="inline-block">人が育ち、人が地域に関わり続ける</span>
                            <span className="inline-block">仕組みをつくります。</span>
                        </p>

                        <div className="mt-14 rounded-2xl bg-white border border-slate-100 p-8 shadow-sm text-center">
                            <p className="text-xs font-bold tracking-widest text-slate-400 mb-4">お問い合わせ</p>
                            <p className="font-serif text-lg font-bold text-slate-900">株式会社ル・ソレイユ</p>
                            <p className="mt-4 text-sm text-slate-600">
                                TEL:{" "}
                                <a href="tel:0766-75-8314" className="font-medium hover:text-teal-700 transition-colors">
                                    0766-75-8314
                                </a>
                            </p>
                            <p className="mt-1 text-sm text-slate-600">
                                Mail:{" "}
                                <a href="mailto:info@le-soleil0615.com" className="font-medium hover:text-teal-700 transition-colors">
                                    info@le-soleil0615.com
                                </a>
                            </p>
                            <Link
                                href="/#contact"
                                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 px-10 py-4 font-bold text-white shadow-lg hover:bg-slate-700 transition-all group"
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                お問い合わせフォームへ
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}
