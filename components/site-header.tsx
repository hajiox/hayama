"use client"

import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="bg-white py-6 border-b">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Image
          src="/images/header-logo.jpg"
          alt="AIZU BRAND HALL（会津ブランド館）"
          width={220}
          height={80}
          className="h-16 w-auto"
          priority
        />
      </div>
    </header>
  )
}
