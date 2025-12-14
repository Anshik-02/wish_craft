"use client";

import Image from "next/image";
import React from "react";
import confetti from "canvas-confetti";
import BirthdayQualities from "./qualities";
import WishJar from "./wishjar";
import BirthdaySong from "./bdaySong";
import MemoryFlipBook from "./flipBook";

const BdayWebsite = ({ name, dob, message }) => {
  const displayConf = () => {
    confetti({
      particleCount: 600,
      spread: 160,
      origin: { y: 0.6 },
      colors: ["#FF5D8F", "#FF8FAB", "#FFD6A5"],
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#f5ead6] via-[#faf6f0] to-[#f5ead6] min-h-screen w-full overflow-x-hidden">
      <Image
        src="/rib.png"
        alt="ribbon"
        width={500}
        height={50}
        className="absolute  opacity-70 -rotate-3 z-0 md:w-100  w-50"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left z-1 ">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-[#C85A3A] leading-tight">
              Another <br /> Beautiful Year <br />
              Celebrating You!
            </h1>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-80  mx-auto">
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/cutu1.jpeg"
                alt="birthday"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-center text-xl sm:text-2xl font-bold mt-4 text-[#5B4E3E]">
              Main Character Energy Since<br></br>
              {dob}✨
            </h2>
          </div>
        </div>
        <div
          onClick={displayConf}
          className="mt-16 cursor-pointer rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#FFF6EE] to-[#FFEFE3]
          shadow-[0_12px_40px_rgba(0,0,0,0.08)]
          hover:translate-y-1 transition-all text-center"
        >
          <p className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#C25B5B]">
            Happy Birthday
            <br />
            <span className="text-[#8B3A3A]">
              Dear{" "}
              <span className="text-[#C85A3A] underline decoration-dotted">
                {name}
              </span>
            </span>
          </p>
        </div>

        <div className="mt-20 bg-[#FEFEF1] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#8B4A52] mb-4">
              A Message for You 💖
            </h2>
            <p className="text-lg sm:text-2xl text-[#784850] leading-relaxed">
              Another year older, another year stronger.
              <br />
              {message}
            </p>
          </div>

          <div className="relative  h-80  md:h-130 rounded-2xl overflow-hidden">
            <Image src="/bd1.jpeg" alt="memory" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <BirthdayQualities />

          <div className="bg-[#FFF8EE] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 sm:p-10">
            <h2 className="text-3xl sm:text-4xl text-center text-[#C25B5B] font-bold mb-6">
              Message to Future You
            </h2>

            <div className="w-20 h-1 bg-[#E7B08E] rounded-full mx-auto mb-8"></div>

            <p className="text-base sm:text-2xl leading-relaxed text-[#5A4A42] whitespace-pre-line">
              Dear Future You, If you’re reading this, remember how far you’ve
              come. You survived days you thought you wouldn’t, and you grew in
              ways you didn’t notice at the time. Be kind to yourself — you’re
              doing better than you think. 🤍
            </p>

            <p className="mt-8 text-right text-[#C25B5B] font-semibold">
              — From your loved ones
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Image
            src="/bd22.png"
            width={900}
            height={400}
            alt="decor"
            className="w-full max-w-4xl"
          />
        </div>
        <div
          className="
  flex flex-col 
  lg:flex-row 
  md:gap-12 
  items-stretch 
  justify-center
  px-4
"
        >
          <MemoryFlipBook />
          <BirthdaySong />
        </div>
        <WishJar />
      </div>
      <p className="text-lg md:text-xl text-[#7A5A4A] text-center mb-20">
        Create one for someone who means the world to you <br></br>
        <a></a>
      </p>
    </div>
  );
};

export default BdayWebsite;
