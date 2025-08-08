"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle, Facebook, Instagram, Youtube } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HayamaChashuLP() {
const reviews = [
{
  name: "お客様１",
  title: "想像以上にとろける赤身！",
  rating: 5,
  body:
    "脂身だけでなく、赤身までやわらかいなんて初めて。口に入れた瞬間、ふわっとほどけました。",
},
{
  name: "お客様２",
  title: "臭みゼロでびっくり",
  rating: 5,
  body:
    "正直、外国産獣臭が苦手だったんですが、これはまったく気にならない！国産の良さを実感しました。",
},
{
  name: "お客様３",
  title: "冷凍なのに出来たてレベル",
  rating: 4,
  body:
    "冷凍で届いたとは思えないほどジューシーで柔らかい。ストックしておいても味が落ちないのが嬉しいです。",
},
{
  name: "お客様４",
  title: "炒飯の具にも最高",
  rating: 5,
  body:
    "カットして炒飯に入れたら家族に大好評。香りも食感も贅沢すぎるほどのチャーシューです。",
},
{
  name: "お客様５",
  title: "付属のタレが美味しすぎてご飯が止まらない",
  rating: 4,
  body:
    "チャーシューの旨みがしみたタレが絶品。ご飯にかけるだけで立派なおかずになります！",
},
{
  name: "お客様６",
  title: "ラーメン屋超えました…",
  rating: 5,
  body:
    "近所のラーメン屋より美味しいかも…。このクオリティが家で食べられるのは本当にありがたいです。",
},
{
  name: "お客様７",
  title: "プレゼントにしたら喜ばれました",
  rating: 4,
  body:
    "父の日に贈ったら、「こんなチャーシュー初めて食べた」と感動してました。ギフトにもおすすめ。",
},
{
  name: "お客様８",
  title: "食感がプロの仕上がり",
  rating: 5,
  body:
    "しっとり、でも崩れない絶妙な火入れ。まさに職人の仕事って感じです。",
},
{
  name: "お客様９",
  title: "麺よりチャーシューが主役に",
  rating: 4,
  body:
    "ラーメンを作ったけど、チャーシューが主役になってしまった…。それぐらい存在感あります。",
},
{
  name: "お客様１０",
  title: "リピート確定です！",
  rating: 5,
  body:
    "最初は試しに1パックだけ注文したけど、すぐにまとめ買いしました。冷凍庫に常備したい！",
},
]

const products = [
{
  image: "/images/product-500g.jpg",
  titleLine1: "麓山高原豚 ラーメン屋が作る本物のチャーシュー",
  titleLine2: "国産 500ｇ",
  price: "4,390円（税・冷凍送料込）",
  note: "先ずはお試しに",
  href: "#",
},
{
  image: "/images/product-1000g.jpg",
  titleLine1: "麓山高原豚 ラーメン屋が作る本物のチャーシュー",
  titleLine2: "国産 1,000ｇ",
  price: "6,480円（税・冷凍送料込）",
  note: "リピーターの皆さまへ",
  href: "#",
},
{
  image: "/images/product-gift-700g.jpg",
  titleLine1: "麓山高原豚 ラーメン屋が作る本物のチャーシュー",
  titleLine2: "国産 700ｇ",
  price: "6,280円（税・冷凍送料・化粧箱代込）",
  note: "大切なあの方への贈り物に",
  href: "#",
},
]

