import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | 株式会社ル・ソレイユ",
  description: "株式会社ル・ソレイユのウェブサイト利用規約に関するページです。当ウェブサイトおよび提供サービスの利用条件について定めています。",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>&gt;</span>
          <span className="text-foreground">利用規約</span>
        </nav>

        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase block mb-3">
            TERMS OF SERVICE
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            利用規約
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            この利用規約（以下、「本規約」といいます。）は、株式会社ル・ソレイユ（以下、「当社」といいます。）が提供するウェブサイトおよび各種サービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ご利用の皆さま（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
          </p>
        </div>

        {/* Terms Content Card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm text-foreground">
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                1. 適用
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                2. 禁止事項
              </h2>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 space-y-3">
                <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>当社、ほかのユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                3. 本サービスの提供の停止等
              </h2>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 space-y-3">
                <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                4. 著作権および知的財産権
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                本サービスによって提供される写真、文章、デザイン、ロゴ等のコンテンツの著作権またはその他の知的所有権は、当社または正当な権利を有する第三者に帰属します。ユーザーは、これらを無断で転載、複製、改変等することはできません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                5. 免責事項
              </h2>
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 space-y-3">
                <p>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティ等に関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>
                <p>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。</p>
                <p>当社は、リンク先の内容について一切責任を負いません。</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                6. サービス内容の変更等
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                7. 利用規約の変更
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、変更後の本規約は、本ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b border-border pb-3 font-serif">
                <span className="h-2 w-2 rounded-full bg-primary" />
                8. 準拠法・裁判管轄
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
