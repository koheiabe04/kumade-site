import type { Metadata } from "next";
import { Noto_Sans_JP, Inter, Orbitron } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "くまで | かき集めろ、地方から。",
    template: "%s | くまで",
  },
  description:
    "くまでは福島県大熊町発のPR・ブランディング会社です。Webサイト・バナー・名刺などのクリエイティブ制作から、事業の伴走支援まで。",
  metadataBase: new URL("https://kumade.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "くまで",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-surface text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "くまで",
              url: "https://kumade.jp",
              logo: "https://kumade.jp/logo.svg",
              description:
                "福島県大熊町発のPR・ブランディング会社。クリエイティブ制作から事業の伴走支援まで。",
              address: {
                "@type": "PostalAddress",
                addressRegion: "福島県",
                addressLocality: "大熊町",
                addressCountry: "JP",
              },
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-surface focus:font-bold"
        >
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
