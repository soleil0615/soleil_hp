import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-accent/30 border-t border-border">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-serif font-bold text-primary mb-4">株式会社 ル・ソレイユ</h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                            〒933-0029<br />
                            富山県高岡市御旅屋町1222 エルパセオ1階
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">事業内容</h3>
                        <ul role="list" className="mt-6 space-y-4">

                            <li>
                                <Link href="/robo-done" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    ロボット制作プログラミング教室ロボ団高岡校
                                </Link>
                            </li>
                            <li>
                                <Link href="/edu" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    人材育成コンサルティング
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">お問い合わせ</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <Link href="/#contact" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    お問い合わせフォーム
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-900/10 pt-10">
                    <p className="text-center text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} le-soleil Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
