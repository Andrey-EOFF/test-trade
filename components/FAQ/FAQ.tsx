"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { faqData } from "@/data/FAQ";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="w-full bg-(--bg-secondary) px-4 py-6 md:py-12 lg:py-16 md:px-20">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <SectionHeading variant="light">Часті питання</SectionHeading>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(index);

            return (
              <div
                key={index}
                onClick={() => toggleItem(index)}
                className={cn(
                  "rounded-lg border transition-all duration-300 cursor-pointer",
                  isOpen
                    ? "bg-(--bg-tertiary) border-(--bg-tertiary)"
                    : "bg-gray-100 border-gray-200"
                )}
              >
                <div
                  className={cn(
                    "w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between",
                    isOpen ? "text-white" : "text-black"
                  )}
                >
                  <span className="font-medium text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={cn(
                      "w-5 h-5 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180" : "rotate-0",
                      isOpen ? "text-white" : "text-black"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {isOpen && (
                  <div className="px-4 pb-4 md:px-6 md:pb-5">
                    <p className="text-white text-sm md:text-base leading-6">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
