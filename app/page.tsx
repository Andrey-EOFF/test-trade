import Baner from "@/components/Baner/Baner";
import Stats from "@/components/Stats/Stats";
import PastDeals from "@/components/PastDeals/PastDeals";
import AboutCompany from "@/components/AboutCompany/AboutCompany";

export default function Home() {
  return (
    <main>
      <Baner />
      <Stats />
      {/* <div className="-mr-4 md:-mr-20"> */}
      <PastDeals />
      {/* </div> */}
      <AboutCompany />
    </main>
  );
}
