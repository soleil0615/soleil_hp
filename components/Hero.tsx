import Link from "next/link";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden pt-14">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#dfb799] to-[#faedcd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-48 lg:py-56 flex flex-col items-center justify-center min-h-[80vh] z-10">
                <FadeIn delay={0.2} className="text-center w-full max-w-4xl">
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 rounded-2xl sm:rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 text-center whitespace-nowrap">
                            <span>富山県高岡市</span>
                            <span className="hidden sm:inline">|</span>
                            <span>ロボットプログラミング教室・企業研修</span>
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-[0.05em] text-foreground sm:text-5xl lg:text-6xl sm:tracking-[0.12em] font-serif text-balance leading-[1.4] sm:leading-[1.2]">
                        <span className="inline-block">働く女性と</span><span className="hidden sm:inline">　</span><br className="sm:hidden" /><span className="inline-block">育ち盛りの子どもの</span><br className="hidden sm:block" /><span className="inline-block">「自律」を</span><br className="sm:hidden" /><span className="inline-block">応援します</span>
                    </h1>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground/90 mx-auto font-light sm:text-lg sm:mt-8 px-4 max-w-3xl">
                        <span className="inline-block">株式会社ル・ソレイユは、</span>
                        <span className="inline-block"><strong className="font-semibold text-foreground">ロボット制作プログラミング教室「ロボ団高岡校」</strong>の運営と、</span>
                        <br className="hidden md:inline" />
                        <span className="inline-block"><strong className="font-semibold text-foreground">企業向け人材育成コンサルティング</strong>を通じて、</span>
                        <br className="hidden sm:inline" />
                        <span className="inline-block">自分で考え行動できる「自律した人・組織づくり」をサポートします。</span>
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#service"
                            className="rounded-full bg-primary/90 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                        >
                            事業内容を見る
                        </Link>
                        <Link
                            href="#contact"
                            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </FadeIn>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#faedcd] to-[#d8e2dc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
