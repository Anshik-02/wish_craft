"use client";

import BirthdaySong from "@/components/bdaySong";
import BirthdaySong2 from "@/components/bdSong";
import LittleMoments from "@/components/pageOfUs";
import Image from "next/image";
import { motion } from "framer-motion";

/* animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Page = ({ preview = false }: { preview?: boolean }) => {
  return (
    <div className="h-full bg-gradient-to-br from-[#FCF3ED] to-[#FFF6F1] 
                    flex flex-col items-center">

      {/* ================= HERO ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative text-center w-6xl mt-24 
                   rounded-3xl bg-white 
                   shadow-[0_30px_40px_rgba(229,152,155,0.15)] 
                   px-8 py-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl 
                       font-semibold text-[#E5989B] leading-tight">
          Happy Birthday <br /> Anshik
        </h1>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#4A3B3B]">
          I’m so grateful I get to love you.
        </p>

        <Image src="/vines.png" alt="vines" width={420} height={90}
          className="mx-auto mt-12 opacity-70" />

        <Image src="/v5.png" alt="vines" width={420} height={90}
          className="mx-auto mt-12 scale-x-[-1] absolute top-[-94] w-130 left-170 opacity-70" />
      </motion.div>

      {/* ========== LETTER + CALENDAR ========== */}
      <div className="flex mt-20 justify-center gap-15 w-full max-w-6xl">

        {/* LETTER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          id="section"
          className="relative flex flex-col items-center mb-32 w-420 px-12 py-24 
                     rounded-3xl overflow-hidden 
                     shadow-[0_30px_60px_rgba(229,152,155,0.2)]"
        >
          <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center opacity-100"></div>
          <div className="absolute inset-0 bg-[#FDECEF] opacity-70"></div>

          <div className="relative z-10 max-w-3xl text-center">
            <h2 className="mb-12 text-2xl sm:text-3xl lg:text-5xl 
                           font-semibold tracking-tight text-[#7A4A4A]">
              Something I Wanted to Say
            </h2>

            <p className="text-left text-lg sm:text-2xl leading-relaxed text-[#4A3B3B]">
              You make my days softer just by being in them.<br />
              Loving you feels calm, warm, and right.<br />
              I love how you understand me without me having to explain.<br />
              Thank you for being patient, kind, and real with me.<br />
              I hope I get to celebrate many more birthdays with you.
            </p>
          </div>
        </motion.div>

        {/* CALENDAR */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full flex justify-center mb-32 px-6"
        >
          <div className="bg-white rounded-3xl 
                          shadow-[0_20px_40px_rgba(229,152,155,0.15)] 
                          p-8 text-center max-w-sm w-full h-fit">
            <p className="text-md text-[#4A3B3B] mb-2">
              A day I’ll always remember
            </p>

            <h3 className="text-xl text-[#E5989B] font-semibold mb-6">
              FEB 21
            </h3>

            <div className="grid grid-cols-7 gap-2 text-sm text-[#4A3B3B]">
              {["S", "M", "T", "W", "T", "F", "S"].map(d => (
                <span key={d} className="opacity-60">{d}</span>
              ))}

              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                return (
                  <div key={day}
                    className={`w-8 h-8 flex items-center justify-center rounded-full
                       ${day === 21 ? "bg-[#F4B6C2] text-white" : "opacity-70"}`}>
                    {day === 21 ? "💗" : day}
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-[#4A3B3B] text-sm">
              The day you make the world a little brighter.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ========== WHAT I LOVE ABOUT YOU ========== */}
      <section className="w-full flex justify-center mb-36 px-6 z-10 relative">
        <div className="max-w-6xl w-full text-center">
          <h2 className="mb-20 text-2xl sm:text-3xl lg:text-5xl text-[#E5989B]">
            What I Love About You
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              "Your infectious laughter that brightens any room.",
              "The way you make even my hardest days feel lighter.",
              "Your unwavering belief in me, even when I doubt myself.",
              "The kindness you show without expecting anything back.",
              "Your adventurous spirit that makes life exciting.",
              "The little things you do that make me feel loved.",
            ].map((text, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative rounded-3xl p-8 bg-white 
                           shadow-[0_20px_40px_rgba(229,152,155,0.18)]
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(229,152,155,0.35)]"
              >
                <p className="relative z-10 text-[#4A3B3B] text-lg leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Image src="/hear.png" alt="vines" width={1220} height={10}
          className="absolute top-[-180] right-0 opacity-100 z-0" />
      </section>

      {/* ========== LITTLE MOMENTS ========== */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <LittleMoments />
      </motion.div>

      {/* ========== SONG + PHOTO ========== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center py-32 bg-[#FFF1EB]"
      >
        <div className="max-w-6xl w-full flex flex-col lg:flex-row 
                        items-center gap-16 px-6">

          <BirthdaySong2 />

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[600px] h-[600px]"
            >
              <Image src="/cutu1.jpeg" alt="Us" fill
                className="object-cover scale-[0.53] rounded-2xl z-0" />
              <Image src="/f1.png" alt="frame" fill
                className="pointer-events-none z-10" />
            </motion.div>

            <p className="mt-6 text-[#7A4A4A] font-[var(--font-caveat)] text-lg">
              One of my favorite moments with you.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ========== SEPARATOR ========== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center py-10 bg-[#FFF1EB]"
      >
        <span className="block w-44 h-1 rounded-3xl bg-[#E5989B]/40"></span>
      </motion.div>

      {/* ========== FINAL NOTE ========== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full flex justify-center py-10 pb-30 bg-[#FFF1EB]"
      >
        <div className="max-w-2xl text-center px-6">
          <h3 className="mb-10 text-xl sm:text-2xl 
                         text-[#7A4A4A] font-[var(--font-caveat)]">
            One Last Thing
          </h3>

          <p className="text-[#4A3B3B] text-lg sm:text-xl 
                        leading-relaxed font-[var(--font-caveat)]">
            I don’t know where life will take us, <br />
            but I know that loving you has already <br />
            made my world gentler and brighter.
            <br /><br />
            Thank you for being you, <br />
            and for letting me love you in my own quiet way.
          </p>

          <p className="mt-12 text-[#8B5A5A] 
                        font-[var(--font-caveat)] text-base">
            — Always yours
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
