
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Scale,
  CircleHelp,
  Plus,
  Minus,
} from "lucide-react";
import { faqSectionData } from "@/data";

const faqs = faqSectionData.items;

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#faf8f5] py-12 sm:py-12 lg:py-12 w-full px-5 sm:px-8 lg:px-12 xl:px-12"
    >
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#c58b20]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">

      
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >
      
          <div className="mb-5 flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-[2px] w-10 bg-[#c18a25] sm:w-16 lg:w-20" />

            <div className="flex items-center gap-3">
              <Scale
                className="h-9 w-9 text-[#c18a25] sm:h-11 sm:w-11"
                strokeWidth={1.8}
              />

              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#102a40] sm:text-base lg:text-lg">
                {faqSectionData.eyebrow}
              </span>
            </div>

            <span className="h-[2px] w-10 bg-[#c18a25] sm:w-16 lg:w-20" />
          </div>

      
          <h2
            id="faq-heading"
            className="font-serif font-bold leading-[1.15] tracking-tight text-[#10243e] text-[29px] sm:text-4xl xl:text-[38px]"
          >
            {faqSectionData.headingFirst}{" "}
            <span className="text-[#bd831b]">
              {faqSectionData.headingHighlight}
            </span>
          </h2>

      
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[#50545a] sm:text-lg lg:text-xl">
            {faqSectionData.intro}
          </p>
        </motion.div>

      
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">

      
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: -50 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[650px] lg:col-span-5 lg:max-w-none"
          >

      
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -9, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto aspect-[4/4] w-full"
            >
              <Image
                src={faqSectionData.image}
                alt={faqSectionData.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

      
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: 50 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-3.5 lg:col-span-7 lg:gap-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const faqId = index + 1;
              const questionId = `faq-question-${faqId}`;
              const answerId = `faq-answer-${faqId}`;

              return (
                <motion.div
                  key={faq.question}
                  layout={!shouldReduceMotion}
                  transition={{
                    layout: { duration: 0.35, ease: "easeInOut" },
                  }}
                  className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#e7d4b5] bg-[#f9eee0] shadow-[0_8px_25px_rgba(50,35,15,0.06)]"
                      : "border-[#eae5df] bg-white shadow-[0_3px_12px_rgba(30,30,30,0.035)] hover:border-[#d5b57c]"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                    className="flex min-h-[76px] w-full items-center gap-4 px-4 py-4 text-left outline-none transition-colors sm:min-h-[82px] sm:gap-5 sm:px-6 lg:px-7"
                  >
                    {/* Question Icon */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e5a329] to-[#b87910] text-white shadow-sm sm:h-12 sm:w-12">
                      <CircleHelp
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        strokeWidth={2.3}
                      />
                    </span>

                    {/* Question Text */}
                    <span className="flex-1 text-base font-semibold leading-snug text-[#10243e] sm:text-lg lg:text-[21px]">
                      {faq.question}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? "rotate-180 bg-[#c78b1b]"
                          : "bg-gradient-to-br from-[#e5a329] to-[#b87910]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={3}
                        />
                      ) : (
                        <Plus
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={3}
                        />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: shouldReduceMotion ? "auto" : 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#e9d8c0]/70 px-5 py-5 pl-[68px] sm:px-7 sm:py-5 sm:pl-[84px] lg:pl-[92px]">
                          <p className="max-w-3xl text-sm leading-[1.8] text-[#53575d] sm:text-base lg:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
