// components/templates/CardOnePreview.tsx
"use client";

import Image from "next/image";

const CardOnePreview = () => {
  return (
    <div
      className="
        bg-gradient-to-b from-[#f5ead6] via-[#faf6f0] to-[#f5ead6]
        rounded-3xl
        p-6
        shadow-[0_20px_40px_rgba(255,200,180,0.35)]
      "
    >
      <h3 className="text-2xl font-semibold text-[#C85A3A] text-center">
        Another Beautiful Year 🎂
      </h3>

      <div className="mt-4 bg-white rounded-2xl p-4 shadow-md">
        <div className="relative h-40 rounded-xl overflow-hidden">
          <Image
            src="/cutu1.jpeg"
            alt="birthday"
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-3 text-center text-[#5B4E3E] font-medium">
          Main Character Energy ✨
        </p>
      </div>

      <p className="mt-4 text-center text-[#784850] text-sm">
        A warm, playful birthday page filled with joy and love.
      </p>
    </div>
  );
};

export default CardOnePreview;
