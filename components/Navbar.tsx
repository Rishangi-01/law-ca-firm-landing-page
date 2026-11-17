"use client";

import { useState, useEffect, useRef } from "react";
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
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { navigationData, siteInfoData } from "@/data";

const navLinks = navigationData.links;
const socialIcons: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
};
const navbarSocialOrder = ["linkedin", "facebook", "instagram", "youtube"];
const socialLinks = [...siteInfoData.socials].sort(
  (a, b) =>
    navbarSocialOrder.indexOf(a.icon) - navbarSocialOrder.indexOf(b.icon),
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    observerRef.current = observer;

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);

    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="hidden lg:block bg-[#061b32] text-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between py-2.5 px-5 sm:px-8 lg:px-12 xl:px-12">
          <div className="flex items-center gap-7 text-[14px] xl:text-[16px]">
            <a
              href={siteInfoData.mobileMenu.phoneHref}
              className="group flex items-center gap-3 transition-colors hover:text-[#e6a51d]"
            >
              <FaPhoneAlt className="text-[#e5a51a] text-[19px] transition-transform group-hover:rotate-12" />
              <span>{siteInfoData.mobileMenu.phoneLabel}</span>
            </a>

            <span className="h-6 w-px bg-white/30" />

            <a
              href={siteInfoData.mobileMenu.emailHref}
              className="group flex items-center gap-3 transition-colors hover:text-[#e6a51d]"
            >
              <FaEnvelope className="text-[23px] transition-transform group-hover:scale-110" />
              <span>{siteInfoData.mobileMenu.emailLabel}</span>
            </a>
          </div>

          <div className="flex items-center gap-7">
            <div className="flex items-center gap-3 text-[14px] xl:text-[16px]">
              <FaMapMarkerAlt className="text-[#e5a51a] text-[22px]" />
              <span>{siteInfoData.addressLines.join(" ")}</span>
            </div>

            <span className="h-6 w-px bg-white/30" />

            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                if (!Icon) {
                  throw new Error(`Unknown navigation social icon: ${social.icon}`);
                }

                return (
                  <a
                    key={social.label}
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
          href={siteInfoData.homeHref}
          aria-label={siteInfoData.homeAriaLabelTemplate.replace(
            "{name}",
            siteInfoData.name,
          )}
          className="relative flex shrink-0 items-center"
        >
          <Image
            src={siteInfoData.logo}
            alt={siteInfoData.name}
            width={320}
            height={100}
            priority
            className="h-[65px] w-[210px] object-contain sm:h-[75px] sm:w-[250px] lg:h-[65px] lg:w-[290px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(id)}
                className={`group relative py-3 text-[16px] font-bold transition-colors duration-300 xl:text-[18px]
          ${
            isActive ? "text-[#b77b09]" : "text-[#10243b] hover:text-[#b77b09]"
          }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#c18a13] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-7 xl:flex">

          <div className="h-11 w-px bg-gray-300" />

          <Link
            href={navigationData.button.href}
            className="group flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#b77a08] to-[#d49b1b] px-6 py-4 text-[16px] font-semibold text-white shadow-md shadow-[#b77a08]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b77a08]/30"
          >
            <FaCalendarAlt className="text-[19px] transition-transform duration-300 group-hover:rotate-12" />
            {navigationData.button.label}
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? siteInfoData.mobileMenu.closeLabel
              : siteInfoData.mobileMenu.openLabel
          }
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
            <nav
              aria-label={siteInfoData.mobileMenu.ariaLabel}
              className="mx-auto max-w-[1800px] px-5 py-5 md:px-8"
            >
              <div className="flex flex-col">
                {navLinks.slice(0, 2).map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(id)}
                      className={`mobile-nav-link w-full text-left transition-colors duration-300 ${
                        isActive ? "text-[#b77b09] font-bold" : "text-[#10243b]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#c18a13]" />
                      )}
                    </button>
                  );
                })}

                {navLinks.slice(2).map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(id)}
                      className={`mobile-nav-link w-full text-left transition-colors duration-300 ${
                        isActive ? "text-[#b77b09] font-bold" : "text-[#10243b]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#c18a13]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 space-y-4 rounded-lg bg-[#071c33] p-5 text-white">
                <a
                  href={siteInfoData.mobileMenu.phoneHref}
                  className="flex items-center gap-3 text-sm"
                >
                  <FaPhoneAlt className="text-[#e5a51a]" />
                  {siteInfoData.mobileMenu.phoneLabel}
                </a>

                <a
                  href={siteInfoData.mobileMenu.emailHref}
                  className="flex items-center gap-3 text-sm"
                >
                  <FaEnvelope className="text-[#e5a51a]" />
                  {siteInfoData.mobileMenu.emailLabel}
                </a>

                <div className="flex items-start gap-3 text-sm leading-relaxed">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#e5a51a]" />
                  {siteInfoData.addressLines.join(" ")}
                </div>

                <div className="flex gap-5 border-t border-white/20 pt-4">
                  {socialLinks.map((social) => {
                    const Icon = socialIcons[social.icon];
                    if (!Icon) {
                      throw new Error(`Unknown navigation social icon: ${social.icon}`);
                    }

                    return (
                      <a
                        key={social.label}
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
                href={navigationData.button.href}
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#b77a08] to-[#d49b1b] px-5 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <FaCalendarAlt />
                {navigationData.button.label}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
