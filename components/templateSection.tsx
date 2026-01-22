"use client";

import Link from "next/link";
import BdayWebsite from "./bdayWebsite";
import Page from "@/components/[id]/page";
import Image from "next/image";

const TemplateSection = () => {
  return (
    <section className="w-full ">
      {/* SECTION HEADING */}

      {/* ================= TEMPLATE 1 — COZY / BESTIES ================= */}
      <div className="w-full bg-gradient-to-br from-[#FFE8C8] via-[#FFE1B8] to-[#FFD9A0] py-32">
        <h2 className="text-center text-5xl mb-30 font-semibold text-[#3A2A24]">
          Pick a vibe. Make it yours.
        </h2>
        <div className="max-w-7xl relative mx-auto px-6 lg:px-32 flex flex-col lg:flex-row items-center gap-28">
          {/* TEXT */}
          <div className="max-w-xl">
            <h3 className="text-4xl font-semibold text-[#3A2A24] mb-6">
              A cozy birthday page made for besties ✨
            </h3>

            <p className="text-2xl leading-relaxed text-[#6B4F45]">
              For late-night talks, inside jokes, and people who feel like home.
              A warm, playful space for wishes, memories, and moments that
              matter.
            </p>
          </div>

          <Image
            src={"/m11.png"}
            alt="prt1"
            width={400}
            height={100}
            className="absolute z-1 bottom-[-100] left-70"
          />
          <Image
            src={"/m22.png"}
            alt="prt1"
            width={400}
            height={100}
            className="absolute z-1 bottom-[100] left-[-290]"
          />
          <Image
            src={"/m33.png"}
            alt="prt1"
            width={200}
            height={100}
            className="absolute z-1 bottom-[-60] right-[-90]"
          />

          <Link href="/create/card1">
            <div className="relative cursor-pointer">
              <div className="absolute -inset-6 bg-[#FF8A5B]/40 blur-3xl rounded-full" />
              <div
                className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                bg-white
                w-[380px]
                h-[520px]
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-[1.04]
                shadow-[0_40px_90px_rgba(0,0,0,0.25)]
              "
              >
                <div
                  className="origin-top-left scale-[0.18]"
                  style={{ width: "555%", height: "555%" }}
                >
                  <BdayWebsite
                    preview
                    name="Anshik"
                    dob="02/01/2006"
                    message="Another year older, another year stronger 🤍"
                  />
                </div>

                <div
                  className="
                  absolute inset-0 flex items-center justify-center
                  text-white text-lg font-semibold
                  bg-black/20 opacity-0 hover:opacity-100 transition
                "
                >
                  Click to use this template →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ================= TEMPLATE 2 — INTIMATE / LOVERS ================= */}
      <div
        className="w-full relative shadow-[inset_0_40px_60px_rgba(255,255,255,0.06)]


 
  bg-gradient-to-br  from-[#1C0F13] via-[#241017] to-[#2A141B] py-32"
      >
        <div className="max-w-7xl  mx-auto px-6 lg:px-32  flex flex-col-reverse  lg:flex-row items-center gap-28">
          {/* PREVIEW */}
          <Link href="/create/details?template=card2">
            <div className="relative cursor-pointer">
              <div className="absolute -inset-6 bg-[#E7A1AF]/25 blur-3xl rounded-full" />

              <div
                className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                bg-[#14090D]
                w-[380px]
                h-[520px]
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-[1.04]
                shadow-[0_50px_120px_rgba(0,0,0,0.0)]
              "
              >
                <div
                  className="origin-top-left scale-[0.18]"
                  style={{ width: "555%", height: "555%" }}
                >
                  <Page preview />
                </div>

                <div
                  className="
                  absolute inset-0 flex items-center justify-center
                  text-white text-lg font-semibold
                  bg-black/30 opacity-0 hover:opacity-100 transition
                "
                >
                  Click to use this template →
                </div>
              </div>
            </div>
          </Link>
          <Image
            src={"/thor.png"}
            alt="thorns"
            width={400}
            height={200}
            className="absolute z-1 left-0 bottom-0"
          />
          <Image
            src={"/sakura.png"}
            alt="thorns"
            width={437}
            height={200}
            className="absolute  right-0 bottom-0 opacity-75"
          />
          {/* TEXT */}
          <div className="max-w-xl text-[#F3EAEA]">
            <h3 className="text-4xl font-semibold mb-6">
              For love that feels private 🤍
            </h3>

            <p className="text-2xl leading-relaxed text-[#D8BFC5]">
              A quiet, intimate birthday page for lovers and partners. Written
              slowly. Meant only for the two of you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