return (
<div className="bg-white">
  {/* ヒーロー（ファーストビュー） */}
  <section className="relative">
    <div className="relative h-[56vh] md:h-[64vh]">
      <Image
        src="/images/main-visual-artboard-1.jpg"
        alt="麓山高原豚チャーシュー メインビジュアル"
        fill
        className="object-cover"
        priority
      />
    </div>
    {/* メインコピー（画像に重ねず下に配置） */}
    <div className="bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 font-heading">
          たどり着いた、チャーシューの最高峰。
          <br className="hidden sm:block" />
          福島県産ブランド豚『麓山高原豚チャーシュー』誕生
        </h1>
        <div className="space-y-5 text-gray-700 leading-relaxed text-[17px] font-sans">
          <p className="font-semibold">会津ブランド館がこのチャーシューを作る理由</p>
          <p>
            コロナ禍で「お店に行けない」「もう一度、あの味を家で食べたい」という声を多くいただきました。その想いに応えるべく、私たちは商品開発に踏み出しました。
          </p>
          <p>
            炭酸低温煮込み、継ぎ足しのたれなど、ラーメン店として培ってきた独自のノウハウを余すことなく注ぎ込みました。
          </p>
          <p>
            気づけば、Amazonベストセラー、楽天・Yahooランキング1位、メルカリショップアワード受賞と、ありがたい評価もいただくようになりました。
          </p>
          <p>
            けれど、私たちが目指しているのは“数字”ではなく、“心に残る味”。あの日のラーメンを思い出してもらえるように──今日も変わらず、チャーシューを煮込み続けています。
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 信頼指標バー */}
  <section className="bg-rose-50 py-8">
    <div className="container mx-auto px-4">
      <p className="text-center text-base md:text-lg font-semibold text-gray-800 mb-6 font-sans">
        会津ブランド館のチャーシュー。ご評価頂きありがとうございます。
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Image src="/images/rakuten-rank-1-item1.jpg" alt="楽天ランキング1位獲得" width={210} height={120} className="rounded border bg-white" />
        <Image src="/images/rakuten-rank-1-item2.jpg" alt="楽天ランキング1位獲得" width={210} height={120} className="rounded border bg-white" />
        <Image src="/images/rakuten-rank-1-item3.jpg" alt="楽天ランキング1位獲得" width={210} height={120} className="rounded border bg-white" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Image src="/images/yahoo-rank-1-item1.jpg" alt="Yahoo!ショッピングカテゴリランキング1位獲得" width={210} height={120} className="rounded border bg-white" />
        <Image src="/images/yahoo-rank-1-item2.jpg" alt="Yahoo!ショッピングカテゴリランキング1位獲得" width={210} height={120} className="rounded border bg-white" />
        <Image src="/images/yahoo-rank-2-item1.jpg" alt="Yahoo!ショッピングカテゴリランキング2位入賞" width={210} height={120} className="rounded border bg-white" />
      </div>
    </div>
  </section>

  {/* 麓山高原豚とは */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-heading">麓山高原豚とは</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/hayama-chashu-about.png"
            alt="麓山高原豚のイメージ"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="text-[17px] leading-relaxed text-gray-700 space-y-4 font-sans">
          <p>
            福島県が誇るブランド豚「麓山高原豚（はやまこうげんとん）」は、県内の指定農場で丁寧に育てられた、安全・安心・高品質な国産豚肉です。
          </p>
          <p>
            最大の特徴は、しっとり柔らかな赤身と、とろけるような甘みのある脂身。その肉質は、加熱してもパサつかず、まるで口の中でほどけるような食感を実現します。臭みが少なく、冷めても美味しいという点も高く評価されています。
          </p>
          <p>
            飼育環境や飼料にもこだわり、ストレスの少ない環境で育てられることで、肉本来の旨味が引き出されています。特にチャーシューなどの加工用途において、その柔らかさと風味の良さはプロの料理人からも高い支持を集めています。
          </p>
          <p>
            冷凍流通が主流の輸入豚とは異なり、冷蔵流通による鮮度の高さも大きな魅力です。
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 肉の美味しさの秘密 */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-heading">麓山高原豚の美味しさの秘密</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1 赤身の柔らかさ */}
        <div className="space-y-3">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/赤身の柔らかさ.png"
              alt="赤身の柔らかさ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="font-bold font-heading">● 赤身の柔らかさ</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            豚バラといえば脂のとろける食感が魅力ですが、本当に差が出るのは赤身。麓山高原豚は、赤身までしっとりと柔らかく、加熱してもパサつかず、箸で切れるほどの繊細さ。口の中でふわっとほどけるその食感は、一度味わうと忘れられません。
          </p>
        </div>
        {/* 2 臭みの少なさ */}
        <div className="space-y-3">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/臭みの少なさ.png"
              alt="臭みの少なさ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="font-bold font-heading">● 臭みの少なさ</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            豚肉特有の獣臭は、調理後にどうしても気になるポイントですが、麓山高原豚はその臭みが極めて少ないのが特徴です。特にチャーシューのように冷まして食べる料理でも、翌日まで臭みが出にくく、最後の一口まで美味しく食べられます。
          </p>
        </div>
        {/* 3 鮮度の差 */}
        <div className="space-y-3">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/鮮度の差.png"
              alt="鮮度の差"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="font-bold font-heading">● 鮮度の差</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            外国産豚肉の多くは冷凍流通が基本ですが、麓山高原豚はすべて冷蔵で届けられます。解凍によるドリップや冷凍焼けの心配がなく、加工時の鮮度が段違い。私たちも加工の現場でその違いを日々実感しています。鮮度こそ、美味しさの土台です。
          </p>
        </div>
        {/* 4 安心・安全 */}
        <div className="space-y-3">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/安心・安全の取り組み.png"
              alt="安心・安全の取り組み"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="font-bold font-heading">● 安心・安全の取り組み</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            麓山高原豚は、福島県の指定農場でのみ生産され、全頭に出荷管理と履歴情報が付けられています。抗生物質に頼らない飼育、徹底された衛生管理、冷蔵による高鮮度出荷。さらに第三者の品質監査も受け、安全性への取り組みは国産ならではの信頼があります。
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 秘伝の製法 */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-heading">旨さを閉じ込める、炭酸低温煮込み</h2>
      <div className="flex flex-col gap-12">
        {/* 1. 炭酸がもたらす驚きの柔らかさ */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/IMG_0949（補正）.jpg"
              alt="炭酸低温煮込みのイメージ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4 font-sans">
            <h3 className="text-xl font-bold font-heading">● 炭酸がもたらす驚きの柔らかさ</h3>
            <p className="text-[17px] leading-relaxed text-gray-700">
              チャーシューの命は“食感”にあります。私たちは煮込み時に炭酸水を加えるという独自の製法で、肉の繊維を壊さず、芯までしっとりと仕上げています。グツグツ煮立てず、温度を徹底管理することで、赤身までふわっとほどけるような柔らかさを実現しました。これはご家庭ではなかなか再現できない、プロの技術です。
            </p>
          </div>
        </div>

        {/* 2. 継ぎ足し育てた“秘伝のたれ” */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] w-full md:order-2">
            <Image
              src="/images/IMG_9059.jpg"
              alt="秘伝のたれのイメージ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4 font-sans md:order-1">
            <h3 className="text-xl font-bold font-heading">● 継ぎ足し育てた“秘伝のたれ”</h3>
            <p className="text-[17px] leading-relaxed text-gray-700">
              煮込み終わったチャーシューはすぐに切らず、継ぎ足して育てた濃厚なタレに一晩じっくり漬け込みます。何度も使い込むことで旨みが蓄積されたタレは、ゼラチン質のようにとろみを帯び、まさに「味のかたまり」。このタレが、肉に奥深いコクと香りを染み渡らせていくのです。
            </p>
          </div>
        </div>

        {/* 3. 毎日炊くからこそ、たどり着ける味 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/IMG_0965（補正）.jpg"
              alt="毎日炊くイメージ"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4 font-sans">
            <h3 className="text-xl font-bold font-heading">● 毎日炊くからこそ、たどり着ける味</h3>
            <p className="text-[17px] leading-relaxed text-gray-700">
              毎日のようにチャーシューを仕込む現場では、火加減・時間・漬け込み具合といった細部が、職人の手と感覚で磨かれていきます。何百キロという肉を扱う中で、見えてくるのは「再現ではなく積み重ね」。どんなに良いレシピも、仕込みを重ねてはじめて“芯まで旨い”チャーシューが出来上がります。私たちがたどり着いた味は、プロの現場でしか生まれない日常の積み重ねです。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 商品カード */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-heading">商品カード</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <Card key={i} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-square w-full bg-white">
              <Image src={p.image || "/placeholder.svg"} alt={`${p.titleLine1} ${p.titleLine2}`} fill className="object-contain p-4" />
            </div>
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg leading-snug font-heading">{p.titleLine1}</CardTitle>
              <CardDescription className="text-base text-gray-800 font-sans">{p.titleLine2}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600 font-sans">{p.price}</p>
              <p className="text-sm font-medium text-blue-600 mt-2 font-sans">{p.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* 送料無料・即日配送 */}
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative aspect-[3/1] w-full">
          <Image src="/images/free-shipping.jpg" alt="送料無料（沖縄・離島地域除く）" fill className="object-contain" />
        </div>
        <div className="relative aspect-[3/1] w-full">
          <Image src="/images/same-day-shipping.jpg" alt="14時までのご注文で即日発送" fill className="object-contain" />
        </div>
      </div>
    </div>
  </section>

  {/* お客様の声 */}
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-heading">お客様の声</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, idx) => (
          <Card key={idx} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/images/avatar-male.jpg" alt="お客様アバター" fill className="object-cover" />
                </div>
                <span className="text-sm text-gray-600 font-sans">{r.name}</span>
              </div>
              <CardTitle className="text-base font-heading">{r.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span className="sr-only">評価</span>
                <span className="flex items-center">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">{r.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* よくあるご質問（FAQ） */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-heading">よくあるご質問（FAQ）</h2>
      <div className="space-y-6 font-sans">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg mb-2 font-heading">Q1. 黒っぽい筋や斑点がありますが、大丈夫ですか？</h3>
          <p className="text-gray-700">
            A. はい、ご安心ください。豚肉には血管や血液の一部が残ることがあり、加熱によって黒く変色して見えることがあります。特に国産豚は冷蔵のまま加工するため血合いが残りやすい傾向がありますが、衛生面・品質面に問題はありません。
          </p>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg mb-2 font-heading">Q2. 脂身は多いですか？</h3>
          <p className="text-gray-700">
            A. はい、本商品は脂身のしっかり入った豚バラ肉を使用しています。麓山高原豚ならではのとろけるような脂身と上品な甘みが特徴で、多くのお客様にご好評いただいています。ただし、脂身が苦手な方には重く感じる場合もあるため、ご購入をお控えいただくことをおすすめいたします。
          </p>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg mb-2 font-heading">Q3. 冷凍で届くとのことですが、味は落ちませんか？</h3>
          <p className="text-gray-700">
            A. ご安心ください。商品は真空パック後、最新の冷凍技術で急速冷凍しております。解凍後もジューシーさと柔らかさを損なうことなく、美味しくお召し上がりいただけます。
          </p>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg mb-2 font-heading">Q4. 賞味期限と保存方法は？</h3>
          <p className="text-gray-700">
            A. 冷凍保存で製造日より1年間の賞味期限があります。解凍後は未開封で冷蔵3日以内にお召し上がりください。開封後は風味が損なわれやすいため、なるべくお早めにお召し上がりください。
          </p>
        </div>
        <div className="pb-4">
          <h3 className="font-semibold text-lg mb-2 font-heading">Q5. たれはついていますか？</h3>
          <p className="text-gray-700">
            A. はい、<strong>チャーシュー専用の特製たれ（80cc）</strong>が1本付属します。本みりんと日本酒を使用し、チャーシューの旨みをさらに引き立てる仕上がりにしています。温めたチャーシューにかけて、ご飯や麺との相性をぜひお楽しみください。
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* ご購入はこちらから */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 font-heading">ご購入はこちらから</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Yahoo!ショッピング */}
        <div className="bg-[#ffdddd] p-6 rounded-lg">
          <Link
            href="https://store.shopping.yahoo.co.jp/aizubrandhall/b9f1bbbaa5.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
              <Image
                src="/images/btn-yahoo.png"
                alt="Yahoo!ショッピング"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h4 className="font-bold mb-2 text-center font-heading">Yahoo!ショッピング</h4>
            <p className="text-sm text-center mb-4 font-sans">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            <p className="text-sm text-center text-red-600 font-bold font-sans">
              初めて当店をご利用のお客様に300円クーポン進呈中！
            </p>
          </Link>
        </div>

        {/* 楽天市場 */}
        <div className="bg-[#deeeff] p-6 rounded-lg">
          <Link
            href="https://item.rakuten.co.jp/aizubrandhall/c/0000000046/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
              <Image
                src="/images/btn-rakuten.png"
                alt="楽天市場"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h4 className="font-bold mb-2 text-center font-heading">楽天市場</h4>
            <p className="text-sm text-center mb-4 font-sans">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
            <p className="text-sm text-center text-red-600 font-bold font-sans">
              初めて当店をご利用のお客様に300円クーポン進呈中！
            </p>
          </Link>
        </div>

        {/* Amazon */}
        <div className="bg-[#e8ffdd] p-6 rounded-lg">
          <Link
            href="https://www.amazon.co.jp/stores/page/9A19417C-074B-43ED-9477-302F610BF444"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
              <Image
                src="/images/btn-amazon.png"
                alt="Amazon"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </Link>
          <h4 className="font-bold mb-2 text-center font-heading">Amazon</h4>
          <p className="text-sm text-center mb-4 font-sans">世界最大のショッピングモールでのお買い物はこちら</p>
        </div>
      </div>
    </div>
  </section>

  {/* 店舗情報 */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-2 md:px-4">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8 px-4 font-heading">
        この商品は「会津ブランド館」が製造・販売・発送を行っています。
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/exterior.jpg"
            alt="会津ブランド館 店舗外観"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4 font-sans">
          <h3 className="text-2xl font-bold mb-2 font-heading">店舗案内</h3>
          <div className="space-y-2">
            <p className="font-bold">会津ブランド館</p>
            <p>〒965-0044</p>
            <p>福島県会津若松市七日町6−15</p>
            <p>TEL: 0242-25-4141</p>
            <p>営業時間: 11時〜16時</p>
            <p>定休日: 12月31日・1月1日</p>
            <p className="text-sm text-gray-600">（発送もお休みさせて頂きます）</p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-8 max-w-5xl mx-auto">
        <div className="aspect-[16/9] w-[70%] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.744914857655!2d139.9291543!3d37.4977777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8aaa5961ea738b%3A0x4a6c5d39e7d27eb!2z44CSOTYzLTAwNDQg56aP5bO255yM5Lya5rSl6IyF5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1709697431099!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* SNSリンク */}
      <div className="flex justify-center space-x-6 mt-8">
        <Link
          href="https://www.facebook.com/aizubrandkan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <Facebook size={32} />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="https://x.com/Aizu_Brand_Kan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
          <span className="sr-only">X (formerly Twitter)</span>
        </Link>
        <Link
          href="https://www.instagram.com/aizubrandhall/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-600"
        >
          <Instagram size={32} />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-red-600"
        >
          <Youtube size={32} />
          <span className="sr-only">YouTube</span>
        </Link>
      </div>
    </div>
  </section>

  {/* フッター */}
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
    </div>
  </footer>
</div>
)
}
