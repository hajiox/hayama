import { headers } from "next/headers"
import type { Metadata } from "next"
import HayamaChashuLP from "@/components/hayama-chashu-lp"
import SiteHeader from "@/components/site-header"

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers()
  const protocol = h.get("x-forwarded-proto") ?? "https"
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000"
  const baseUrl = `${protocol}://${host}`

  const title = "【公式】麓山高原豚｜ラーメン屋が作る本物のチャーシュー国産｜会津ブランド館"
  const description =
    "福島県産ブランド豚『麓山高原豚』を炭酸低温煮込みと秘伝のタレで仕上げた本格チャーシュー。しっとり柔らかな赤身ととろける脂身が特徴。ラーメン屋が作る本物のチャーシュー。送料無料・即日発送（沖縄・離島除く）。"

  return {
    title: { default: title, template: "%s | 会津ブランド館" },
    description,
    alternates: { canonical: baseUrl },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "会津ブランド館",
      images: [
        {
          url: `${baseUrl}/images/OGP_アートボード 1.jpg`,
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
      title,
      description,
      images: [`${baseUrl}/images/OGP_アートボード 1.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  }
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
