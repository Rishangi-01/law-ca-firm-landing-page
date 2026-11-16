
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  review: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Anderson",
    designation: "Business Owner",
    review:
      "Exceptional legal support and a highly professional team. They understood my needs, provided clear guidance, and delivered the right solution on time.",
    avatar: "/images/customer-michel.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Williams",
    designation: "Company Director",
    review:
      "From the very first consultation, I felt confident that my case was in the right hands. Their attention to detail and commitment made all the difference.",
    avatar: "/images/customer-theresa.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Thompson",
    designation: "Entrepreneur",
    review:
      "Professional, responsive, and incredibly knowledgeable. The entire legal process was explained clearly, and the team worked tirelessly to achieve the best outcome.",
    avatar: "/images/customer-william.webp",
    rating: 5,
  },
];

const testimonialVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#f8f7f4] px-3 py-12 sm:px-5 sm:py-12 lg:px-8 lg:py-12 w-full"
    >
      <div className="mx-auto max-w-[1750px]">

        
        <div className="relative isolate grid min-h-[620px] overflow-hidden rounded-[24px] bg-[#071d32] shadow-[0_25px_70px_rgba(5,25,43,0.16)] md:min-h-[650px] lg:min-h-[700px] lg:grid-cols-[1.12fr_0.88fr] xl:min-h-[750px]">

        
          <div className="relative z-10 flex flex-col justify-center overflow-hidden px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-12 xl:px-16 2xl:px-24">

        
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(55deg, transparent 0px, transparent 75px, #52718a 76px, transparent 78px)",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#c58c29]/10 blur-[100px]"
            />

            
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-4 sm:mb-6"
            >
              <Quote
                className="h-9 w-9 rotate-180 fill-[#e6a82d] text-[#e6a82d] sm:h-11 sm:w-11"
                strokeWidth={1.5}
              />

              <span className="text-sm font-bold uppercase tracking-[0.12em] text-white sm:text-lg">
                Testimonials
              </span>

              <span className="h-[2px] w-16 bg-[#bd861d] sm:w-24" />
            </motion.div>

            
            <motion.h2
              id="testimonials-heading"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl font-serif text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4rem]"
            >
              What Our{" "}
              <span className="text-[#e5a62e]">
                Clients
              </span>{" "}
              Say
            </motion.h2>

          
            <div
              className="relative mt-10 min-h-[220px] sm:mt-12 sm:min-h-[230px] lg:mt-14"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  variants={testimonialVariants}
                  initial={shouldReduceMotion ? false : "hidden"}
                  animate="visible"
                  exit={shouldReduceMotion ? undefined : "exit"}
                  className="flex flex-col"
                >
          
                  <blockquote className="max-w-[760px] font-serif text-[22px] leading-[1.55] text-white/95 sm:text-2xl md:text-[27px] xl:text-[30px]">
                    &ldquo;{activeTestimonial.review}&rdquo;
                  </blockquote>

          
                  <div className="mt-9 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-7">

          
                    <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-[2px] border-[#d9a12c] bg-[#17344b] sm:h-[88px] sm:w-[88px]">
                      <Image
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.name}
                        fill
                        sizes="88px"
                        className="object-cover"
                      />
                    </div>

          
                    <div className="min-w-[150px]">
                      <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                        {activeTestimonial.name}
                      </h3>

                      <p className="mt-1 text-sm text-white/75 sm:text-base md:text-lg">
                        {activeTestimonial.designation}
                      </p>
                    </div>

          
                    <div className="hidden h-14 w-px bg-white/25 sm:block" />

          
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${activeTestimonial.rating} out of 5 stars`}
                    >
                      {Array.from(
                        { length: activeTestimonial.rating },
                        (_, index) => (
                          <Star
                            key={index}
                            className="h-6 w-6 fill-[#f5a900] text-[#f5a900] sm:h-7 sm:w-7"
                            strokeWidth={1}
                          />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          
            <div className="mt-9 flex items-center justify-between sm:mt-12">

          
              <div className="flex items-center gap-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={
                      activeIndex === index ? "true" : undefined
                    }
                    className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5a62e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071d32] ${
                      activeIndex === index
                        ? "h-3 w-3 bg-[#e5a62e]"
                        : "h-2.5 w-2.5 bg-white/80 hover:bg-[#e5a62e]"
                    }`}
                  />
                ))}
              </div>

          
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-[#e5a62e] hover:bg-[#e5a62e] hover:text-[#071d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5a62e]"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-[#e5a62e] hover:bg-[#e5a62e] hover:text-[#071d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5a62e]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 1.06 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[380px] overflow-hidden sm:min-h-[480px] lg:min-h-full"
          >
            <Image
              src="/images/testimonial-hero.png"
              alt="Professional attorney sitting in his office"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071d32]/30 via-transparent to-transparent" />

            {/* Gold Edge */}
            <div className="absolute left-0 top-0 hidden h-full w-[3px] bg-gradient-to-b from-transparent via-[#c38d2a] to-transparent lg:block" />

            {/* Bottom Image Accent */}
            <div className="absolute bottom-7 right-7 hidden h-20 w-20 border-b-2 border-r-2 border-[#d4a03c]/80 lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
