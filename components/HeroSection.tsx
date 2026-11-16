
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaShieldAlt,
  FaGavel,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Expert Legal Advice",
    description: "Trusted guidance for every legal matter.",
  },
  {
    icon: FaGavel,
    title: "Strong Representation",
    description: "Dedicated advocacy for your rights.",
  },
  {
    icon: FaUsers,
    title: "Client-Focused Approach",
    description: "Personalized solutions that put you first.",
  },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#fffefa] lg:min-h-[900px] w-full">

      {/* TOP CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-12 xl:px-20">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.9fr_0.9fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-[1050px]"
          >
            <h1 className="font-serif text-[38px] font-bold leading-[1.16] tracking-[-1.5px] text-[#071c35] sm:text-[48px] md:text-[58px] lg:text-[60px] xl:text-[55px]">
              Your Trusted Legal Partner for{" "}
              <span className="block bg-gradient-to-r from-[#a66b08] via-[#c18a19] to-[#94600b] bg-clip-text text-transparent">
                Comprehensive Legal Solutions
              </span>
            </h1>

            {/* GOLD DIVIDER */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 135 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-7 h-[4px] rounded-full bg-gradient-to-r from-[#a96e0b] to-[#d7a832]"
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-7 max-w-[680px] text-[16px] leading-[1.8] text-[#333333] sm:text-[18px] md:text-[20px] lg:text-[21px]"
            >
              We provide strategic legal advice, strong representation, and
              personalized solutions to protect your rights, resolve disputes,
              minimize risks, and achieve your goals.
            </motion.p>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative z-20 flex flex-col justify-start lg:pl-2 lg:pt-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.2,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  className={`group flex items-center gap-5 py-5 ${
                    index !== features.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* ICON */}
                  <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[#b77b0b]/10">
                    <Icon className="text-[39px] text-[#b77b0b] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-serif text-[19px] font-bold text-[#10233c] transition-colors duration-300 group-hover:text-[#b77b0b] sm:text-[22px] xl:text-[23px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 hidden text-sm text-gray-500 md:block">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[53%] overflow-hidden sm:h-[55%] lg:h-[61%]">

        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/legal-hero-bg.png')",
          }}
        />

        {/* TOP WHITE FADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffefa] via-white/35 to-transparent" />

        {/* SUBTLE LEFT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />

      </div>

      {/* BOTTOM IMAGE FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-t from-black/10 to-transparent" />

    </section>
  );
}
