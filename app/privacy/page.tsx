import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社ル・ソレイユ",
  description: "株式会社ル・ソレイユのプライバシーポリシー（個人情報保護方針）に関するページです。お客様の個人情報の取扱いについて説明しています。",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>&gt;</span>
          <span className="text-foreground">プライバシーポリシー</span>
        </nav>

        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase block mb-3">
            PRIVACY POLICY
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            株式会社ル・ソレイユ（以下、「当社」といいます。）は、当社の提供するサービス（以下、「本サービス」といいます。）における、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </p>
        </div>

        {/* Policy Content Card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm text-foreground">
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                1. 個人情報の定義
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、および他の情報と容易に照合することができ、それにより特定の個人を識別することとなるものを指します。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                2. 個人情報の収集方法
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                当社は、お客様が当社サービスのお申し込み、各種イベントや体験会への参加登録、お問い合わせをいただく際に、氏名、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、サービス運用に必要な業務上のご連絡や記録も収集・保存する場合があります。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                3. 個人情報の利用目的
              </h2>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 space-y-3">
                <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>当社サービス（ロボット教室運営、人材育成コンサルティング等）の提供および運営のため。</li>
                  <li>サービスのご案内、セミナーや各種イベント、体験会等のご案内のため。</li>
                  <li>ご請求、お支払確認、および付随する事務手続きのため。</li>
                  <li>お客様からのお問い合わせ、ご相談への対応のため。</li>
                  <li>サービスの改善、品質向上、新サービス開発に向けた統計・分析のため。</li>
                  <li>上記の利用目的に付随する目的のため。</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                4. 個人情報の第三者提供の制限
              </h2>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 space-y-3">
                <p>当社は、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき。</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                5. 個人情報の安全管理措置
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じ、厳重に管理いたします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                6. 個人情報の開示・訂正・利用停止
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                当社は、本人から個人情報の開示・訂正・追加・削除・利用停止を求められたときは、ご本人であることを確認の上、遅滞なく対応いたします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                7. プライバシーポリシーの変更
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                本ポリシーの内容は、法令改正や運用見直しに伴い予告なく変更されることがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                8. お問い合わせ窓口
              </h2>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 space-y-3">
                <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
                <div className="mt-4 rounded-2xl bg-accent/30 p-6 border border-border">
                  <p className="font-bold text-foreground font-serif text-lg">株式会社 ル・ソレイユ</p>
                  <p className="text-sm text-muted-foreground mt-2">住所: 〒933-0029 富山県高岡市御旅屋町1222 エルパセオ1階</p>
                  <p className="text-sm text-muted-foreground mt-1">TEL: 0766-75-8314</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
