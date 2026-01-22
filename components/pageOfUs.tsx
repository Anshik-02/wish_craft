"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const moments = [
  {
    title: "The way you listen",
    detail: "Even when I struggle to explain myself, you somehow understand."
  },
  {
    title: "Quiet moments with you",
    detail: "When we don’t have to say anything, and it still feels enough."
  },
  {
    title: "Your patience",
    detail: "You’ve been gentle with me in ways I don’t always say thank you for."
  },
  {
    title: "How safe I feel",
    detail: "Being with you feels calm, steady, and reassuring."
  },
  {
    title: "The little things",
    detail: "Small gestures that remind me how deeply you care."
  },
  {
    title: "Us",
    detail: "Not perfect, but real — and that’s what makes it special."
  }
];

export default function LittleMoments() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full flex justify-center  px-6 py-28"
    >
      <div className="max-w-3xl w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center 
                     text-2xl sm:text-3xl 
                     text-[#7A4A4A] 
                     font-[var(--font-caveat)]"
        >
          Little Moments With You
        </motion.h2>

        {/* Tiles */}
        <div className="space-y-6">
          {moments.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                whileHover={{ y: -2 }}
                animate={{
                  boxShadow: isOpen
                    ? "0 25px 55px rgba(229,152,155,0.35)"
                    : "0 18px 40px rgba(229,152,155,0.18)"
                }}
                className="cursor-pointer 
                           rounded-3xl 
                           bg-[#FFF9F6] 
                           px-7 py-6
                           border border-[#F4B6C2]/30
                           relative overflow-hidden"
              >
                {/* Soft glow */}
                <motion.div
                  className="absolute inset-0 
                             bg-gradient-to-br 
                             from-[#F4B6C2]/20 
                             via-transparent 
                             to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Title */}
                <div className="relative z-10 flex justify-between items-center">
                  <p className="text-[#4A3B3B] 
                                text-lg 
                                font-[var(--font-caveat)]">
                    {item.title}
                  </p>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-[#E5989B] text-xl"
                  >
                    +
                  </motion.span>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="relative z-10 mt-4"
                    >
                      <p
                        className="text-[#8B5A5A] 
                                   text-base 
                                   font-[var(--font-caveat)] 
                                   leading-relaxed"
                      >
                        {item.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
