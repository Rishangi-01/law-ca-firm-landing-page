
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaBalanceScale,
  FaUsers,
  FaCheck,
} from "react-icons/fa";
import { whyChooseUsData } from "@/data";

const featureItems = [
  whyChooseUsData.items[0],
  whyChooseUsData.items[2],
];
const benefitItems = whyChooseUsData.items.slice(3, 6);
const featureIcons: Record<string, typeof FaBalanceScale> = {
  "balance-scale": FaBalanceScale,
  users: FaUsers,
};

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut" as const,
      },
    },
  };

  const imageAnimation = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#fffdfa] py-20 sm:py-24 lg:py-28"
    >
      {/* SUBTLE BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#d49b19]/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.78fr_1.42fr] lg:gap-12 xl:gap-16">

          {/* ================================== */}
          {/* LEFT SIDE - IMAGE */}
          {/* ================================== */}

          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none"
          >

            {/* BACKGROUND NAVY SHAPE - TOP */}
            <div className="absolute -right-3 -top-5 h-[110px] w-[55%] rounded-[35px] bg-[#06233a] sm:-right-4 sm:-top-7 sm:h-[145px]" />

            {/* BACKGROUND NAVY SHAPE - BOTTOM */}
            <div className="absolute -bottom-5 -left-4 h-[180px] w-[45%] rounded-[35px] bg-[#06233a] sm:-bottom-7 sm:-left-7 sm:h-[220px]" />

            {/* MAIN IMAGE */}
            <div className="relative z-10 overflow-hidden rounded-[35px] border-[4px] border-[#d39a16] bg-[#102c42] p-0.5 shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:rounded-[42px] sm:border-[5px]">

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.035 }
                }
                transition={{ duration: 0.7 }}
                className="relative aspect-[0.82] w-full"
              >
                <Image
                  src={whyChooseUsData.image}
                  alt={whyChooseUsData.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 35vw"
                  className="object-cover object-center"
                />
              </motion.div>

            </div>

            {/* IMAGE GOLDEN CORNER ACCENT */}
            <div className="absolute -bottom-3 -right-3 z-20 h-12 w-12 rounded-br-[25px] border-b-[5px] border-r-[5px] border-[#d39a16] sm:-bottom-5 sm:-right-5 sm:h-16 sm:w-16" />

          </motion.div>

          {/* ================================== */}
          {/* RIGHT SIDE - CONTENT */}
          {/* ================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className="relative z-10"
          >

            {/* SECTION LABEL */}
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-4 sm:gap-5"
            >

              <FaBalanceScale className="shrink-0 text-[35px] text-[#c18a13] sm:text-[43px]" />

              <span className="text-[17px] font-bold uppercase tracking-[1.5px] text-[#09243c] sm:text-[21px]">
                {whyChooseUsData.eyebrow}
              </span>

              <span className="h-[2px] w-16 bg-gradient-to-r from-[#bd8410] to-transparent sm:w-28" />

            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              variants={fadeUp}
              className="font-serif text-[37px] font-bold leading-[1.15] tracking-[-1px] text-[#082139] sm:text-[46px] md:text-[52px] xl:text-[58px] 2xl:text-[58px]"
            >
              {whyChooseUsData.title}{" "}
              <span className="block bg-gradient-to-r from-[#a96e08] via-[#ca941e] to-[#a96e08] bg-clip-text text-transparent">
                {whyChooseUsData.titleLine2}{" "}
                {whyChooseUsData.highlight}
              </span>
            </motion.h2>

            
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[16px] leading-[1.8] text-[#393939] sm:text-[18px] lg:text-[19px]"
            >
              {whyChooseUsData.text}
            </motion.p>

            
            <motion.div
              variants={fadeUp}
              className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:gap-7"
            >

              {featureItems.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                if (!Icon) {
                  throw new Error(`Unknown WhyChooseUs icon: ${feature.icon}`);
                }

                return (
                  <motion.div
                    key={feature.title.join(" ")}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -5 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`group flex items-center gap-4 ${
                      index === 0
                        ? "sm:border-r sm:border-[#d6a13a] sm:pr-5 lg:pr-7"
                        : ""
                    }`}
                  >

            
                    <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#06263f] to-[#0c354e] shadow-[0_8px_20px_rgba(4,32,53,0.15)] transition-all duration-300 group-hover:shadow-[0_10px_25px_rgba(193,138,19,0.22)] sm:h-[90px] sm:w-[90px]">

                      <Icon className="text-[43px] text-[#e5aa15] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:text-[49px]" />

                    </div>

            
                    <div>
                      <h3 className="font-sans text-[21px] font-bold leading-tight text-[#09243c] sm:text-[24px] lg:text-[26px]">
                        {feature.title[0]}
                      </h3>

                      <h3 className="font-sans text-[21px] font-bold leading-tight text-[#09243c] sm:text-[24px] lg:text-[26px]">
                        {feature.title[1]}
                      </h3>
                    </div>

                  </motion.div>
                );
              })}

            </motion.div>

            
            <motion.div
              variants={fadeUp}
              className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#c18a13] via-[#e6bd65] to-transparent"
            />

            
            <motion.div
              variants={fadeUp}
              className="mt-7 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-6"
            >

            
              <div className="space-y-4 sm:space-y-3">

                {benefitItems.map((benefit, index) => (
                  <motion.div
                    key={benefit.title.join(" ")}
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.15,
                    }}
                    className="group flex items-center gap-4"
                  >

                    {/* CHECK ICON */}
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e3ae29] to-[#b97d0a] text-white shadow-[0_4px_12px_rgba(193,138,19,0.2)] transition-transform duration-300 group-hover:scale-110">

                      <FaCheck className="text-[20px]" />

                    </div>

                    {/* BENEFIT TEXT */}
                    <p className="text-[15px] font-medium leading-relaxed text-[#303030] sm:text-[17px] lg:text-[18px]">
                      {benefit.title.join(" ")}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* TRUST BADGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto flex w-full max-w-[190px] items-center justify-center md:mx-0 md:max-w-[205px] md:border-l md:border-[#d6a13a] md:pl-6 lg:pl-8"
              >

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, -7, 0] }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative aspect-square w-full"
                >
                  <Image
                    src={whyChooseUsData.badgeImage}
                    alt={whyChooseUsData.badgeImageAlt}
                    fill
                    sizes="205px"
                    className="object-contain"
                  />
                </motion.div>

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
