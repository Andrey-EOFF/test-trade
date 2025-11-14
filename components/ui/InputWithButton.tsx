import { InputHTMLAttributes } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface InputWithButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonText?: string;
  onButtonClick?: () => void;
  buttonVariant?: "primary" | "secondary" | "outline";
}

export function InputWithButton({
  className,
  buttonText = "НАЧАТЬ",
  onButtonClick,
  buttonVariant = "primary",
  ...inputProps
}: InputWithButtonProps) {
  return (
    <div className="relative flex items-center max-w-[500px] rounded-[4px] border border-(--input-tertiary-bg) bg-(--input-tertiary-bg) p-1">
      <input
        type="email"
        className={cn(
          "flex-1 px-4 py-[11px] bg-transparent text-white placeholder:text-gray-400 focus:outline-none border-0 pr-2 min-w-0",
          className
        )}
        {...inputProps}
      />
      <Button
        variant={buttonVariant}
        onClick={onButtonClick}
        className="bg-(--button-primary-bg) px-4 sm:px-5 lg:px-6 py-[11px] text-xs sm:text-sm uppercase leading-5 text-dark font-bold border-0 rounded h-full shadow-[0px_0px_4px_0px_rgba(87,225,255,1.00)] outline outline-1 -outline-offset-1 outline-cyan-300 shrink-0"
      >
        {buttonText}
      </Button>
    </div>
  );
}
