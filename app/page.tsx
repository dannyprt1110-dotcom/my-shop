export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative">

        <img
          src="/hero.jpg"
          className="w-full h-screen object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-16 left-6 z-10">

          <h1 className="text-5xl font-black leading-none">
            SMANS
            <br />
            ARCHIVE
          </h1>

          <p className="mt-4 text-sm tracking-[0.3em] text-white/70">
            STREETWEAR / UNDERGROUND
          </p>

          <a
            href="https://shopee.tw/"
            target="_blank"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full text-lg font-black"
          >
            BUY NOW
          </a>

        </div>

      </section>

      {/* FLOAT BUTTON */}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">

        <a
          href="https://myship.7-11.com.tw/"
          target="_blank"
          className="bg-orange-500 text-white px-5 py-3 rounded-full font-black shadow-xl"
        >
          賣貨便
        </a>

        <a
          href="https://line.me/"
          target="_blank"
          className="bg-green-500 text-white px-5 py-3 rounded-full font-black shadow-xl"
        >
          LINE 客服
        </a>

      </div>

      {/* PRODUCT */}
      <section className="px-5 py-20">

        <h2 className="text-4xl font-black uppercase">
          OVERSIZED TEE
        </h2>

        <p className="mt-4 text-white/60 leading-7">
          Heavyweight fabric /
          oversized silhouette /
          underground graphics
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10">

          <img
            src="/front.jpg"
            className="w-full"
          />

          <img
            src="/back.jpg"
            className="w-full"
          />

        </div>

      </section>

      {/* LOOKBOOK */}
      <section className="px-5 py-20">

        <h2 className="text-3xl font-black tracking-[0.2em] mb-10">
          LOOKBOOK
        </h2>

        <div className="flex flex-col gap-5">

          <img
            src="/look1.jpg"
            className="w-full"
          />

          <img
            src="/look2.jpg"
            className="w-full"
          />

          <img
            src="/look3.jpg"
            className="w-full"
          />

        </div>

      </section>

      {/* DETAIL */}
      <section className="bg-white text-black px-5 py-20">

        <h2 className="text-3xl font-black tracking-[0.2em] mb-10">
          DETAIL
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <img
            src="/detail1.jpg"
            className="aspect-square object-cover"
          />

          <img
            src="/detail2.jpg"
            className="aspect-square object-cover"
          />

          <img
            src="/detail3.jpg"
            className="aspect-square object-cover"
          />

          <img
            src="/detail4.jpg"
            className="aspect-square object-cover"
          />

        </div>

      </section>

      {/* SIZE */}
      <section className="bg-white text-black px-5 py-20">

        <h2 className="text-3xl font-black tracking-[0.2em] mb-10">
          SIZE CHART
        </h2>

        <div className="border border-black">

          <div className="grid grid-cols-4 bg-black text-white text-center">

            <div className="py-4"></div>
            <div className="py-4">衣長</div>
            <div className="py-4">胸寬</div>
            <div className="py-4">袖長</div>

          </div>

          <div className="grid grid-cols-4 text-center border-t border-black">

            <div className="py-5 border-r border-black font-black">
              M
            </div>

            <div className="py-5 border-r border-black">
              72
            </div>

            <div className="py-5 border-r border-black">
              60
            </div>

            <div className="py-5">
              23
            </div>

          </div>

          <div className="grid grid-cols-4 text-center border-t border-black">

            <div className="py-5 border-r border-black font-black">
              L
            </div>

            <div className="py-5 border-r border-black">
              76
            </div>

            <div className="py-5 border-r border-black">
              64
            </div>

            <div className="py-5">
              25
            </div>

          </div>

        </div>

      </section>

      {/* TRY ON */}
      <section className="bg-white text-black px-5 pb-24">

        <h2 className="text-3xl font-black tracking-[0.2em] mb-10">
          TRY ON
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between border-b border-black/10 pb-4">
            <span>Leo</span>
            <span>181 / 65 ・ L</span>
          </div>

          <div className="flex justify-between border-b border-black/10 pb-4">
            <span>Mason</span>
            <span>169 / 70 ・ L</span>
          </div>

          <div className="flex justify-between border-b border-black/10 pb-4">
            <span>Ethan</span>
            <span>172 / 75 ・ M</span>
          </div>

          <div className="flex justify-between border-b border-black/10 pb-4">
            <span>Chloe</span>
            <span>165 / 45 ・ M</span>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white px-5 py-20 border-t border-white/10">

        <h2 className="text-2xl font-black">
          SMANS ARCHIVE
        </h2>

        <p className="mt-4 text-white/50 leading-7 text-sm">
          STREETWEAR /
          UNDERGROUND /
          TAIWAN BRAND
        </p>

        <div className="mt-10 space-y-3 text-sm text-white/70">

          <p>Instagram : @smans.archive</p>

          <p>LINE : @xxxxxx</p>

          <p>Email : smansarchive@gmail.com</p>

        </div>

      </footer>

    </main>
  )
}