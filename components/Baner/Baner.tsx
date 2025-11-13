"use client";

import { InputWithButton } from "@/components/ui/InputWithButton";
import Image from "next/image";

export default function Baner() {
  return (
    <section className="w-full pt-10 pb-15 md:pb-49 md:pt-40 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          {/* Ліва частина - Текст та форма */}
          <div className="flex-1 w-full md:w-auto">
            {/* Торгові приклади (для мобільних) */}
            <div className="md:hidden mb-8 relative h-[134px]">
              <div className=" w-44 h-auto border-2 border-dashed border-(--text-dark-accent) rounded bg-transparent">
                <div className="p-2.5 h-[108px] flex flex-col justify-between">
                  <p className="text-(--text-dark-accent) text-xl font-medium uppercase leading-7">
                    ETH/USDT
                  </p>
                  <p className="text-(--text-dark-accent) text-xs font-normal leading-4 mb-5">
                    Short
                  </p>
                  <p className="text-(--text-dark-accent) text-xl font-medium uppercase leading-7">
                    +141%
                  </p>
                </div>
              </div>
              <div className="absolute left-30 top-10 w-44 h-auto bg-(--bg-indigo) rounded z-10">
                <div className="p-2.5 h-full flex flex-col justify-between">
                  <div className="text-white text-xl font-medium uppercase leading-7">
                    ETH/USDT
                  </div>
                  <div className="text-white/70 text-xs font-normal leading-4 mb-5">
                    Short
                  </div>
                  <div className="text-white text-xl font-medium uppercase leading-7">
                    +116%
                  </div>
                </div>
              </div>
            </div>

            {/* Заголовок */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-10 mb-3 md:leading-19 md:w-[630px] md:mr-[128px] ">
              МОМЕНТАЛЬНО
              <br />
              КОПИРУЙ СДЕЛКИ
              <br />
              ПРОФИ ТРЕЙДЕРОВ
            </h1>

            {/* Підзаголовок */}
            <p className="text-(--text-dark-description) text-base font-normal leading-5 mb-6 max-w-xl">
              Начни копировать сделки с успешной командой профессиональных
              трейдеров в автоматическом режиме.
            </p>

            {/* Форма */}
            <div className="mb-3">
              <InputWithButton placeholder="ВАШ Е-МАIL" buttonText="НАЧАТЬ" />
            </div>

            {/* Текст про безкоштовний період */}
            <p className="text-white/30 text-sm leading-5">
              5 дней бесплатного пользования
            </p>
          </div>

          {/* Права частина - Торгові картки (для десктопу) */}
          <div className="hidden md:block flex-1">
            <Image
              src="/baner-placeholder.png"
              alt="Trading cards"
              className="w-auto h-[209px]"
              width={469}
              height={209}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
