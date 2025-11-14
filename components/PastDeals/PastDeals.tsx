"use client";

import { useEffect, useRef, useState } from "react";
import DealCard from "./DealCard";
import { deals } from "@/data/deals";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function PastDeals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isUserInteracting = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationFrameId: number;
    let lastTime = 0;
    const scrollSpeed = 0.5;

    let userScrollTimeout: NodeJS.Timeout;

    const pauseAutoScroll = () => {
      isUserInteracting.current = true;
      setIsPaused(true);
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        isUserInteracting.current = false;
        setIsPaused(false);
      }, 3000);
    };

    const handleWheel = () => {
      pauseAutoScroll();
    };

    const handleTouch = () => {
      pauseAutoScroll();
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: true });
    scrollContainer.addEventListener("touchstart", handleTouch, {
      passive: true,
    });
    scrollContainer.addEventListener("touchmove", handleTouch, {
      passive: true,
    });
    scrollContainer.addEventListener("mousedown", handleTouch);

    const autoScroll = (currentTime: number) => {
      if (isPaused || isUserInteracting.current) {
        lastTime = currentTime;
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (maxScroll <= 0) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      if (lastTime === 0) {
        lastTime = currentTime;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      scrollPosition += scrollSpeed * (deltaTime / 16);

      const singleSetWidth = scrollContainer.scrollWidth / 2;

      if (scrollPosition >= singleSetWidth) {
        scrollPosition = scrollPosition - singleSetWidth;
      }

      scrollContainer.scrollLeft = scrollPosition;

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(userScrollTimeout);
      scrollContainer.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("touchstart", handleTouch);
      scrollContainer.removeEventListener("touchmove", handleTouch);
      scrollContainer.removeEventListener("mousedown", handleTouch);
    };
  }, [isPaused]);

  return (
    <section
      id="deals"
      className="w-full bg-(--bg-primary) pt-12 md:pt-20 pb-19 md:pb-45 pl-4 md:pl-20 pr-0"
    >
      <div className="w-full">
        <div className="flex flex-col items-start gap-0.5 md:gap-1 mb-6 md:mb-18">
          <SectionHeading variant="dark">ПРОШЕДШИЕ СДЕЛКИ</SectionHeading>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-accent-green text-sm md:text-base font-normal">
              Онлайн
            </span>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto deals-scrollbar pb-4"
          onMouseEnter={() => !isUserInteracting.current && setIsPaused(true)}
          onMouseLeave={() => !isUserInteracting.current && setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4 md:gap-6 min-w-max"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[...deals, ...deals].map((deal, index) => {
              const isLast = index === [...deals, ...deals].length - 1;
              return (
                <motion.div
                  key={`${deal.pair}-${index}`}
                  className={isLast ? "mr-4 md:mr-20" : ""}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                      scale: 0.9,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <DealCard
                    pair={deal.pair}
                    type={deal.type}
                    timeAgo={deal.timeAgo}
                    profit={deal.profit}
                    goal={deal.goal}
                    entryDate={deal.entryDate}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
