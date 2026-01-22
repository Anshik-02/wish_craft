"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="px-6 lg:px-32 py-55 bg-gradient-to-br from-[#FFF6E9] via-[#FFF1E0] to-[#FFEEDB]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mx-60">
        
        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-6xl lg:text-7xl font-semibold text-[#3B2F2F]">
            Send birthday wishes that feel personal
          </h1>

          <p className="mt-6 text-2xl text-[#6B5A52] leading-relaxed">
            Create warm, thoughtful birthday pages for the people who matter
            most — filled with words, memories, and moments they’ll want to come
            back to.
          </p>
        </div>

        {/* PREVIEW CARD */}
        <div className="w-[420px] bg-white rounded-3xl p-8 shadow-[0_25px_50px_rgba(229,143,143,0.25)]">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-[#F3CACA] rounded-full"></div>
            <div>
              <p className="text-lg font-medium text-[#3B2F2F]">Astra</p>
              <p className="text-sm text-[#6B5A52]">Birthday · XX / XX</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl p-6 bg-gradient-to-br from-[#FFF6E9] to-[#FFEEDB]">
            <p className="text-[#4B3A3A] leading-relaxed">
              Some people don’t just grow older on their birthday — they grow
              deeper into our lives. This is a small space to say the things that
              matter, and to turn a birthday into something that stays.
              <br />
              <span className="block mt-3">Sent with love 🤍</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
