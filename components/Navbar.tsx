
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact Us", href: "/contact" },
];

const practiceAreas = [
  { name: "Corporate Law", href: "/practice-areas/corporate-law" },
  { name: "Family Law", href: "/practice-areas/family-law" },
  { name: "Criminal Law", href: "/practice-areas/criminal-law" },
  { name: "Property Law", href: "/practice-areas/property-law" },
  { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

      
      <div className="hidden lg:block bg-[#061b32] text-white">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-2.5 xl:px-10">

      
          <div className="flex items-center gap-7 text-[14px] xl:text-[16px]">

            <a
              href="tel:+919876543210"
              className="group flex items-center gap-3 transition-colors hover:text-[#e6a51d]"
            >
              <FaPhoneAlt className="text-[#e5a51a] text-[19px] transition-transform group-hover:rotate-12" />
              <span>+91 98765 43210</span>
            </a>

            <span className="h-6 w-px bg-white/30" />

            <a
              href="mailto:info@lexwelllaw.com"
              className="group flex items-center gap-3 transition-colors hover:text-[#e6a51d]"
            >
              <FaEnvelope className="text-[23px] transition-transform group-hover:scale-110" />
              <span>info@lexwelllaw.com</span>
            </a>

          </div>

      
          <div className="flex items-center gap-7">

            <div className="flex items-center gap-3 text-[14px] xl:text-[16px]">
              <FaMapMarkerAlt className="text-[#e5a51a] text-[22px]" />
              <span>
                A-102, Sector 62, Noida, Uttar Pradesh – 201309
              </span>
            </div>

            <span className="h-6 w-px bg-white/30" />

            <div className="flex items-center gap-5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white text-[20px] transition-all duration-300 hover:-translate-y-1 hover:text-[#e6a51d]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-5 py-3 md:px-8 lg:px-10 lg:py-2">

      
        <Link
          href="/"
          aria-label="LexWell Law Firm Home"
          className="relative flex shrink-0 items-center"
        >
          <Image
            src="/images/logo.jpg"
            alt="LexWell Law Firm"
            width={320}
            height={100}
            priority
            className="h-[65px] w-[210px] object-contain sm:h-[75px] sm:w-[250px] lg:h-[65px] lg:w-[320px]"
          />
        </Link>

      
        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">

          <Link
            href="/"
            className="group relative py-3 text-[16px] font-bold text-[#b77b09] xl:text-[18px]"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#c18a13]" />
          </Link>

          <Link
            href="/about"
            className="nav-link"
          >
            About Us
          </Link>

      
          <div
            className="relative"
            onMouseEnter={() => setPracticeOpen(true)}
            onMouseLeave={() => setPracticeOpen(false)}
          >
            <button
              onClick={() => setPracticeOpen(!practiceOpen)}
              aria-expanded={practiceOpen}
              className="nav-link flex items-center gap-2"
            >
              Practice Areas
              <FaChevronDown
                className={`text-[13px] transition-transform duration-300 ${
                  practiceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {practiceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.22 }}
                  className="absolute left-0 top-full z-50 mt-3 w-[245px] overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-[0_15px_40px_rgba(0,0,0,0.14)]"
                >
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      onClick={() => setPracticeOpen(false)}
                      className="block border-b border-gray-100 px-5 py-3 text-[14px] font-medium text-[#15253a] transition-all duration-300 last:border-0 hover:bg-[#fdf8ed] hover:pl-7 hover:text-[#b77b09]"
                    >
                      {area.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/team" className="nav-link">
            Our Team
          </Link>

          <Link href="/testimonials" className="nav-link">
            Testimonials
          </Link>

          <Link href="/faqs" className="nav-link">
            FAQs
          </Link>

          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>

        </nav>

      
        <div className="hidden items-center gap-7 xl:flex">

          <div className="h-11 w-px bg-gray-300" />

          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#b77a08] to-[#d49b1b] px-6 py-4 text-[16px] font-semibold text-white shadow-md shadow-[#b77a08]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b77a08]/30"
          >
            <FaCalendarAlt className="text-[19px] transition-transform duration-300 group-hover:rotate-12" />
            Book a Consultation
          </Link>

        </div>

      
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-md bg-[#071c33] text-white transition-all duration-300 hover:bg-[#b77b09] lg:hidden"
        >
          {menuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>

      </div>

      
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <nav className="mx-auto max-w-[1800px] px-5 py-5 md:px-8">

              <div className="flex flex-col">

                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-nav-link"
                  >
                    {link.name}
                  </Link>
                ))}

      
                <div className="border-b border-gray-100">

                  <button
                    onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                    aria-expanded={mobilePracticeOpen}
                    className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-[#10243b] transition-colors hover:text-[#bd840f]"
                  >
                    Practice Areas

                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        mobilePracticeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobilePracticeOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-[#faf8f3] px-4"
                      >
                        {practiceAreas.map((area) => (
                          <Link
                            key={area.name}
                            href={area.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobilePracticeOpen(false);
                            }}
                            className="block border-b border-gray-200 py-3 text-sm text-gray-600 transition-colors last:border-0 hover:text-[#b77b09]"
                          >
                            {area.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-nav-link"
                  >
                    {link.name}
                  </Link>
                ))}

              </div>

      
              <div className="mt-5 space-y-4 rounded-lg bg-[#071c33] p-5 text-white">

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm"
                >
                  <FaPhoneAlt className="text-[#e5a51a]" />
                  +91 98765 43210
                </a>

                <a
                  href="mailto:info@lexwelllaw.com"
                  className="flex items-center gap-3 text-sm"
                >
                  <FaEnvelope className="text-[#e5a51a]" />
                  info@lexwelllaw.com
                </a>

                <div className="flex items-start gap-3 text-sm leading-relaxed">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#e5a51a]" />
                  A-102, Sector 62, Noida, Uttar Pradesh – 201309
                </div>

                <div className="flex gap-5 border-t border-white/20 pt-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="text-lg transition-colors hover:text-[#e5a51a]"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>

              </div>

      
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#b77a08] to-[#d49b1b] px-5 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <FaCalendarAlt />
                Book a Consultation
              </Link>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
