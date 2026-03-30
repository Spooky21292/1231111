import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { HomePageData } from "@/types/home";

type FinalConversionBandProps = {
  data: HomePageData["finalCta"];
};

export function FinalConversionBand({ data }: FinalConversionBandProps) {
  return (
    <section id="final-cta" className="pb-24 pt-12 md:pt-16">
      <Container>
        <MotionIn className="rounded-3xl bg-ink-950 px-6 py-10 text-pearl-50 md:px-10 md:py-12">
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl">{data.headline}</h2>

          <ul className="mt-6 grid gap-2 md:grid-cols-3">
            {data.bullets.map((bullet) => (
              <li key={bullet} className="rounded-xl border border-pearl-50/20 bg-pearl-50/5 px-4 py-3 text-sm text-pearl-50/90">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={data.primary.href} className="rounded-xl bg-pearl-50 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-white">
              {data.primary.label}
            </Link>
            {data.secondary.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="rounded-xl border border-pearl-50/30 px-6 py-3.5 text-sm font-semibold text-pearl-50 transition hover:bg-pearl-50/10"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </MotionIn>
      </Container>
    </section>
  );
}
