"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });

  const display = useTransform(spring, (current) => {
    if (decimals > 0) {
      return current.toFixed(decimals) + suffix;
    }
    return Math.floor(current).toString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.span ref={ref} className="inline-block">
      {display}
    </motion.span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="numbers"
      ref={sectionRef}
      className="w-full bg-(--bg-secondary) relative "
    >
      <div className="absolute left-0 -top-6 sm:-top-8 md:-top-10 lg:-top-12 w-[70%] sm:w-[65%] md:w-[55%] lg:w-[50%] h-[82px] sm:h-[88px] md:h-[94px] lg:h-[100px] bg-white rounded -z-10 stats-clip-path"></div>
      <div className="w-full flex flex-col md:flex-row min-h-0 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <motion.div
          className="w-full md:w-auto md:min-w-[320px] lg:min-w-[360px] xl:min-w-[400px] bg-(--bg-secondary) shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="md:h-full md:flex md:flex-col md:justify-center mb-10 sm:mb-8 md:mb-0">
            <SectionHeading variant="light">ЦИФРЫ</SectionHeading>
            <motion.p
              className="text-(--text-light-muted) text-sm sm:text-base md:text-base lg:text-lg font-normal leading-5"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Сентябрь 2022
            </motion.p>
          </div>
        </motion.div>

        <div className="w-full md:flex-1 bg-(--bg-secondary) ">
          <div className="w-full h-full">
            <motion.div
              className="flex flex-col md:grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 md:items-start"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="flex flex-col w-full"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <motion.div
                  className="text-(--text-light-stats) text-xs sm:text-xs md:text-sm lg:text-base font-normal uppercase leading-relaxed mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-col md:flex-row md:gap-1">
                    <span>ТОРГОВОЙ</span>
                    <span>ПРИБЫЛИ</span>
                  </div>
                </motion.div>
                <p className="text-(--text-light-accent) text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium uppercase leading-10">
                  <AnimatedNumber value={2756} suffix="%" />
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col w-full"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <motion.div
                  className="text-(--text-light-gray) text-xs sm:text-xs md:text-sm lg:text-base font-normal uppercase leading-relaxed mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-col md:flex-row md:gap-1">
                    <span>ФЬЮЧЕРСНЫХ</span>
                    <span>И СПОТОВЫХ СДЕЛОК</span>
                  </div>
                </motion.div>
                <p className="text-(--text-light-accent) text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium uppercase leading-10">
                  <AnimatedNumber value={67} />
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col w-full"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <motion.div
                  className="text-(--text-light-gray) text-xs sm:text-xs md:text-sm lg:text-base font-normal uppercase leading-relaxed mb-1 sm:mb-1.5 md:mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="flex flex-col sm:flex-col md:flex-row md:gap-1">
                    <span>ПРИБЫЛЬ</span>
                    <span>ПОДПИСЧИКОВ</span>
                  </div>
                </motion.div>
                <p className="text-(--text-light-accent) text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium uppercase leading-10">
                  <AnimatedNumber value={375000} />
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
