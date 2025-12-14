"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const memories = [
  "/m1.jpeg",
  "/mem2.jpeg",
  "/mem3.jpeg",
  "/mem4.jpeg",
  "/mem5.jpeg",
  "/mem7.jpeg",
  "/mem8.jpeg",
  "/mem9.jpeg",
  "/mem10.jpeg",
  "/mem11.jpeg",
  "/mem12.jpeg",



];

export default function MemoryFlipBook() {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < memories.length - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section className="mt-24 px-4 flex justify-center">
      <div className="w-full max-w-xl md:min-w-100 sm:max-w-md md:max-w-lg">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center mb-8 text-[#C25B5B] font-semibold">
          Our Little Memories 📖
        </h2>

        {/* Book */}
        <div className="relative bg-[#FFF8EE] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={memories[page]}
                alt={`memory-${page}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Page number */}
          <p className="mt-4 text-center text-sm text-[#8B6A60]">
            Page {page + 1} of {memories.length}
          </p>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              disabled={page === 0}
              className="px-4 py-2 rounded-full bg-white text-[#C25B5B] shadow disabled:opacity-40"
            >
              ← Back
            </button>

            <button
              onClick={next}
              disabled={page === memories.length - 1}
              className="px-4 py-2 rounded-full bg-[#C25B5B] text-white shadow disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center mt-4 text-sm text-[#9C7C6A]">
          Take your time 🤍
        </p>
      </div>
    </section>
  );
}
