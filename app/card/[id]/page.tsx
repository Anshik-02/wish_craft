"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import BdayWebsite from "@/components/bdayWebsite";
import EnvelopeCard from "@/components/card";

interface CardData {
  id: number;
  birthdayGuyName: string;
  birthDate: string;
  mainHeading: string;
  message?: string | null;
  songLink?: string | null;
  futureMessage?: string | null;
  senderName?: string | null;
  qualities: string[];
  createdAt: string;
  updatedAt: string;
}

export default function CardPage() {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardData | null>(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {

    if (!id) {
      return;
    }
    const fetchCard = async () => {
      try {
        const res = await axios.get(`/api/card/${id}`);
        console.log(res.data)
        setCard(res.data);
      } catch (error) {
      }
    };

    fetchCard();
  }, []);

  useEffect(() => {
    confetti({
      particleCount: 520,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF5D8F", "#FF8FAB", "#FFD6A5"],
    });
  }, []);

if (!card) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-100">
      <div className="flex flex-col items-center gap-6">
        {/* animated heart */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-rose-300 animate-ping absolute" />
          <div className="w-16 h-16 rounded-full bg-rose-400 flex items-center justify-center text-white text-2xl">
            ❤️
          </div>
        </div>

        <p className="text-rose-600 text-lg font-medium tracking-wide animate-pulse">
          Preparing something special…
        </p>
      </div>
    </div>
  );
}

  return (
    <div className="relative min-h-screen bg-rose-100 overflow-hidden">
      {/* ENVELOPE */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            onClick={() => setOpen(true)}
            className="cursor-pointer"
            whileHover={{ scale: 1.06, y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <EnvelopeCard name={card.birthdayGuyName} />
          </motion.div>
        </motion.div>
      )}

      {/* FULL EXPERIENCE */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-rose-100 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BdayWebsite
              name={card.birthdayGuyName}
              dob={card.birthDate}
              message={card.message}
              futureMessage={card.futureMessage}
              qualities={card.qualities}
              musicLink={card.songLink}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
