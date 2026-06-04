export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24">

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none">
            SMANS<br /> ARCHIVE
          </h1>

          <p className="mt-6 text-white/70 tracking-[0.3em] uppercase">
            STREETWEAR / UNDERGROUND / CULTURE
          </p>

          <a
            href="https://tw.shp.ee/4EYZBJN3"
            target="_blank"
            className="mt-10 w-fit bg-white text-black px-10 py-5 rounded-full text-2xl font-black hover:scale-105 duration-300"
          >
            BUY NOW
          </a>

        </div>

      </section>

      {/* PRODUCT */}
      <section className="bg-white text-black px-6 md:px-20 py-24">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-2xl font-black uppercase">
              Oversized Tee
            </h2>

            <p className="mt-8 text-black/70 leading-8">
              高磅數純棉洗水
              <br />
              日本膠印技術
              <br />
              oversize 小落肩設計
              <br />
              透氣、設計、質感
            </p>

            <div className="mt-10 text-4xl font-black">
              NT$ 680
            </div>

            <a
              href="https://tw.shp.ee/4EYZBJN3"
              target="_blank"
              className="inline-block mt-10 bg-black text-white px-10 py-5 rounded-full text-2xl font-black"
            >
              BUY NOW
            </a>

          </div>

          {/* RIGHT */}

           <div className="grid grid-cols-2 gap-6">

            <a href="商品網址1" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p1.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>
            <a href="商品網址2" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p2.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址3" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p3.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址4" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p4.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址5" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p5.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>
            <a href="商品網址6" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p6.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址7" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p7.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>
            <a href="商品網址8" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p8.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址9" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p9.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址10" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p10.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址11" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p11.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址12" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p12.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址13" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p13.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址14" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p14.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>
          
            <a href="商品網址15" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p15.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>


            <a href="商品網址16" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p16.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>


            <a href="商品網址17" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p17.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>


            <a href="商品網址18" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p18.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>

            <a href="商品網址19" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p19.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>


            <a href="商品網址20" target="_blank" className="overflow-hidden rounded-lg">
              <img
                src="/p20.jpg"
                className="w-full aspect-square object-cover hover:scale-105 duration-300"
              />
            </a>          


          </div>

        </div>

      </section>


      {/* FOOTER */}
      <section className="bg-black text-white px-6 md:px-20 py-20 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-black uppercase">
           Smans ARCHIVE
          </h2>

          <p className="mt-6 text-white/60 leading-8">
            STREETWEAR / VINTAGE / UNDERGROUND
            <br />
            Taiwan Street Culture
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-10 text-white/70">

            <div>

              <h3 className="font-bold mb-4">
                SHOP INFO
              </h3>

              <p>
                Mon - Fri
                <br />
                12:00 - 22:00
              </p>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                CONTACT
              </h3>

              <p>
                LINE : @123slhaa
                <br />
                IG : @smans0620
              </p>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                SHIPPING
              </h3>

              <p>
                7-11 賣貨便
                <br />
                Taiwan Only
              </p>

            </div>

          </div>

          <div className="mt-16 text-white/30 text-sm">
            © 2026 BEST ARCHIVE
          </div>

        </div>

      </section>

      {/* FLOAT BUTTON */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        <a
          href="https://myship.7-11.com.tw/general/detail/GM2605269991682"
          target="_blank"
          className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-black shadow-lg"
        >
          賣貨便
        </a>

        <a
          href="https://lin.ee/7ULkjPK"
          target="_blank"
          className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-black shadow-lg"
        >
          LINE 客服
        </a>

        <a
          href="https://tw.shp.ee/4EYZBJN3"
          target="_blank"
          className="bg-white text-black px-10 py-5 rounded-full text-3xl font-black shadow-lg"
        >
          BUY
        </a>

      </div>

    </main>
  )
}