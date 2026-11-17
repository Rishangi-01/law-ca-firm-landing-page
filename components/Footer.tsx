
"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube  } from "react-icons/fa";
import type { IconType } from "react-icons";
import Image from "next/image";
import { footerSectionData, siteInfoData } from "@/data";

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-[27px]">
        {children}
      </h3>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 65 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 h-[5px] bg-[#e9a916]"
      />
    </div>
  );
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const phoneContact = footerSectionData.contactDetails[0];
  const emailContact = footerSectionData.contactDetails[1];

  return (
    <footer className="relative isolate overflow-hidden bg-[#061725] text-white">


      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(125,153,172,0.55) 1.5px, transparent 1.8px)",
          backgroundSize: "15px 15px",
          maskImage:
            "radial-gradient(ellipse at top left, black 0%, transparent 35%), radial-gradient(ellipse at bottom right, black 0%, transparent 35%)",
        }}
      />


      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#153d5a]/30 blur-[120px]"
      />

      <div className="mx-auto max-w-[1600px] pb-7 pt-16 sm:pt-20 lg:pt-24 px-5 sm:px-8 lg:px-12 xl:px-12">

        <div>
          <Link
          href={siteInfoData.homeHref}
          aria-label={siteInfoData.homeAriaLabelTemplate.replace(
            "{name}",
            siteInfoData.name,
          )}
          className="relative flex shrink-0 items-center"
        >
          <Image
            src={siteInfoData.whiteLogo}
            alt={siteInfoData.name}
            width={320}
            height={100}
            priority
            className="h-[65px] w-[210px] object-contain sm:h-[75px] sm:w-[250px] lg:h-[65px]"
          />
        </Link>
            <p className="mt-2 mb-4 max-w-[450px] text-[15px] leading-[1.6] text-[#d2d8df] lg:text-[18px]">
              {footerSectionData.about}
            </p>
        </div>


        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10"
        >


          <motion.div
            variants={itemVariants}
            className="lg:col-span-3"
          >


            <div className="mt-10 flex items-center gap-5">
              <motion.a
                href={phoneContact.href}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                aria-label={`${phoneContact.title} ${siteInfoData.name}`}
                className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-2 border-[#e9a916] text-[#f2b51c] transition-all duration-300 hover:bg-[#e9a916] hover:text-[#061725]"
              >
                <Phone size={29} fill="currentColor" />
              </motion.a>

              <div>
                <p className="mb-1 text-sm text-[#d2d8df] sm:text-base">
                  {footerSectionData.contactTitle}
                </p>
                <a
                  href={phoneContact.href}
                  className="text-lg font-semibold text-white transition-colors hover:text-[#f2b51c] sm:text-xl"
                >
                  {phoneContact.value}
                </a>
              </div>
            </div>


            <div className="mt-8 flex items-center gap-5">
              <motion.a
                href={emailContact.href}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                aria-label={`${emailContact.title} ${siteInfoData.name}`}
                className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-2 border-[#e9a916] text-[#f2b51c] transition-all duration-300 hover:bg-[#e9a916] hover:text-[#061725]"
              >
                <Mail size={29} />
              </motion.a>

              <div>
                <p className="mb-1 text-sm text-[#d2d8df] sm:text-base">
                  {emailContact.title}
                </p>
                <a
                  href={emailContact.href}
                  className="break-all text-lg font-semibold text-white transition-colors hover:text-[#f2b51c] sm:text-xl"
                >
                  {emailContact.value}
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="border-t border-[#526071]/50 pt-9 sm:border-t-0 sm:pt-0 lg:col-span-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10"
          >
            <FooterHeading>{footerSectionData.columns[0].title}</FooterHeading>

            <ul className="space-y-3.5">
              {footerSectionData.columns[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex w-fit items-center gap-3 text-[15px] text-[#dce1e7] transition-all duration-300 hover:translate-x-2 hover:text-[#f2b51c] sm:text-base"
                  >
                    <ChevronRight
                      size={21}
                      strokeWidth={3}
                      className="shrink-0 text-[#f2b51c] transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="border-t border-[#526071]/50 pt-9 sm:border-t-0 sm:pt-0 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10"
          >
            <FooterHeading>{footerSectionData.columns[1].title}</FooterHeading>

            <ul className="space-y-3.5">
              {footerSectionData.columns[1].links.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex w-fit items-center gap-3 text-[15px] text-[#dce1e7] transition-all duration-300 hover:translate-x-2 hover:text-[#f2b51c] sm:text-base"
                  >
                    <ChevronRight
                      size={21}
                      strokeWidth={3}
                      className="shrink-0 text-[#f2b51c] transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="border-t border-[#526071]/50 pt-9 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10"
          >
            <FooterHeading>{footerSectionData.contactHeading}</FooterHeading>


            <div className="flex items-start gap-5">
              <MapPin
                size={34}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#f2b51c]"
              />

              <p className="text-[15px] leading-[1.8] text-[#dce1e7] sm:text-base">
                {siteInfoData.addressLines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </p>
            </div>


            <div className="my-7 h-px w-full bg-[#526071]" />


            <div className="flex items-start gap-5">
              <Clock
                size={34}
                strokeWidth={2.2}
                className="mt-1 shrink-0 text-[#f2b51c]"
              />

              <div className="text-[15px] leading-[1.9] text-[#dce1e7] sm:text-base">
                {siteInfoData.hours.map((hours) => (
                  <p key={hours.days}>
                    {hours.days}: {hours.time}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>


        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-16 h-[3px] origin-left bg-[#e9a916] sm:mt-20"
        />

        <div className="flex flex-col items-center justify-between gap-7 py-8 sm:flex-row sm:gap-5 sm:py-9">


          <div className="flex items-center gap-4 sm:gap-5">
            {siteInfoData.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              if (!Icon) {
                throw new Error(`Unknown footer social icon: ${social.icon}`);
              }

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5, scale: 1.08 }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 0.95 }
                  }
                  className="flex h-[57px] w-[57px] items-center justify-center rounded-full border-2 border-[#e9a916] text-white transition-all duration-300 hover:bg-[#e9a916] hover:text-[#061725]"
                >
                  <Icon size={25} strokeWidth={2.1} />
                </motion.a>
              );
            })}
          </div>


          <div className="hidden h-12 w-[2px] bg-[#aeb8c2] sm:block" />


          <p className="text-center text-sm leading-relaxed text-[#dce1e7] sm:flex-1 sm:text-left sm:text-base lg:text-lg">
            {footerSectionData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
