import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-4 py-[11px] rounded-[4px] border border-(--input-tertiary-bg) bg-(--input-tertiary-bg) text-white placeholder:text-gray-400 focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
