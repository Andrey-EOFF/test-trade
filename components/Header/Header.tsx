"use client";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-150 header-full-width bg-(--bg-primary)">
      <div className="mx-auto px-[10px] md:px-20">
        <div className="relative flex h-[52px] md:h-[64px] items-center justify-between">
          <div className="flex items-center gap-2 flex-1 md:flex-initial relative">
            <Logo />
            <div className="hidden md:block h-px bg-bg-tertiary ml-4 w-[217px]" />
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
            <Navigation />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">ВХОД</Button>
            <Button variant="primary">РЕГИСТРАЦИЯ</Button>
          </div>

          <div className="md:hidden pr-[3px]">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
