"use client";

import { useState } from "react";

export default function CheckoutPage() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const sendOrder = () => {

    const message = `
新訂單

姓名：${name}

電話：${phone}

收件資訊：
${address}
`;

    const url =
      "https://line.me/R/oaMessage/@123slhaa/?" +
      encodeURIComponent(message);

    window.open(url);
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">

      <h1 className="text-4xl font-black mb-10">
        結帳資訊
      </h1>

      <div className="space-y-4 max-w-xl">

        <input
          placeholder="姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded"
        />

        <input
          placeholder="電話"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-4 rounded"
        />

        <textarea
          placeholder="收件資訊"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-4 rounded h-32"
        />

        <button
          onClick={sendOrder}
          className="w-full bg-black text-white py-4 rounded-xl font-black"
        >
          送出訂單
        </button>

      </div>

    </main>
  );
}