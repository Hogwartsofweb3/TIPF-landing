import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ThreePillars from "../components/ThreePillars";
import SimulatedRound from "../components/SimulatedRound";
import VRFEngine from "../components/VRFEngine";
import TokenomicsFlow from "../components/TokenomicsFlow";
import DualPools from "../components/DualPools";
import Motherlode from "../components/Motherlode";
import GuildSection from "../components/GuildSection";
import ConversionOutro from "../components/ConversionOutro";
import LiveFeed from "../components/LiveFeed";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ThreePillars />
      <SimulatedRound />
      <VRFEngine />
      <TokenomicsFlow />
      <DualPools />
      <Motherlode />
      <GuildSection />
      <ConversionOutro />
      <LiveFeed />
    </main>
  );
}
