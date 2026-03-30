import { ContactAccessSection } from "@/components/home/contact-access-section";
import { FinalConversionBand } from "@/components/home/final-conversion-band";
import { HeroSplitSection } from "@/components/home/hero-split-section";
import { MastersMatchSection } from "@/components/home/masters-match-section";
import { PortfolioHighlightsSection } from "@/components/home/portfolio-highlights-section";
import { PricingSnapshotSection } from "@/components/home/pricing-snapshot-section";
import { ResultRibbon } from "@/components/home/result-ribbon";
import { ReviewsHighlightsSection } from "@/components/home/reviews-highlights-section";
import { ServiceOutcomeLensSection } from "@/components/home/service-outcome-lens-section";
import { TrustMetricsStrip } from "@/components/home/trust-metrics-strip";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { homeData } from "@/data/home";

export default function Home() {
  return (
    <>
      <Header navItems={homeData.nav} />
      <main>
        <HeroSplitSection data={homeData.hero} />
        <TrustMetricsStrip metrics={homeData.trustMetrics} />
        <ResultRibbon data={homeData.resultRibbon} />
        <ServiceOutcomeLensSection items={homeData.serviceLens} />
        <PortfolioHighlightsSection items={homeData.portfolio} />
        <MastersMatchSection items={homeData.masters} />
        <PricingSnapshotSection items={homeData.pricing} />
        <ReviewsHighlightsSection items={homeData.reviews} />
        <ContactAccessSection data={homeData.contacts} />
        <FinalConversionBand data={homeData.finalCta} />
      </main>
      <Footer navItems={homeData.nav} contacts={homeData.contacts} />
      <MobileStickyCta />
    </>
  );
}
