
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo success state.
    // Replace this with your API / backend integration.
    setIsSubmitted(true);
  };

  const inputClass =
    "w-full border-0 border-b border-[#d5d5d5] bg-transparent px-0 py-4 text-[15px] text-[#10243e] outline-none transition-all duration-300 placeholder:text-[#666] focus:border-[#bd831b] focus:ring-0 sm:text-base";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#faf8f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 w-full"
    >
      {/* Right-side Lady Justice background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-cover bg-center bg-no-repeat opacity-[0.13] lg:block"
        style={{
          backgroundImage:
            "url('/images/lady-justice-bg.png')",
        }}
      />

      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#bd831b]/[0.045] blur-3xl"
      />

      <div className="mx-auto max-w-[1550px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">

          {/* ================================= */}
          {/* LEFT SIDE - CONTACT INFORMATION */}
          {/* ================================= */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="relative z-10 lg:col-span-6"
          >
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <Scale
                className="h-9 w-9 text-[#bd831b] sm:h-11 sm:w-11"
                strokeWidth={1.8}
              />

              <span className="text-sm font-bold uppercase tracking-[0.1em] text-[#10243e] sm:text-base">
                Contact Us
              </span>

              <span className="h-[2px] w-16 bg-[#bd831b] sm:w-24" />
            </div>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="max-w-[680px] font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#10243e] sm:text-6xl lg:text-[4.5rem] xl:text-[4.5rem]"
            >
              Feel Free to
              <span className="block text-[#bd831b]">
                Write Us Anytime
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[630px] text-base leading-relaxed text-[#55565b] sm:text-lg lg:text-xl">
              Have a legal question or need professional
              advice? Our team is here to help you.
            </p>

            {/* Contact Image */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mt-8 h-[250px] w-full overflow-hidden sm:h-[330px] lg:h-[350px] xl:h-[380px]"
            >
              <Image
                src="/images/contact-legal.png"
                alt="Judge's gavel and golden scales of justice"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a30]/35 to-transparent" />

              {/* Gold accent */}
              <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#bd831b]" />
            </motion.div>

            {/* Contact Information Card */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative z-20 mx-auto -mt-16 w-[94%] bg-white shadow-[0_12px_40px_rgba(16,36,62,0.10)] sm:-mt-20"
            >
              {/* Phone and Email */}
              <div className="grid grid-cols-1 divide-y divide-[#eaeaea] sm:grid-cols-2 sm:divide-x sm:divide-y-0">

                {/* Phone */}
                <div className="flex items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e7e7e7] text-[#bd831b] transition-all duration-300 hover:border-[#bd831b] hover:bg-[#bd831b] hover:text-white">
                    <Phone size={26} />
                  </div>

                  <div className="min-w-0">
                    <a
                      href="tel:+919876543210"
                      className="block text-sm font-semibold text-[#10243e] transition-colors hover:text-[#bd831b] sm:text-base"
                    >
                      +91 98765 43210
                    </a>

                    <a
                      href="tel:+919876543211"
                      className="mt-1 block text-sm font-semibold text-[#10243e] transition-colors hover:text-[#bd831b] sm:text-base"
                    >
                      +91 98765 43211
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e7e7e7] text-[#bd831b] transition-all duration-300 hover:border-[#bd831b] hover:bg-[#bd831b] hover:text-white">
                    <Mail size={26} />
                  </div>

                  <div className="min-w-0">
                    <a
                      href="mailto:info@lawfirm.com"
                      className="block break-all text-sm font-semibold text-[#10243e] transition-colors hover:text-[#bd831b] sm:text-base"
                    >
                      info@lawfirm.com
                    </a>

                    <a
                      href="https://lawfirm.com"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#10243e] transition-colors hover:text-[#bd831b] sm:text-base"
                    >
                      www.lawfirm.com
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-5 border-t border-[#eaeaea] p-5 sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e7e7e7] text-[#bd831b] transition-all duration-300 hover:border-[#bd831b] hover:bg-[#bd831b] hover:text-white">
                  <MapPin size={28} />
                </div>

                <div>
                  <p className="text-sm font-semibold leading-relaxed text-[#10243e] sm:text-base lg:text-lg">
                    123, Legal Avenue, Sector 62,
                    <br />
                    Noida, Uttar Pradesh – 201301
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================================= */}
          {/* RIGHT SIDE - CONTACT FORM */}
          {/* ================================= */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0, x: 45 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              },
            }}
            className="relative z-10 mt-4 lg:col-span-6 lg:mt-0 lg:px-3 lg:py-5 xl:px-5"
          >
            {/* Gold and Navy Decorative Frame */}
            <div
              aria-hidden="true"
              className="absolute -right-1 -top-1 hidden h-[97%] w-[43%] bg-gradient-to-b from-[#e5ad35] via-[#bd831b] to-[#10243e] sm:block lg:-right-2 lg:-top-2"
            />

            {/* Additional bottom accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 hidden h-24 w-24 border-b-[5px] border-l-[5px] border-[#bd831b]/60 sm:block"
            />

            {/* Form White Card */}
            <div className="relative z-10 bg-white px-6 py-9 shadow-[0_15px_55px_rgba(16,36,62,0.10)] sm:px-10 sm:py-12 lg:px-10 lg:py-12 xl:px-14 xl:py-14">

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[510px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f7eddb] text-[#bd831b]">
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-[#10243e]">
                    Thank You!
                  </h3>

                  <p className="mt-4 max-w-sm text-base leading-relaxed text-[#656565]">
                    Your message has been submitted in this
                    demo. Connect the form to your backend
                    to deliver real enquiries.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 bg-[#bd831b] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#10243e]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                >
                  {/* Name */}
                  <div className="group">
                    <label
                      htmlFor="contact-name"
                      className="sr-only"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      autoComplete="name"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-4 group">
                    <label
                      htmlFor="contact-email"
                      className="sr-only"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      autoComplete="email"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}
                  <div className="mt-4 group">
                    <label
                      htmlFor="contact-phone"
                      className="sr-only"
                    >
                      Your Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      autoComplete="tel"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Subject */}
                  <div className="mt-4 group">
                    <label
                      htmlFor="contact-subject"
                      className="sr-only"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label
                      htmlFor="contact-message"
                      className="sr-only"
                    >
                      Your Message *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message *"
                      required
                      rows={5}
                      className={`${inputClass} min-h-[130px] resize-y`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <motion.button
                      type="submit"
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { y: -3 }
                      }
                      whileTap={
                        shouldReduceMotion
                          ? undefined
                          : { scale: 0.98 }
                      }
                      className="group inline-flex min-h-[58px] items-center justify-center gap-4 bg-gradient-to-r from-[#c58b1c] to-[#a96e0d] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(189,131,27,0.20)] transition-all duration-300 hover:from-[#10243e] hover:to-[#173c59] sm:min-w-[270px] sm:text-lg"
                    >
                      Send Message

                      <Send
                        size={21}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
