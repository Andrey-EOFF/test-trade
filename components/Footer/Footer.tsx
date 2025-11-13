import Link from "next/link";
import Image from "next/image";

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

  return (
    <footer className="w-full footer-full-width ">
      <div className="mx-auto ">
        <div className="flex flex-col gap-8 pb-[57px] md:pb-0 pt-10 md:pt-0 md:flex-row md:items-stretch md:justify-between">
          <div className="flex md:flex-col gap-[84px] px-4 md:px-0 md:ml-20 md:py-10">
            <h3
              className="text-sm font-normal uppercase leading-5"
              style={{ color: "var(--footer-nav-title)" }}
            >
              БЫСТРАЯ
              <br />
              НАВИГАЦИЯ
            </h3>
            <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 md:flex-nowrap">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-(--footer-menu) text-base font-medium leading-5 transition-colors duration-200 hover:text-[#57E0FF] md:whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* <div className="hidden md:block self-stretch w-px bg-white/30 mx-8 " /> */}

          <div className="hidden md:flex flex-col justify-between items-end md:mr-20 self-stretch border-l md:border-white/30 md:pl-[166px] md:py-10 ">
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
              className="text-sm font-normal leading-5 md:whitespace-nowrap"
              style={{ color: "var(--footer-copyright)" }}
            >
              © {currentYear} TradeBlade. All rights reserved
            </p>
          </div>
        </div>

        <div className="py-5 px-4 border-t border-white/30 flex flex-col justify-between md:hidden">
          <div className="flex items-center mb-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-trade.svg"
                alt="TRADE BLADE"
                width={80}
                height={80}
                className="h-[80px] w-auto"
              />
            </Link>
          </div>
          <p
            className="text-sm font-normal leading-5 text-start"
            style={{ color: "var(--footer-copyright)" }}
          >
            © {currentYear} TradeBlade. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
