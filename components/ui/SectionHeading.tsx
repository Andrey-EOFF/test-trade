import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export default function SectionHeading({
  children,
  className,
  variant = "light",
}: SectionHeadingProps) {
  const colorClass =
    variant === "dark"
      ? "text-(--text-dark-heading)"
      : "text-(--text-light-heading)";

  return (
    <h1
      className={cn(
        colorClass,
        "text-3xl md:text-5xl font-bold uppercase leading-14 mb-0.5 md:mb-1",
        className
      )}
    >
      {children}
    </h1>
  );
}
