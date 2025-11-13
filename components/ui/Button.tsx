import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex px-6 py-4 md:py-2.5 rounded-[3px] text-base font-medium uppercase leading-5 shadow-[0px_0px_4px_0px_rgba(87,225,255,1.00)]  transition-colors duration-200 whitespace-nowrap outline outline-1 outline-offset-[-1px] outline-cyan-300 inline-flex justify-start items-start gap-2";

  const variants = {
    primary:
      "bg-(--button-primary-bg) text-white hover:bg-(--button-primary-bg)/90",
    secondary:
      "bg-(--button-secondary-bg) text-white hover:(--button-primary-bg)/90",
    outline:
      "bg-(--button-primary-bg)/20 border-2 border-(--button-primary-bg) text-white hover:bg-(--button-primary-bg)/10",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
