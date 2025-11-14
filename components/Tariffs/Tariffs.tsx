"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TariffToggle from "./TariffToggle";
import TariffCard from "./TariffCard";

export default function Tariffs() {
  const [tariffType, setTariffType] = useState<"spot" | "futures">("spot");

  const standardFeatures = [
    "Ручной трейдинг",
    "Автоматическое или полуавтоматическое копирование сделок",
    "Личный кабинет со статистикой",
    "Среднесрочные сделки с уровнями набора портфеля",
  ];

  const vipFeatures = [
    "Ручной трейдинг",
    "Автоматическое или полуавтоматическое копирование сделок",
    "Личный кабинет со статистикой",
    "Краткосрочные, среднесрочные и инвест сделки",
    "Доступ в Vip чат с командой",
    "Наш авторский курс по трейдингу",
  ];

  return (
    <section id="tariffs" className="w-full bg-(--bg-primary) px-4 py-6 md:py-20  flex flex-col items-center mx-auto">
      <div className="flex flex-col md:items-center w-full">
        <div>
          <div className="flex flex-col items-start mb-8 md:mb-12">
            <SectionHeading variant="dark" className="mb-7 md:mb-11">
              ТАРИФЫ
            </SectionHeading>
            <TariffToggle value={tariffType} onChange={setTariffType} />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full">
            <TariffCard
              name="STANDART"
              features={standardFeatures}
              price="$234"
              discount="-35%"
              duration="12 месяцев"
              variant="standard"
            />
            <TariffCard
              name="VIP"
              features={vipFeatures}
              price="$585"
              discount="-35%"
              duration="12 месяцев"
              variant="vip"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
