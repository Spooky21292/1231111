export type NavItem = { label: string; href: string };

export type Cta = { label: string; href: string };

export type HeroData = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: Cta;
  secondaryActions: Cta[];
  microTrust: { rating: string; reviews: string; years: string };
  image: { src: string; alt: string };
};

export type TrustMetric = { label: string; value: string; note?: string };

export type ResultRibbonData = {
  proof: string;
  quote: string;
  author: string;
  action: Cta;
};

export type ServiceLensItem = {
  id: string;
  serviceName: string;
  bestFor: string;
  typicalTime: string;
  fromPrice: string;
  masterType: string;
  cta: Cta;
};

export type PortfolioItem = {
  id: string;
  category: string;
  resultNote: string;
  image: { src: string; alt: string };
};

export type Master = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  focus: string[];
  image: { src: string; alt: string };
  cta: Cta;
};

export type PricingRow = {
  service: string;
  fromPrice: string;
  duration: string;
};

export type Review = {
  id: string;
  theme: string;
  author: string;
  text: string;
  serviceType: string;
};

export type ContactData = {
  phone: string;
  address: string;
  landmark: string;
  mapHref: string;
  hours: { day: string; hours: string }[];
  channels: Cta[];
};

export type HomePageData = {
  nav: NavItem[];
  hero: HeroData;
  trustMetrics: TrustMetric[];
  resultRibbon: ResultRibbonData;
  serviceLens: ServiceLensItem[];
  portfolio: PortfolioItem[];
  masters: Master[];
  pricing: PricingRow[];
  reviews: Review[];
  contacts: ContactData;
  finalCta: { headline: string; bullets: string[]; primary: Cta; secondary: Cta[] };
};
