
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Scale,
  Gavel,
  Landmark,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { teamPageData } from "@/data";

const attorneys = teamPageData.members.slice(0, 4);
const attorneyIcons: Record<string, LucideIcon> = {
  scale: Scale,
  gavel: Gavel,
  landmark: Landmark,
  "users-round": UsersRound,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function OurLegalTeam() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      aria-labelledby="legal-team-heading"
      className="relative overflow-hidden bg-[#faf8f4] py-12 sm:py-16 lg:py-16 w-full px-5 sm:px-8 lg:px-12 xl:px-12"
    >
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#c58b20]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">

      
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >
      
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#bd861d] sm:w-16" />

            <div className="flex items-center gap-3">
              <Scale
                className="h-9 w-9 text-[#bd861d] sm:h-11 sm:w-11"
                strokeWidth={1.8}
              />

              <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#102c3e] sm:text-lg">
                {teamPageData.homeSection.eyebrow}
              </span>
            </div>

            <span className="h-[2px] w-10 bg-[#bd861d] sm:w-16" />
          </div>

      
          <h2
            id="legal-team-heading"
            className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-[#102c3e] sm:text-5xl md:text-6xl lg:text-[3.4rem]"
          >
            {teamPageData.homeSection.title}{" "}
            <span className="text-[#b27a13]">
              {teamPageData.homeSection.highlight}
            </span>
          </h2>

      
          <p className="mx-auto mt-3 max-w-6xl text-base leading-relaxed text-[#444b50] sm:text-lg lg:text-xl">
            {teamPageData.homeSection.description}
          </p>

      
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#bd861d]" />
        </motion.div>

      
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7 xl:gap-8"
        >
          {attorneys.map((attorney) => {
            const iconId = attorney.icon;
            if (!iconId) {
              throw new Error(`Missing legal team icon for: ${attorney.name}`);
            }
            const Icon = attorneyIcons[iconId];
            if (!Icon) {
              throw new Error(`Unknown legal team icon: ${iconId}`);
            }

            return (
              <motion.article
                key={attorney.name}
                variants={shouldReduceMotion ? undefined : cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -10,
                        transition: { duration: 0.3 },
                      }
                }
                className="group relative isolate overflow-hidden rounded-[4px] border border-[#bd861d] bg-[#08283a] shadow-[0_8px_20px_rgba(16,44,62,0.10)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(16,44,62,0.20)]"
              >
      
                <div className="relative h-[350px] overflow-hidden sm:h-[320px] lg:h-[340px] xl:h-[355px]">
                  <Image
                    src={attorney.image}
                    alt={attorney.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />

      
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f2e]/30 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#d39b2c] transition-all duration-500 group-hover:w-full" />
                </div>

      
                <div className="relative flex min-h-[148px] flex-col items-center justify-center border-t-[2px] border-[#bd861d] bg-[#08283a] px-3 pb-5 pt-8 text-center">

      
                  <div className="absolute -top-[40px] left-1/2 flex h-[68px] w-[68px] -translate-x-1/2 items-center justify-center rounded-xl border-[3px] border-[#faf8f4] bg-[#bd861d] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:bg-[#d39b2c]">
                    <Icon
                      className="h-9 w-9"
                      strokeWidth={2}
                    />
                  </div>

      
                  <h3 className="mt-1 font-serif text-[25px] font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#e3b54f] sm:text-[24px] xl:text-[26px]">
                    {attorney.name}
                  </h3>

      
                  <p className="mt-2 text-base font-semibold text-[#e0a21e] sm:text-[17px]">
                    {attorney.role}
                  </p>

      
                  <div className="mt-4 h-[3px] w-12 rounded-full bg-[#e0a21e] transition-all duration-500 group-hover:w-24" />

      
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
