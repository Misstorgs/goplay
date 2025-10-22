"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [pc, setPc] = useState("E4 6PE");
  const target = `/activities?pc=${encodeURIComponent(pc)}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">GoPlay 🎡 </h1>
      <p className="mt-2 text-lg text-gray-700">
        Find family-friendly activities near you — and book in a few taps.
      </p>

      <div className="mt-8 rounded-lg border p-4">
        <label className="block text-sm font-medium">Enter your postcode</label>
        <input
          value={pc}
          onChange={(e) => setPc(e.target.value)}
          placeholder="E4 6PE"
          className="mt-1 w-full rounded border px-3 py-2"
        />
        <p className="mt-3 text-sm text-gray-600">
          Type your postcode, then tap Browse.
        </p>
      </div>

      <Link
        href={target}
        className="mt-8 inline-block rounded bg-black px-4 py-2 font-semibold text-white"
      >
        Browse activities
      </Link>
    </main>
  );
}