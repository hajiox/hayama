import type { Metadata } from "next"
import HayamaChashuLP from "@/components/hayama-chashu-lp"
import SiteHeader from "@/components/site-header"

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // 本番環境のドメインに置き換えてください
  title: {
    default: "【公式】麓山高原豚チャーシュー｜ラーメン屋が作る本物の味｜会津ブランド館",
    template: "%s | 会津ブランド館",
  },
  description:
    "たどり着いた、チャーシューの最高峰。福島県産ブランド豚『麓山高原豚チャーシュー』誕生。炭酸低温煮込みと秘伝のタレで仕上げた、しっとり柔らかな本格チャーシュー。Amazon・楽天・Yahoo!ランキング1位獲得。ご自宅でラーメン屋の味を。ギフトにも最適。送料無料・即日発送（沖縄・離島除く）。",
  keywords:
    "麓山高原豚,チャーシュー,ラーメン屋,本物,福島県産,ブランド豚,炭酸低温煮込み,秘伝のタレ,お取り寄せ,通販,ギフト,会津ブランド館,送料無料,即日発送,Amazon,楽天,Yahoo",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "【公式】麓山高原豚チャーシュー｜ラーメン屋が作る本物の味｜会津ブランド館",
    description:
      "福島県産ブランド豚『麓山高原豚』を炭酸低温煮込みと秘伝のタレで仕上げた本格チャーシュー。しっとり柔らかな赤身ととろける脂身が特徴。Amazon・楽天・Yahoo!ランキング1位獲得。",
    url: "https://your-domain.com", // 本番環境のドメインに置き換えてください
    siteName: "会津ブランド館",
    images: [
      {
        url: "/images/ogp-chashu.jpg", // publicディレクトリからの相対パス
        width: 1200,
        height: 630,
        alt: "麓山高原豚チャーシューの盛り付け写真",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "【公式】麓山高原豚チャーシュー｜ラーメン屋が作る本物の味｜会津ブランド館",
    description:
      "福島県産ブランド豚『麓山高原豚』を炭酸低温煮込みと秘伝のタレで仕上げた本格チャーシュー。しっとり柔らかな赤身ととろける脂身が特徴。",
    images: [
      {
        url: "/images/ogp-chashu.jpg", // publicディレクトリからの相対パス
        alt: "麓山高原豚チャーシューの盛り付け写真",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // 必要に応じて設定してください
  },
  alternates: {
    canonical: "https://your-domain.com", // 本番環境のドメインに置き換えてください
  },
  category: "food",
  classification: "チャーシュー通販",
  other: {
    "product:price:amount": "4390",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "hayama-chashu",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > 豚肉加工品",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HayamaChashuLP />
      </main>
    </div>
  )
}
