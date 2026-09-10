import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const baseUrl = "https://le-soleil0615.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "株式会社ル・ソレイユ | 富山県高岡市の自律支援・プログラミング教室",
    template: "%s | 株式会社ル・ソレイユ"
  },
  description: "富山県高岡市で放課後スクールことしろ、ロボット制作プログラミング教室ロボ団高岡校、人材育成コンサルティングを展開。働く女性と子どもの「自律」を応援します。",
  keywords: ["ル・ソレイユ", "高岡市", "プログラミング教室", "ロボ団", "人材研修", "自律教育", "富山県"],
  authors: [{ name: "株式会社ル・ソレイユ" }],
  category: "education",
  openGraph: {
    title: "株式会社ル・ソレイユ",
    description: "働く女性・育ち盛りの子どもの「自律」を応援。富山県高岡市のプログラミング教室・人材教育。",
    url: baseUrl,
    siteName: "株式会社ル・ソレイユ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/soleil-logo.jpg",
        width: 800,
        height: 600,
        alt: "株式会社ル・ソレイユ ロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ル・ソレイユ",
    description: "働く女性・育ち盛りの子どもの「自律」を応援。富山県高岡市のプログラミング教室・人材教育。",
    images: ["/soleil-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body
        className="antialiased min-h-screen flex flex-col overflow-x-hidden"
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
