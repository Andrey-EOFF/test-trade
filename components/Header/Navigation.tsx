import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

const navItems = [
  { href: "/numbers", label: "ЦИФРЫ" },
  { href: "/deals", label: "СДЕЛКИ ОНЛАЙН" },
  { href: "/about", label: "О КОМПАНИИ" },
  { href: "/how-to-start", label: "КАК НАЧАТЬ" },
  { href: "/tariffs", label: "ТАРИФЫ" },
  { href: "/reviews", label: "ОТЗЫВЫ" },
  { href: "/faq", label: "FAQ" },
];

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const isMobile = className?.includes("flex-col");

  return (
    <nav
      className={cn(
        "flex gap-8 ",
        isMobile ? "items-start flex-col" : "items-center",
        className
      )}
    >
      {navItems.map((item) => (
        <div
          key={item.href}
          className={cn(
            "flex",
            isMobile ? "items-start w-full text-left" : "items-center"
          )}
        >
          <Link
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              "font-medium uppercase hover:text-[#57E0FF] transition-colors duration-200",
              isMobile
                ? "text-(--text-white-accent) text-2xl w-full text-left font-medium leading-8"
                : "text-(--text-dark-menu) text-sm leading-4"
            )}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
