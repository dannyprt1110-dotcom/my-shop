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

  return (
    <main className="min-h-screen bg-white text-black p-10">

      <h1 className="text-4xl font-black mb-10">
        購物車
      </h1>

      {cart.length === 0 ? (
        <p>目前尚無商品</p>
      ) : (
        <div className="space-y-5">

          {cart.map((item, index) => (

            <div
              key={index}
              className="border p-5 rounded"
            >
              <p className="font-bold">
                {item.name}
              </p>

              <p>
                NT$ {item.price}
              </p>

            </div>

          ))}

        </div>
      )}

    </main>
  );
}