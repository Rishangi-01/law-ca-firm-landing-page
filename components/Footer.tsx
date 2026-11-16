
"use client";

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

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Corporate Law", href: "/services/corporate-law" },
  { label: "Family Law", href: "/services/family-law" },
  { label: "Criminal Defense", href: "/services/criminal-defense" },
  { label: "Property Law", href: "/services/property-law" },
  { label: "Dispute Resolution", href: "/services/dispute-resolution" },
  { label: "Legal Consultation", href: "/services/legal-consultation" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    Icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    Icon: FaYoutube,
  },
];

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

  return (
    <footer className="relative isolate overflow-hidden bg-[#061725] text-white">

      {/* Background texture */}
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

      {/* Subtle navy glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#153d5a]/30 blur-[120px]"
      />

      <div className="mx-auto max-w-[1600px] px-6 pb-7 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10"
        >

          {/* ================================= */}
          {/* COLUMN 1 - BRAND & CONTACT */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="lg:col-span-3"
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="LexWell Law Firm home"
              className="group inline-flex items-center gap-4"
            >
              <Scale
                className="h-[66px] w-[66px] shrink-0 text-[#f2b51c] transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.4}
              />

              <span className="h-[68px] w-[2px] bg-[#e9a916]" />

              <span className="flex flex-col">
                <span className="font-serif text-4xl font-bold leading-none tracking-tight text-white sm:text-[42px]">
                  LexWell
                </span>

                <span className="mt-2 text-center text-sm font-semibold tracking-[0.48em] text-white sm:text-base">
                  LAW FIRM
                </span>
              </span>
            </Link>

            {/* Description */}
            <p className="mt-7 max-w-[390px] text-[15px] leading-[1.8] text-[#d2d8df] sm:text-base">
              Our experienced attorneys are committed to
              protect your rights with integrity and
              professionalism.
            </p>

            {/* Phone */}
            <div className="mt-10 flex items-center gap-5">
              <motion.a
                href="tel:+919876543210"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                aria-label="Call LexWell Law Firm"
                className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-2 border-[#e9a916] text-[#f2b51c] transition-all duration-300 hover:bg-[#e9a916] hover:text-[#061725]"
              >
                <Phone size={29} fill="currentColor" />
              </motion.a>

              <div>
                <p className="mb-1 text-sm text-[#d2d8df] sm:text-base">
                  Contact Us
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-lg font-semibold text-white transition-colors hover:text-[#f2b51c] sm:text-xl"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mt-8 flex items-center gap-5">
              <motion.a
                href="mailto:info@lawfirm.com"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                aria-label="Email LexWell Law Firm"
                className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border-2 border-[#e9a916] text-[#f2b51c] transition-all duration-300 hover:bg-[#e9a916] hover:text-[#061725]"
              >
                <Mail size={29} />
              </motion.a>

              <div>
                <p className="mb-1 text-sm text-[#d2d8df] sm:text-base">
                  Email Us
                </p>
                <a
                  href="mailto:info@lawfirm.com"
                  className="break-all text-lg font-semibold text-white transition-colors hover:text-[#f2b51c] sm:text-xl"
                >
                  info@lawfirm.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================================= */}
          {/* COLUMN 2 - QUICK LINKS */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="border-t border-[#526071]/50 pt-9 sm:border-t-0 sm:pt-0 lg:col-span-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10"
          >
            <FooterHeading>Quick Links</FooterHeading>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
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

          {/* ================================= */}
          {/* COLUMN 3 - SERVICES */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="border-t border-[#526071]/50 pt-9 sm:border-t-0 sm:pt-0 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10"
          >
            <FooterHeading>Our Services</FooterHeading>

            <ul className="space-y-3.5">
              {services.map((service) => (
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

          {/* ================================= */}
          {/* COLUMN 4 - CONTACT INFO */}
          {/* ================================= */}

          <motion.div
            variants={itemVariants}
            className="border-t border-[#526071]/50 pt-9 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10"
          >
            <FooterHeading>Contact Info</FooterHeading>

            {/* Address */}
            <div className="flex items-start gap-5">
              <MapPin
                size={34}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#f2b51c]"
              />

              <p className="text-[15px] leading-[1.8] text-[#dce1e7] sm:text-base">
                123, Legal Avenue, Sector 62,
                <br />
                Noida, Uttar Pradesh – 201301
              </p>
            </div>

            {/* Divider */}
            <div className="my-7 h-px w-full bg-[#526071]" />

            {/* Business Hours */}
            <div className="flex items-start gap-5">
              <Clock
                size={34}
                strokeWidth={2.2}
                className="mt-1 shrink-0 text-[#f2b51c]"
              />

              <div className="text-[15px] leading-[1.9] text-[#dce1e7] sm:text-base">
                <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ================================= */}
        {/* BOTTOM FOOTER */}
        {/* ================================= */}

        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-16 h-[3px] origin-left bg-[#e9a916] sm:mt-20"
        />

        <div className="flex flex-col items-center justify-between gap-7 py-8 sm:flex-row sm:gap-5 sm:py-9">

          {/* Social Media */}
          <div className="flex items-center gap-4 sm:gap-5">
            {socialLinks.map(({ name, href, Icon }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
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
            ))}
          </div>

          {/* Copyright Divider */}
          <div className="hidden h-12 w-[2px] bg-[#aeb8c2] sm:block" />

          {/* Copyright */}
          <p className="text-center text-sm leading-relaxed text-[#dce1e7] sm:flex-1 sm:text-left sm:text-base lg:text-lg">
            © 2026 LexWell Law Firm.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
