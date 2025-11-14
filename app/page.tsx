import Baner from "@/components/Baner/Baner";
import Stats from "@/components/Stats/Stats";
import PastDeals from "@/components/PastDeals/PastDeals";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Tariffs from "@/components/Tariffs/Tariffs";
import FAQ from "@/components/FAQ/FAQ";
import TrialBanner from "@/components/TrialBanner/TrialBanner";

export default function Home() {
  return (
    <main>
      <Baner />
      <Stats />
      <PastDeals />
      <AboutCompany />
      <Tariffs />
      <FAQ />
      <TrialBanner />
    </main>
  );
}
