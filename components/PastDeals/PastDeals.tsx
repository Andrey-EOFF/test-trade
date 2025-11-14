"use client";

import DealCard from "./DealCard";
import { deals } from "@/data/deals";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function PastDeals() {
  return (
    <section className="w-full bg-(--bg-primary) pt-12 md:pt-20 pb-19 md:pb-45 px-4 md:px-20">
      <div className="w-full">
        <div className="flex flex-col items-start gap-0.5 md:gap-1 mb-6 md:mb-18">
          <SectionHeading className="text-(--text-light-heading)">
            ПРОШЕДШИЕ СДЕЛКИ
          </SectionHeading>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-(--color-accent-green) rounded-full"></div>
            <span className="text-(--color-accent-green) text-sm md:text-base font-normal">
              Онлайн
            </span>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
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
            {deals.map((deal, index) => (
              <motion.div
                key={`${deal.pair}-${index}`}
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
