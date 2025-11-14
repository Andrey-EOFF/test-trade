import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h1
      className={cn(
        "text-(--text-light-heading) text-3xl md:text-5xl font-bold uppercase leading-14 mb-0.5 md:mb-1",
        className
      )}
    >
      {children}
    </h1>
  );
}
