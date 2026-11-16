"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaGavel,
  FaLandmark,
  FaScaleBalanced,
} from "react-icons/fa6";

const stats = [
  {
    icon: FaAward,
    number: "10+",
    label: "Years of",
    subLabel: "Experience",
  },
  {
    icon: FaUsers,
    number: "500+",
    label: "Clients",
    subLabel: "Served",
  },
  {
    icon: FaGavel,
    number: "95%",
    label: "Success",
    subLabel: "Rate",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fcf9f4] py-16 sm:py-20 lg:py-28 w-full">
      {/* Background Decoration */}
      <div className="absolute right-8 top-5 text-[#b77a08]/[0.06] pointer-events-none">
        <FaScaleBalanced className="text-[150px] sm:text-[190px]" />
      </div>

      <div className="container mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.72fr_1.15fr_1.38fr] lg:gap-10 xl:gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 order-1"
          >
            <span className="mb-5 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#102943] sm:text-base">
              ABOUT US
              <span className="h-3 w-3 rotate-45 bg-[#bd810c]" />
            </span>

            <h2 className="font-serif text-[42px] font-bold leading-[1.13] text-[#102943] sm:text-5xl xl:text-[54px]">
              A Trusted
              <br />
              Law Firm
              <br />
              for Your
              <br />
              <span className="italic text-[#b77a08]">Legal Needs.</span>
            </h2>

            <div className="mt-8 h-[3px] w-24 bg-[#b77a08]" />
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-2 mx-auto w-full max-w-[480px] lg:max-w-none"
          >
            {/* Golden Decorative Blocks */}
            <div className="absolute -left-3 -top-3 z-0 h-28 w-28 rounded-tl-[35px] bg-[#bd810c] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-3 -right-3 z-0 h-28 w-28 rounded-br-[35px] bg-[#bd810c] sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32" />

            {/* Main Image */}
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[30px] border-2 border-white shadow-[0_15px_45px_rgba(25,30,35,0.16)]">
              <Image
                src="/images/lady-justice.png"
                alt="Lady Justice statue and legal books"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 35vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102943]/20 via-transparent to-transparent" />
            </div>

            {/* TRUST BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                type: "spring",
              }}
              className="absolute left-[0%] top-[70%] z-20 w-[105px] -translate-x-1/2 -translate-y-1/2 sm:w-[145px] lg:w-[125px] xl:w-[165px]"
            >
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                className="bg-[#fff] w-[165px] h-[165px] rounded-full"
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Image
                  src="/images/about-logo.png"
                  alt=""
                  width={165}
                  height={165}
                  className="h-auto w-full object-contain drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 order-3 pt-5 lg:pt-0"
          >
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#102943] sm:text-4xl xl:text-[44px]">
              Your Trusted Partner in
              <br className="hidden xl:block" />
              <span className="mt-1 block text-[#b77a08]">
                Legal Excellence.
              </span>
            </h2>

            <div className="my-7 h-[3px] w-24 bg-[#b77a08]" />

            <p className="text-base leading-[1.8] text-gray-600 sm:text-lg">
              We are a client-focused law firm committed to delivering
              practical, result-oriented legal solutions with integrity,
              professionalism, and a deep understanding of your needs.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 divide-x divide-gray-300">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center px-2 text-center"
                  >
                    <Icon className="mb-3 text-3xl text-[#bd810c] sm:text-4xl" />

                    <h3 className="font-serif text-3xl font-bold text-[#102943] sm:text-4xl lg:text-[38px]">
                      {item.number}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-700 sm:text-base">
                      {item.label}
                      <br />
                      {item.subLabel}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
