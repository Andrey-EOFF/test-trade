"use client";

import { cn } from "@/lib/utils";
import { sectionMap, scrollToSection } from "@/lib/scroll";
import { showDevelopmentMessage } from "@/components/ui/DevelopmentMessage";

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

  const handleClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (onLinkClick) {
      onLinkClick();
    }

    const sectionId = sectionMap[href];
    if (sectionId) {
      setTimeout(
        () => {
          scrollToSection(sectionId);
        },
        isMobile ? 300 : 0
      );
    } else {
      showDevelopmentMessage();
    }
  };

  return (
    <nav
      className={cn(
        "flex",
        isMobile
          ? "items-start flex-col gap-8"
          : "items-center gap-3 xl:gap-4 2xl:gap-8",
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
          <a
            href={item.href}
            onClick={(e) => handleClick(item.href, e)}
            className={cn(
              "font-medium uppercase hover:text-[#57E0FF] transition-colors duration-200 whitespace-nowrap cursor-pointer",
              isMobile
                ? "text-(--text-white-accent) text-2xl w-full text-left font-medium leading-8"
                : "text-(--text-dark-menu) text-xs xl:text-sm leading-4"
            )}
          >
            {item.label}
          </a>
        </div>
      ))}
    </nav>
  );
}
