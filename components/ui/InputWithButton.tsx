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
    <div className="relative flex items-center md:w-[500px] rounded-[4px] border border-(--input-background) bg-(--input-background) p-1">
      <input
        type="email"
        className={cn(
          "flex-1 px-4 py-[11px] bg-transparent text-white  placeholder:text-gray-400 focus:outline-none border-0 pr-2",
          className
        )}
        {...inputProps}
      />
      <Button
        variant={buttonVariant}
        onClick={onButtonClick}
        className="bg-(--button-primary-bg) px-6 py-[11px] text-sm font-medium uppercase leading-5 text-(--color-dark) font-bold border-0 shadow-none outline-none rounded h-auto shadow-[0px_0px_4px_0px_rgba(87,225,255,1.00)] outline outline-1 outline-offset-[-1px] outline-cyan-300"
      >
        {buttonText}
      </Button>
    </div>
  );
}
