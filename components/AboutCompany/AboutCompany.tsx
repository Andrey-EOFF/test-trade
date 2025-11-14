import SectionHeading from "@/components/ui/SectionHeading";
import { InputWithButton } from "@/components/ui/InputWithButton";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function AboutCompany() {
  return (
    <section className="w-full bg-(--bg-secondary) relative ">
      <div className="absolute left-0 -top-6 md:-top-12 w-[70%] md:w-[50%] h-[52px] md:h-[100px] bg-white rounded  stats-clip-path"></div>
      <div className="w-full flex flex-col md:flex-row min-h-0 px-4 py-6 md:py-12 lg:py-16 md:px-20 ">
        <div className="w-full md:w-auto md:min-w-[320px] lg:min-w-[400px] bg-(--bg-secondary)hrink-0">
          <div className="flex flex-col md:justify-center mb-10 md:mb-0">
            <SectionHeading variant="light" className="mb-5 md:mb-10">
              О компании
            </SectionHeading>
            <div className="flex flex-col max-w-[413px] gap-4">
              <p className="text-(--text-light-gray) font-normal leading-5">
                Мы опытная команда, для которой трейдинг – профессия. TradeBlade
                является авторизованным официальным брокером биржи Binance.
              </p>
              <p className="text-(--text-light-gray) font-normal leading-5">
                Он представляет пользователям множество преимуществ, таких как
                более високая скорость синхронизации API и возможность создать
                учетную запись Binance через платформу TradeBlade всего в 1
                клик.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto md:flex-1 flex items-center justify-center md:justify-end">
          <div className="w-full md:w-auto bg-(--bg-tertiary) rounded-lg p-4 md:px-16 md:pt-8 md:pb-11  flex flex-col items-center gap-5 md:gap-8">
            <div className="text-center">
              <h3 className="text-white text-xl md:text-2xl font-medium leading-7 mb-2">
                Попробуйте сейчас и получите
              </h3>
              <h3 className="text-white text-xl md:text-2xl font-medium leading-7">
                5 дней бесплатного пользования
              </h3>
            </div>

            <div className="w-full md:w-auto flex flex-col md:hidden gap-3">
              <Input type="email" placeholder="ВАШ E-MAIL" />
              <Button
                variant="primary"
                className="w-full bg-(--button-primary-bg) px-6 py-[11px] text-sm uppercase leading-5 text-dark font-bold"
              >
                ПОПРОБОВАТЬ
              </Button>
            </div>

            <div className="hidden md:block">
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
