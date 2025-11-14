import { InputWithButton } from "@/components/ui/InputWithButton";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function TrialBanner() {
  return (
    <section className="w-full bg-(--bg-tertiary) px-4 py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-auto flex-1">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center md:text-left">
              Начните прямо сейчас с бесплатным
              <br />
              5-и дневным пробным периодом!
            </h2>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
            <div className="hidden md:block">
              <InputWithButton
                placeholder="ВАШ E-MAIL"
                buttonText="ЗАРЕГИСТРИРОВАТЬСЯ"
              />
            </div>

            <div className="flex flex-col md:hidden gap-3 w-full">
              <Input type="email" placeholder="ВАШ E-MAIL" />
              <Button
                variant="primary"
                className="w-full bg-(--button-primary-bg) px-6 py-[11px] text-sm uppercase leading-5 text-(--color-dark) font-bold"
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

