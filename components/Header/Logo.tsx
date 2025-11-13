import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo-trade.svg"
        alt="TRADE BLADE"
        width={40}
        height={40}
        className="h-auto w-auto"
        priority
      />
    </Link>
  );
}
