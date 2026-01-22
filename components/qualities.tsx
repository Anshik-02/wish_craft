"use client";

import { motion } from "framer-motion";

/* 🎨 color palette for cards */
const COLORS = [
  "bg-[#FFE4E6]",
  "bg-[#FFF1C1]",
  "bg-[#E0F2FE]",
  "bg-[#E8F5E9]",
  "bg-[#F3E8FF]",
  "bg-[#FFF7ED]",
];

interface BirthdayQualitiesProps {
  qualities: string[];
}

export default function BirthdayQualities({
  qualities,
}: BirthdayQualitiesProps) {
  return (
    <section className="px-6 py-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-center mb-14 
                   text-[#C25B5B] font-semibold"
      >
        What Makes You Special ✨
      </motion.h2>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 
                   max-w-3xl mx-auto"
      >
        {qualities.map((label, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`
              ${COLORS[i % COLORS.length]}
              px-8 py-6 rounded-3xl
              flex items-center gap-4
              text-lg md:text-xl
              text-[#4A4A4A]
              shadow-[0_8px_24px_rgba(0,0,0,0.05)]
              transition-all duration-300
              hover:scale-[1.02]
            `}
          >
            {/* subtle dot */}
            <span className="w-2 h-2 rounded-full bg-[#C25B5B] opacity-60" />

            <span className="font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
