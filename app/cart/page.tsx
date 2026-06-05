"use client";

import { useEffect, useState } from "react";

export default function CartPage() {

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(data);
  }, []);

  const removeItem = (index: number) => {

    const newCart = [...cart];

    newCart.splice(index, 1);

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main className="min-h-screen bg-white text-black p-6 md:p-10">

      <h1 className="text-4xl font-black mb-10">
        購物車
      </h1>

      {cart.length === 0 ? (

        <p>目前尚無商品</p>

      ) : (

        <>
          <div className="space-y-5">

            {cart.map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-4 flex gap-4 items-center"
              >

                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">

                  <p className="font-black text-lg">
                    {item.name}
                  </p>

                  <p>
                    尺寸：{item.size}
                  </p>

                  <p>
                    數量：{item.qty}
                  </p>

                  <p>
                    單價：NT$ {item.price}
                  </p>

                  <p className="font-bold">
                    小計：NT$ {item.price * item.qty}
                  </p>

                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  刪除
                </button>

              </div>

            ))}

          </div>

          <div className="mt-10 border-t pt-6">

            <div className="text-3xl font-black">
              總金額：NT$ {total}
              <a
                href="/checkout"
                className="block mt-6 bg-black text-white text-center py-4 rounded-xl font-black"
              >
                前往結帳
              </a>
            </div>

          </div>

        </>
      )}

    </main>
  );
}