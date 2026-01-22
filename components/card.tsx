"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EnvelopeCard({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-100 overflow-hidden w-full">
   <motion.div
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="
    relative
    scale-[0.9]
    sm:scale-[1]
    md:scale-[1.2]
    lg:scale-[1.6]
  "
  style={{ width: 320, height: 400 }}
>
  
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-lg font-medium 
             text-rose-600 tracking-wide"
        >
          Tap to open your birthday surprise
        </motion.h2>

        <svg
          width="320"
          height="400"
          viewBox="0 0 320 400"
          className="overflow-visible"
        >
          <defs>
            {/* Soft Shadow */}
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="10" name={name}
                floodOpacity="0.25"
              />
            </filter>

            {/* Envelope Gradient */}
            <linearGradient
              id="envelopeGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF9A9E" />
              <stop offset="100%" stopColor="#FECFEF" />
            </linearGradient>

            {/* Flap Gradient */}
            <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF9A9E" />
              <stop offset="100%" stopColor="#FFB6C1" />
            </linearGradient>

            {/* Card Pattern */}
            <pattern
              id="cardPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#e5e5f7" />
            </pattern>
          </defs>

          {/* ENVELOPE BACK (BOTTOM LAYER) */}
          <path
            d="M10,150 L310,150 L310,330 C310,341 301,350 290,350 L30,350 C19,350 10,341 10,330 Z"
            fill="#FFF0F5"
            stroke="#FFB6C1"
            strokeWidth="2"
          />

          {/* CARD (TOP MOST — ALWAYS LAST IN SVG) */}
          <motion.g
            initial={{ y: 150, rotate: 0 }}
            animate={{ y: -60, rotate: -2 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              bounce: 0.45,
            }}
          >
            {/* Card Body */}
            <rect
              x="30"
              y="150"
              width="260"
              height="180"
              rx="12"
              fill="#FFFFFF"
              filter="url(#shadow)"
            />

            {/* Card Texture */}
            <rect
              x="30"
              y="150"
              width="260"
              height="180"
              rx="12"
              fill="url(#cardPattern)"
              opacity="0.45"
            />

            {/* Inner Border */}
            <rect
              x="42"
              y="162"
              width="236"
              height="156"
              rx="6"
              fill="none"
              stroke="#C25B5B"
              strokeWidth="1"
              strokeDasharray="6 6"
            />

            {/* Text */}
            <text
              x="160"
              y="215"
              textAnchor="middle"
              fontSize="18"
              fill="#C25B5B"
              fontWeight="700"
              letterSpacing="2"
              fontFamily="'Courier New', monospace"
            >
              HAPPY BIRTHDAY
            </text>

            <text
              x="160"
              y="255"
              textAnchor="middle"
              fontSize="34"
              fill="#333"
              fontWeight="800"

            >
              {name}
            </text>
          </motion.g>

          {/* ENVELOPE FRONT */}
          <path
            d="M10,330 L160,230 L310,330 L310,330 C310,341 301,350 290,350 L30,350 C19,350 10,341 10,330 Z"
            fill="url(#envelopeGradient)"
            filter="url(#shadow)"
            stroke="#FFFFFF"
            strokeWidth="2"
          />

          {/* ENVELOPE SIDES */}
          <path d="M10,150 L160,230 L10,330 Z" fill="#FFB7B2" opacity="0.9" />
          <path d="M310,150 L160,230 L310,330 Z" fill="#FFB7B2" opacity="0.9" />
          {/* FLAP (MIDDLE LAYER) */}
          <motion.path
            d="M11,150 L160,250 L310,150"
            fill="url(#flapGradient)"
            stroke="#FFFFFF"
            strokeWidth="2"
            filter="url(#shadow)"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 180 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            style={{
              originY: "97px",
              transformOrigin: "160px 150px",
              transformBox: "fill-box",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

