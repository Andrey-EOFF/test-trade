import SectionHeading from "@/components/ui/SectionHeading";

export default function Stats() {
  return (
    <section className="w-full bg-(--bg-secondary) relative ">
      <div className="absolute left-0 -top-6 md:-top-12 w-[70%] md:w-[50%] h-[82px] md:h-[100px] bg-white rounded -z-10 stats-clip-path"></div>
      <div className="w-full flex flex-col md:flex-row min-h-0 px-4 py-6 md:py-12 lg:py-16 md:px-20 ">
        <div className="w-full md:w-auto md:min-w-[320px] lg:min-w-[400px] bg-(--bg-secondary)hrink-0">
          <div className="md:h-full md:flex md:flex-col md:justify-center mb-10 md:mb-0">
            <SectionHeading className="text-(--text-dark-heading)">
              ЦИФРЫ
            </SectionHeading>
            <p className="text-(--text-light-muted) text-sm md:text-base lg:text-lg font-normal leading-5">
              Сентябрь 2022
            </p>
          </div>
        </div>

        <div className="w-full md:flex-1 bg-(--bg-secondary) ">
          <div className="w-full h-full">
            {/* Контейнер метрик - grid для правильного розташування на десктопі */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-8 md:items-start">
              {/* На десктопі: всі три метрики в один рядок */}
              <div className="flex justify-between md:contents">
                {/* Метрика 1: Торговой прибыли */}
                <div className="flex flex-col">
                  <div className="text-(--text-light-stats) text-xs md:text-sm lg:text-base font-normal uppercase leading-relaxed mb-1 md:mb-2 ">
                    <div className="flex flex-col md:flex-row md:gap-1">
                      <span>ТОРГОВОЙ</span>
                      <span>ПРИБЫЛИ</span>
                    </div>
                  </div>
                  <p className="text-(--text-light-accent) text-4xl md:text-6xl font-medium uppercase leading-10">
                    2756%
                  </p>
                </div>

                {/* Метрика 2: Фьючерсных и спотовых сделок */}
                <div className="flex flex-col">
                  <p className="text-(--text-light-gray) text-xs md:text-sm lg:text-base font-normal uppercase leading-relaxed mb-1 md:mb-2 ">
                    <div className="flex flex-col md:flex-row md:gap-1">
                      <span>ФЬЮЧЕРСНЫХ</span>
                      <span>И СПОТОВЫХ СДЕЛОК</span>
                    </div>
                  </p>
                  <p className="text-(--text-light-accent) text-4xl md:text-6xl font-medium uppercase leading-10">
                    67
                  </p>
                </div>
              </div>

              {/* Метрика 3: Прибыль подписчиков */}
              <div className="flex flex-col">
                <p className="text-(--text-light-gray) text-xs md:text-sm lg:text-base font-normal uppercase leading-relaxed mb-1 md:mb-2 ">
                  <div className="flex flex-col md:flex-row md:gap-1">
                    <span>ПРИБЫЛЬ</span>
                    <span>ПОДПИСЧИКОВ</span>
                  </div>
                </p>
                <p className="text-(--text-light-accent) text-4xl md:text-6xl font-medium uppercase leading-10">
                  375000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
