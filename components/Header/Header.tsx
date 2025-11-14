"use client";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-150 header-full-width bg-(--bg-primary)">
      <div className="mx-auto px-[10px] sm:px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="relative flex h-[52px] sm:h-[56px] md:h-[60px] lg:h-[64px] items-center justify-between gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 lg:flex-initial relative min-w-0">
            <Logo />
            <div className="hidden lg:block h-px bg-bg-tertiary ml-3 lg:ml-4 w-0 lg:w-[150px] xl:w-[217px] transition-all duration-300" />
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-center min-w-0 md:mr-5">
            <Navigation />
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <Button
              variant="outline"
              className="text-xs xl:text-base px-3 xl:px-6 py-2 xl:py-2.5"
            >
              ВХОД
            </Button>
            <Button
              variant="primary"
              className="text-xs xl:text-base px-3 xl:px-6 py-2 xl:py-2.5"
            >
              РЕГИСТРАЦИЯ
            </Button>
          </div>

          <div className="lg:hidden pr-[3px] shrink-0">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
