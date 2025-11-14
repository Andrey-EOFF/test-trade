"use client";

import { cn } from "@/lib/utils";

interface TariffToggleProps {
  value: "spot" | "futures";
  onChange: (value: "spot" | "futures") => void;
}

export default function TariffToggle({ value, onChange }: TariffToggleProps) {
  return (
    <div className="relative flex items-center rounded-lg bg-(--color-purple) border border-(--color-purple) overflow-hidden p-1 w-full md:w-[413px] h-[52px]">
      <div
        className={cn(
          "absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-md bg-(--color-cyan) transition-transform duration-300 ease-in-out",
          value === "spot" ? "left-1 translate-x-0" : "left-1 translate-x-full"
        )}
      />
      <button
        onClick={() => onChange("spot")}
        className={cn(
          "relative z-10 flex-1 text-center px-6 py-3 text-lg md:text-2xl font-bold md:text-medium uppercase leading-6 transition-colors duration-300",
          value === "spot" ? "text-dark" : "text-(--color-cyan)"
        )}
      >
        СПОТ
      </button>
      <button
        onClick={() => onChange("futures")}
        className={cn(
          "relative z-10 flex-1 text-center px-6 py-3 text-lg md:text-2xl font-bold md:text-medium uppercase leading-6 transition-colors duration-300",
          value === "futures" ? "text-dark" : "text-(--color-cyan)"
        )}
      >
        ФЬЮЧЕРС
      </button>
    </div>
  );
}
