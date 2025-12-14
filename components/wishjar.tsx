"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wishes = [
  "May your mornings feel lighter 🌤️",
  "May you always remember your worth 🤍",
  "May happiness find you in quiet moments ✨",
  "May your dreams feel closer this year 🌙",
  "May love meet you gently, again and again 💫",
  "May you grow without losing yourself 🌱",
  "May peace become your default state 🕊️",
  "May life surprise you in good ways 🎁",
];

export default function WishJar() {
  const [currentWish, setCurrentWish] = useState<string | null>(null);

  const getWish = () => {
    const random = wishes[Math.floor(Math.random() * wishes.length)];
    setCurrentWish(random);
  };

  return (
    <section className="md:mt-15  px-6 flex justify-center">
      <div className="max-w-xl md:w-xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#C25B5B] mb-6">
          A Little Wish for You ✨
        </h2>

        <motion.div
          onClick={getWish}
          whileTap={{ scale: 0.97 }}
          className="
            cursor-pointer
            bg-white/50 backdrop-blur-xl
            border border-white/60
            rounded-3xl
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            p-10
            transition-all
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
        >
          <AnimatePresence mode="wait">
            {currentWish ? (
              <motion.p
                key={currentWish}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl text-[#5A4A42] leading-relaxed"
              >
                {currentWish}
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg md:text-xl text-[#8B6F63]"
              >
                Tap the jar to open a wish 
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>


        <p className="mt-4 text-sm text-[#9C7C6A]">
          You can tap more than once 🤍
        </p>
      </div>
    </section>
  );
}
