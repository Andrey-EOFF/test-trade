import { cn } from "@/lib/utils";

interface TariffCardProps {
  name: string;
  features: string[];
  price: string;
  discount: string;
  duration: string;
  variant?: "standard" | "vip";
}

export default function TariffCard({
  name,
  features,
  price,
  discount,
  duration,
  variant = "standard",
}: TariffCardProps) {
  const isVip = variant === "vip";

  return (
    <div
      className={cn(
        "w-full min-h-[450px] md:w-[413px] md:h-[556px] rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-500 overflow-hidden p-4 md:p-6 flex flex-col",
        isVip ? "bg-(--bg-tertiary)" : "bg-transparent"
      )}
    >
      <h3 className="text-white text-xl md:text-2xl font-medium uppercase leading-7 md:leading-12 mb-6 md:mb-12">
        {name}
      </h3>

      <div className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-4 mb-8 md:mb-0">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M16.6667 5L7.50004 14.1667L3.33337 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-base font-normal leading-5">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex justify-between items-center gap-4 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-white text-3xl md:text-4xl font-bold">
                {price}
              </span>
              <span className="text-(--color-accent-green) text-sm md:text-base font-normal">
                {discount}
              </span>
            </div>
            <button className="bg-gray-700/50 hover:bg-gray-700/70 text-white text-sm font-normal px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
              <span>{duration}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button className="w-full bg-(--color-cyan) text-dark font-bold text-base uppercase px-6 py-4 rounded-lg mb-2 hover:bg-(--color-cyan)/90 transition-colors">
              ПОПРОБОВАТЬ
            </button>
            <p className="text-white/70 text-sm font-normal">
              5 дней бесплатно
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
