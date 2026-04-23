import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import NewsSection from "@/components/NewsSection";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import roboImage from "../public/S__2080777.jpg";
import trainingImage from "../public/corporate_training.png";
import DecorativeBlob from "@/components/DecorativeBlob";
import companyInterior from "../public/ソレイユ内観（イラスト）.png";
import companyExterior from "../public/ソレイユ外観（イラスト）.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "株式会社ル・ソレイユ",
            "url": "https://le-soleil0615.com",
            "logo": "https://le-soleil0615.com/soleil-logo.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "御旅屋町1222 エルパセオ1階",
              "addressLocality": "高岡市",
              "addressRegion": "富山県",
              "postalCode": "933-0029",
              "addressCountry": "JP"
            }
          })
        }}
      />
      <Hero />

      <Section id="vision" background="muted" title="Vision" subtitle="みんなが「自律」した社会へ">
        <DecorativeBlob variant="secondary" className="top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] opacity-30" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <p className="text-lg leading-8 text-muted-foreground">
            社会で大事なことは自分で考え行動すること。<br />
            なぜなら社会には教育で求められてきた<br />
            「答え」や「正解」はないからです。<br />
            ル・ソレイユは誰かが教えてくれた答えに<br />
            依存するのではなく、<br />
            自分で決めたことを自分で守ることができる、<br />
            自分らしくいられる子どもが<br />
            一人でも多く育ってくれることを願っています。
          </p>
        </div>
      </Section>

      <Section id="service" title="Service" subtitle="事業内容">
        <DecorativeBlob variant="primary" className="bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[50rem] opacity-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

          <ServiceCard
            title={<><span className="inline-block">ロボット制作</span><span className="inline-block">プログラミング教室</span><br /><span className="inline-block">ロボ団高岡校</span></>}
            altText="ロボット制作プログラミング教室ロボ団高岡校"
            description="好奇心を学びに！ロボット制作とプログラミングを通じ、理数・ITに強い子どもの人材育成を目指します。"
            href="/robo-done"
            imageSrc={roboImage}
            imagePosition="object-top"
          />
          <ServiceCard
            title="人材育成コンサルティング"
            description="企業風土を整え、個々の能力を引き出し、チームとして目標達成していくサポートをしています。"
            href="/edu"
            imageSrc={trainingImage}
            imagePosition="object-[50%_25%]"
          />
        </div>
      </Section>

      <Section id="news" background="accent">
        <NewsSection />
      </Section>

      <Section id="company" title="Company" subtitle="会社概要">
        <DecorativeBlob variant="accent" className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] opacity-30" />
        <div className="mx-auto max-w-3xl bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 relative z-10">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-foreground">会社名</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0">株式会社 ル・ソレイユ</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-foreground">所在地</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0">〒933-0029 富山県高岡市御旅屋町1222 エルパセオ1階</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-foreground">事業内容</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0">

                ロボット制作プログラミング教室ロボ団高岡校<br />
                人材育成コンサルティング
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-foreground">アクセス</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0">
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <iframe
                    src="https://maps.google.com/maps?q=%E5%AF%8C%E5%B1%B1%E7%9C%8C%E9%AB%98%E5%B2%A1%E5%B8%82%E5%BE%A1%E6%97%85%E5%B1%8B%E7%94%BA1222+%E3%82%A8%E3%83%AB%E3%83%91%E3%82%BB%E3%82%AA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-foreground">ギャラリー</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                    <Image
                      src={companyInterior}
                      alt="社内風景"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                    <Image
                      src={companyExterior}
                      alt="外観"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section id="contact" background="muted" title="Contact" subtitle="お問い合わせ">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <p className="text-lg leading-8 text-muted-foreground">
            サービスに関するご質問やご相談など、お気軽にお問い合わせください。
          </p>
        </div>
        <ContactForm />
      </Section>
    </div>
  );
}
