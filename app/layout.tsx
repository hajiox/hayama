import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import MetaPixel from "./_components/MetaPixel"
import OutboundClickTracker from "./_components/OutboundClickTracker"

export const metadata: Metadata = {
  title: {
    default: "会津ブランド館｜福島県会津の特産品・グルメ通販",
    template: "%s | 会津ブランド館",
  },
  description: "福島県会津の特産品・グルメを全国にお届け。会津の味をお楽しみください。",
  generator: "Next.js",
  applicationName: "会津ブランド館",
  referrer: "origin-when-cross-origin",
  keywords: ["会津", "福島", "特産品", "グルメ", "通販"],
  authors: [{ name: "会津ブランド館", url: "https://your-domain.com" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2EJ6JCB9N2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2EJ6JCB9N2');
    `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <style>
          {`
          body {
            font-family: 'Noto Sans JP', sans-serif;
          }
          h1, h2, h3 {
            font-family: 'Hiragino Kaku Gothic ProN', '游ゴシック体', sans-serif;
          }
        `}
        </style>
      </head>
      <body className="bg-background text-foreground">
        <MetaPixel />
        <OutboundClickTracker />
        {children}
      </body>
    </html>
  )
}
