export interface Deal {
  pair: string;
  type: string;
  timeAgo: string;
  profit: string;
  goal: string;
  entryDate: string;
}

export const deals: Deal[] = [
  {
    pair: "NEAR/USDT",
    type: "SPOT",
    timeAgo: "1 мин. назад",
    profit: "58.6206",
    goal: "Цель 4",
    entryDate: "06.10.2022",
  },
  {
    pair: "BTC/USDT",
    type: "SPOT",
    timeAgo: "1 мин. назад",
    profit: "6.02",
    goal: "Цель 3",
    entryDate: "06.10.2022",
  },
  {
    pair: "ETH/USDT",
    type: "SPOT",
    timeAgo: "1 мин. назад",
    profit: "16.3",
    goal: "Цель 4",
    entryDate: "06.10.2022",
  },
  {
    pair: "NEAR/USDT",
    type: "SPOT",
    timeAgo: "1 мин. назад",
    profit: "0.963",
    goal: "Цель 4",
    entryDate: "06.10.2022",
  },
  {
    pair: "SOL/USDT",
    type: "SPOT",
    timeAgo: "2 мин. назад",
    profit: "12.45",
    goal: "Цель 3",
    entryDate: "06.10.2022",
  },
  {
    pair: "DOGE/USDT",
    type: "SPOT",
    timeAgo: "3 мин. назад",
    profit: "8.92",
    goal: "Цель 2",
    entryDate: "06.10.2022",
  },
  {
    pair: "ADA/USDT",
    type: "SPOT",
    timeAgo: "4 мин. назад",
    profit: "24.67",
    goal: "Цель 4",
    entryDate: "06.10.2022",
  },
  {
    pair: "MATIC/USDT",
    type: "SPOT",
    timeAgo: "5 мин. назад",
    profit: "15.38",
    goal: "Цель 3",
    entryDate: "06.10.2022",
  },
  {
    pair: "AVAX/USDT",
    type: "SPOT",
    timeAgo: "6 мин. назад",
    profit: "32.11",
    goal: "Цель 4",
    entryDate: "06.10.2022",
  },
  {
    pair: "DOT/USDT",
    type: "SPOT",
    timeAgo: "7 мин. назад",
    profit: "9.87",
    goal: "Цель 3",
    entryDate: "06.10.2022",
  },
];
