"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function DevelopmentMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleShowMessage = () => {
      setIsVisible(true);
    };

    window.addEventListener("show-development-message", handleShowMessage);
    return () => {
      window.removeEventListener("show-development-message", handleShowMessage);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-(--bg-tertiary) text-white px-6 py-4 rounded-lg shadow-lg max-w-md mx-4 flex items-center gap-4 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]">
      <div className="flex-1">
        <p className="text-sm font-medium">
          Мы еще разрабатываем этот раздел и он будет доступен совсем скоро.
          Пока что вы можете наслаждаться другим функционалом.
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white/70 hover:text-white transition-colors shrink-0"
        aria-label="Закрити"
      >
        <X size={20} />
      </button>
    </div>
  );
}

export function showDevelopmentMessage() {
  const event = new CustomEvent("show-development-message");
  window.dispatchEvent(event);
}
