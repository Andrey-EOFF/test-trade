"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-white hover:text-[#57E0FF] transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={32} />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-(--bg-tertiary) transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-2.5 mb-8">
              <button
                onClick={closeMenu}
                className=" text-white hover:text-[#57E0FF] transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col justify-between flex-1 px-4 pb-4">
              <nav className="flex flex-col gap-8 flex-1">
                <Navigation className="flex flex-col" onLinkClick={closeMenu} />
              </nav>
              <div className="flex md:flex-col md:ml-[82px] gap-4 mt-auto">
                <Button
                  variant="primary"
                  onClick={closeMenu}
                  className="w-full"
                >
                  РЕГИСТРАЦИЯ
                </Button>
                <Button
                  variant="outline"
                  onClick={closeMenu}
                  className="w-full"
                >
                  ВОЙТИ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
