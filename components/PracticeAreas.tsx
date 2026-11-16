
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaBalanceScale,
  FaUsers,
  FaGavel,
  FaBriefcase,
  FaHome,
  FaHardHat,
  FaFileAlt,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const practiceAreas = [
  {
    title: "Civil Law",
    description:
      "Legal support for disputes related to property, contracts and personal matters.",
    icon: FaBalanceScale,
    href: "/practice-areas/civil-law",
  },
  {
    title: "Family Law",
    description:
      "Guidance on marriage, divorce, child custody and family-related legal matters.",
    icon: FaUsers,
    href: "/practice-areas/family-law",
  },
  {
    title: "Criminal Defense",
    description:
      "Strong representation in criminal cases to protect your rights and ensure a fair trial.",
    icon: FaGavel,
    href: "/practice-areas/criminal-defense",
  },
  {
    title: "Corporate & Business Law",
    description:
      "End-to-end legal solutions for businesses, compliance and corporate governance.",
    icon: FaBriefcase,
    href: "/practice-areas/corporate-business-law",
  },
  {
    title: "Real Estate Law",
    description:
      "Legal assistance in property transactions, disputes and ownership matters.",
    icon: FaHome,
    href: "/practice-areas/real-estate-law",
  },
  {
    title: "Employment & Labour Law",
    description:
      "Support for employers and employees on workplace rights, contracts and compliances.",
    icon: FaHardHat,
    href: "/practice-areas/employment-labour-law",
  },
  {
    title: "Dispute Resolution",
    description:
      "Effective negotiation, mediation and litigation services to resolve legal conflicts.",
    icon: FaFileAlt,
    href: "/practice-areas/dispute-resolution",
  },
  {
    title: "Legal Consultation",
    description:
      "Expert legal advice to help you make informed and risk-free decisions.",
    icon: FaShieldAlt,
    href: "/practice-areas/legal-consultation",
  },
];

export default function PracticeAreas() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="practice-section relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/practice-bg.jpg')",
        }}
      />

      {/* NAVY OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#03182a]/95 via-[#052238]/95 to-[#031426]/95" />

      {/* DECORATIVE LIGHT */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#b77d0b]/10 blur-[120px]" />

      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >

          {/* EYEBROW */}
          <div className="mb-5 flex items-center justify-center gap-4 sm:gap-6">

            <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#d49b19] sm:w-16" />

            <FaBalanceScale className="text-[29px] text-[#d49b19] sm:text-[36px]" />

            <span className="text-[12px] font-bold uppercase tracking-[3px] text-white sm:text-[15px] sm:tracking-[4px]">
              Our Practice Areas
            </span>

            <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#d49b19] sm:w-16" />

          </div>

          {/* MAIN HEADING */}
          <h2 className="mx-auto max-w-[1000px] font-serif text-[34px] font-bold leading-[1.2] text-white sm:text-[43px] md:text-[50px] lg:text-[56px]">

            Comprehensive Legal Services for

            <span className="mt-1 block bg-gradient-to-r from-[#e3aa28] via-[#ffcf58] to-[#c28b13] bg-clip-text text-transparent">
              Individuals & Businesses
            </span>

          </h2>

        </motion.div>

        {/* PRACTICE AREA CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-5 2xl:gap-6"
        >

          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                variants={cardVariants}
                className="h-full"
              >
                <Link
                  href={area.href}
                  aria-label={`Explore ${area.title}`}
                  className="practice-card group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[17px] border border-[#37617b]/70 bg-[#102d42]/65 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d49b19]/80 hover:bg-[#15364d]/90 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] sm:p-7"
                >

                  {/* GOLD HOVER GLOW */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#d49b19]/0 blur-3xl transition-all duration-500 group-hover:bg-[#d49b19]/15" />

                  {/* CARD HEADER */}
                  <div className="relative z-10 flex items-center gap-4">

                    {/* ICON */}
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-[58px] sm:w-[58px]">

                      <Icon className="text-[37px] text-[#e0a51b] transition-colors duration-300 group-hover:text-[#ffd15d] sm:text-[43px]" />

                    </div>

                    {/* TITLE */}
                    <h3 className="font-serif text-[18px] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#f2bd42] sm:text-[20px]">
                      {area.title}
                    </h3>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="relative z-10 mt-4 pl-1 text-[14px] leading-[1.65] text-gray-200/90 sm:text-[15px]">
                    {area.description}
                  </p>

                  {/* ARROW BUTTON */}
                  <div className="relative z-10 mt-auto flex items-center pt-4 pl-1">

                    <span className="flex h-[43px] w-[43px] items-center justify-center rounded-full border border-[#d49b19]/60 bg-gradient-to-br from-[#e0a20b] to-[#b77b00] text-white shadow-[0_4px_12px_rgba(190,130,0,0.25)] transition-all duration-300 group-hover:translate-x-2 group-hover:bg-gradient-to-br group-hover:from-[#ffd05c] group-hover:to-[#c18a12] group-hover:shadow-[0_5px_20px_rgba(212,155,25,0.4)]">

                      <FaArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />

                    </span>

                  </div>

                  {/* BOTTOM GOLD ACCENT */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#b77b09] to-[#f5ca55] transition-all duration-500 group-hover:w-full" />

                </Link>
              </motion.div>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
}
