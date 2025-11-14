"use client";

import { InputWithButton } from "@/components/ui/InputWithButton";
import { motion } from "framer-motion";

export default function Baner() {
  return (
    <section className="w-full pt-10 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-40 pb-15 sm:pb-20 md:pb-32 lg:pb-40 xl:pb-49 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="flex-1 w-full md:w-auto">
            <div className="md:hidden mb-6 sm:mb-8 relative h-[134px]">
              <motion.div
                className="w-44 h-auto rounded bg-transparent relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 176 134"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible" }}
                >
                  <rect
                    x="1"
                    y="1"
                    width="174"
                    height="132"
                    rx="8"
                    fill="none"
                    stroke="#4B3DBA"
                    strokeWidth="2"
                    strokeDasharray="12 12"
                  />
                </svg>
                <div className="p-2.5 h-[108px] flex flex-col justify-between items-start relative z-10">
                  <p className="text-(--text-dark-accent) text-xl font-medium uppercase leading-7">
                    ETH/USDT
                  </p>
                  <p className="text-(--text-dark-accent) text-xs font-normal text-left leading-4 mb-5">
                    Short
                  </p>
                  <p className="text-(--text-dark-accent) text-xl font-medium uppercase text-left leading-7">
                    +141%
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="absolute left-30 top-10 w-44 h-auto bg-(--bg-indigo) rounded z-10"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                <div className="p-2.5 h-full flex flex-col justify-between items-start">
                  <div className="text-white text-xl font-medium uppercase leading-7">
                    ETH/USDT
                  </div>
                  <div className="text-white/70 text-xs font-normal text-left leading-4 mb-5">
                    Short
                  </div>
                  <div className="text-white text-xl font-medium uppercase text-left leading-7">
                    +116%
                  </div>
                </div>
              </motion.div>
            </div>

            <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-10 sm:leading-12 md:leading-14 lg:leading-16 xl:leading-19 mb-3 md:mb-4 md:w-full lg:w-[550px] xl:w-[630px] md:mr-0 lg:mr-8 xl:mr-[128px]">
              МОМЕНТАЛЬНО
              <br />
              КОПИРУЙ СДЕЛКИ
              <br />
              ПРОФИ ТРЕЙДЕРОВ
            </h1>

            <p className="text-(--text-dark-description) text-sm sm:text-base font-normal leading-5 mb-4 sm:mb-5 md:mb-6 max-w-xl">
              Начни копировать сделки с успешной командой профессиональных
              трейдеров в автоматическом режиме.
            </p>

            <div className="mb-3">
              <InputWithButton placeholder="ВАШ Е-МАIL" buttonText="НАЧАТЬ" />
            </div>

            <p className="text-white/30 text-xs sm:text-sm leading-5">
              5 дней бесплатного пользования
            </p>
          </div>

          <div className="hidden md:flex flex-1 min-w-0 justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] md:max-w-[420px] lg:max-w-[469px] h-[180px] md:h-[190px] lg:h-[200px] xl:h-[209px] mx-auto lg:mx-0">
              <motion.div
                className="absolute top-0 left-0 w-[200px] md:w-[220px] lg:w-[240px] h-[150px] md:h-[160px] lg:h-[170px] rounded-lg bg-transparent"
                initial={{ x: -100, y: -100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 240 170"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible" }}
                >
                  <rect
                    x="1"
                    y="1"
                    width="238"
                    height="168"
                    rx="8"
                    fill="none"
                    stroke="#4B3DBA"
                    strokeWidth="2"
                    strokeDasharray="12 12"
                  />
                </svg>
                <div className="p-3 md:p-4 h-full flex flex-col justify-between items-start relative z-10">
                  <p className="text-[#4B3DBA] text-2xl md:text-3xl font-medium uppercase leading-tight">
                    ETH/USDT
                  </p>
                  <p className="text-[#4B3DBA] text-sm md:text-base font-normal text-left leading-4 mb-2">
                    Short
                  </p>
                  <p className="text-[#4B3DBA] text-2xl md:text-3xl font-medium uppercase text-left leading-tight">
                    +141%
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="absolute top-12 md:top-14 left-[140px] md:left-[140px] lg:left-[168px] w-[200px] md:w-[220px] lg:w-[240px] h-[150px] md:h-[160px] lg:h-[170px] bg-[#6A54FF] rounded-lg z-10"
                initial={{ x: 100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                <div className="p-3 md:p-4 h-full flex flex-col justify-between items-start">
                  <div className="text-white text-2xl md:text-3xl font-medium uppercase leading-tight">
                    ETH/USDT
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-normal text-left leading-4 mb-2">
                    Short
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-medium uppercase text-left leading-tight">
                    +116%
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
