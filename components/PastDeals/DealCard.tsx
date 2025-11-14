interface DealCardProps {
  pair: string;
  type: string;
  timeAgo: string;
  profit: string;
  goal: string;
  entryDate: string;
}

export default function DealCard({
  pair,
  type,
  timeAgo,
  profit,
  goal,
  entryDate,
}: DealCardProps) {
  return (
    <div
      className="shrink-0 w-[299px] h-[208px] bg-(--bg-tertiary) rounded p-4 relative overflow-hidden deal-card-clip"
      style={{
        backgroundImage: "url(/logo-bg-trade.png)",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="relative h-full z-10 flex flex-col justify-between">
        <div className="flex flex-col">
          <div>
            <h3 className="text-white text-xl font-medium uppercase lending-7 gap-0.5">
              {pair}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white/40 text-sm font-medium lending-4">
              {type}
            </span>
            <span className="text-white/40 text-sm font-medium lending-4">
              ·
            </span>
            <span className="text-white/40 text-sm font-normal  ">
              {timeAgo}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-0.5 mb-2">
            <p className="text-white/40 justify-start text-sm font-medium uppercase leading-4">
              ПРИБЫЛЬ
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-(--color-accent-green) text-3xl font-medium uppercase leading-9">
                {profit}%
              </span>
              <span className="text-green-400 text-2xl">↑</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm font-normal leading-4">
              {goal}
            </span>
            <span className="text-white/80 text-sm  font-normal leading-4 ">
              Дата входа {entryDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
