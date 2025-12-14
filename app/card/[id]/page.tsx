"use client"

import { useSearchParams } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import EnvelopeExperience from "@/components/card"
import BdayWebsite from "@/components/bdayWebsite"

export default function CardPage() {
  const params = useSearchParams()
  const encoded = params.get("data")
  const [open, setOpen] = useState(false);
  if (!encoded) return <p>Invalid card</p>

  const decoded = JSON.parse(
    decodeURIComponent(atob(encoded))
  )

  const { birthdayGuyName, message,birthDate } = decoded
console.log(birthDate,"birthDate");
console.log(message,"message");
  useEffect(() => {
    confetti({
      particleCount: 520,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF5D8F", "#FF8FAB", "#FFD6A5"],
    })
  }, [])

  return (
   <div className="relative min-h-screen bg-rose-100 overflow-hidden">
  {/* SMALL ENVELOPE */}
  {!open && (
    <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        layoutId="envelope"
        onClick={() => setOpen(true)}
        className="cursor-pointer"
        whileHover={{ scale: 1.06, y: -6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      >
        <EnvelopeExperience name={birthdayGuyName} />
      </motion.div>
    </motion.div>
  )}

  {/* FULLSCREEN EXPERIENCE */}
  <AnimatePresence>
    {open && (
      <motion.div
        layoutId="envelope"
        className="fixed overflow-auto inset-0 z-50 bg-rose-100"
        initial={{
          borderRadius: 24,
          opacity: 0,
        }}
        animate={{
          borderRadius: 0,
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <BdayWebsite name={birthdayGuyName} message={message}  dob={birthDate}/>
      </motion.div>
    )}
  </AnimatePresence>
</div>
  )
}
