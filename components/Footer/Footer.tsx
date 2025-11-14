"use client";

import Link from "next/link";
import Image from "next/image";
import { sectionMap, scrollToSection } from "@/lib/scroll";
import { showDevelopmentMessage } from "@/components/ui/DevelopmentMessage";

const footerNavItems = [
  { href: "/numbers", label: "ЦИФРЫ" },
  { href: "/deals", label: "СДЕЛКИ ОНЛАЙН" },
  { href: "/about", label: "О КОМПАНИИ" },
  { href: "/tradeblade-eto", label: "TRADEBLAD ЭТО" },
  { href: "/how-to-start", label: "КАК НАЧАТЬ" },
  { href: "/tariffs", label: "ТАРИФЫ" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const sectionId = sectionMap[href];
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      showDevelopmentMessage();
    }
  };

  return (
    <footer className="w-full footer-full-width">
      <div className="mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8 pb-[57px] sm:pb-12 md:pb-0 pt-8 sm:pt-10 md:pt-0 lg:flex-row lg:items-stretch lg:justify-between">
          <div className="flex sm:flex-row lg:flex-col gap-8 sm:gap-12 lg:gap-[60px] xl:gap-[84px] px-4 sm:px-6 md:px-8 lg:px-0 lg:ml-12 xl:ml-20 lg:py-8 xl:py-10">
            <h3
              className="text-sm font-normal uppercase leading-5 shrink-0"
              style={{ color: "var(--footer-nav-title)" }}
            >
              БЫСТРАЯ
              <br />
              НАВИГАЦИЯ
            </h3>
            <nav className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 sm:items-center">
              {footerNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item.href, e)}
                  className="text-(--footer-menu) text-sm sm:text-base font-medium leading-5 transition-colors duration-200 hover:text-[#57E0FF] whitespace-nowrap cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex flex-col justify-between items-end lg:mr-12 xl:mr-20 self-stretch border-l border-white/30 lg:pl-12 xl:pl-20 2xl:pl-[166px] lg:py-8 xl:py-10">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-trade.svg"
                alt="TRADE BLADE"
                width={40}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p
              className="text-xs lg:text-sm font-normal leading-5 whitespace-nowrap"
              style={{ color: "var(--footer-copyright)" }}
            >
              © {currentYear} TradeBlade. All rights reserved
            </p>
          </div>
        </div>

        <div className="py-4 sm:py-5 px-4 sm:px-6 border-t border-white/30 flex flex-col justify-between lg:hidden">
          <div className="flex items-center mb-12 sm:mb-16 md:mb-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-trade.svg"
                alt="TRADE BLADE"
                width={60}
                height={60}
                className="h-[60px] sm:h-[70px] md:h-[80px] w-auto"
              />
            </Link>
          </div>
          <p
            className="text-xs sm:text-sm font-normal leading-5 text-start"
            style={{ color: "var(--footer-copyright)" }}
          >
            © {currentYear} TradeBlade. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
