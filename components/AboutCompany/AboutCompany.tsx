import SectionHeading from "@/components/ui/SectionHeading";
import { InputWithButton } from "@/components/ui/InputWithButton";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function AboutCompany() {
  return (
    <section id="about" className="w-full bg-(--bg-secondary) relative">
      <div className="absolute left-0 -top-6 sm:-top-8 md:-top-10 lg:-top-12 w-[70%] sm:w-[65%] md:w-[55%] lg:w-[50%] h-[52px] sm:h-[70px] md:h-[85px] lg:h-[100px] bg-white rounded stats-clip-path"></div>
      <div className="w-full flex flex-col lg:flex-row min-h-0 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="w-full lg:w-auto lg:min-w-[320px] xl:min-w-[400px] bg-(--bg-secondary) shrink-0 mb-8 sm:mb-10 lg:mb-0">
          <div className="flex flex-col lg:justify-center">
            <SectionHeading
              variant="light"
              className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10"
            >
              О компании
            </SectionHeading>
            <div className="flex flex-col max-w-full lg:max-w-[413px] gap-3 sm:gap-4">
              <p className="text-(--text-light-gray) text-sm sm:text-base font-normal leading-5">
                Мы опытная команда, для которой трейдинг – профессия. TradeBlade
                является авторизованным официальным брокером биржи Binance.
              </p>
              <p className="text-(--text-light-gray) text-sm sm:text-base font-normal leading-5">
                Он представляет пользователям множество преимуществ, таких как
                более високая скорость синхронизации API и возможность создать
                учетную запись Binance через платформу TradeBlade всего в 1
                клик.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end">
          <div className="w-full lg:w-auto max-w-full lg:max-w-none bg-(--bg-tertiary) rounded-lg p-4 sm:p-6 md:p-8 lg:px-12 xl:px-16 lg:pt-8 lg:pb-11 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <div className="text-center">
              <h3 className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl font-medium leading-6 sm:leading-7 mb-2">
                Попробуйте сейчас и получите
              </h3>
              <h3 className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl font-medium leading-6 sm:leading-7">
                5 дней бесплатного пользования
              </h3>
            </div>

            <div className="w-full lg:w-auto flex flex-col lg:hidden gap-3 max-w-full">
              <Input type="email" placeholder="ВАШ E-MAIL" />
              <Button
                variant="primary"
                className="w-full bg-(--button-primary-bg) px-6 py-[11px] text-sm uppercase leading-5 text-dark font-bold"
              >
                ПОПРОБОВАТЬ
              </Button>
            </div>

            <div className="hidden lg:block w-full max-w-full xl:max-w-[500px]">
              <InputWithButton
                placeholder="ВАШ E-MAIL"
                buttonText="ПОПРОБОВАТЬ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
