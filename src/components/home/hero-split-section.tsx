import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { HeroData } from "@/types/home";

type HeroSplitSectionProps = {
  data: HeroData;
};

export function HeroSplitSection({ data }: HeroSplitSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <MotionIn className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-rosewood-500">{data.eyebrow}</p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-ink-950 md:text-5xl lg:text-[56px]">
              {data.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-950/75 md:text-lg">{data.subheadline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={data.primaryCta.href} className="rounded-xl bg-rosewood-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-rosewood-500">
                {data.primaryCta.label}
              </Link>
              {data.secondaryActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="rounded-xl border border-line-200 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-mist-100"
                >
                  {action.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 border-l-2 border-rosewood-100 pl-5 text-sm text-ink-950/80">
              <span>{data.microTrust.rating} рейтинг</span>
              <span>{data.microTrust.reviews}</span>
              <span>{data.microTrust.years} стабильной работы</span>
            </div>
          </MotionIn>

          <MotionIn className="relative overflow-hidden rounded-[28px] border border-line-200 lg:col-span-5" delay={0.1}>
            <Image src={data.image.src} alt={data.image.alt} width={780} height={960} className="h-[520px] w-full object-cover" priority />
          </MotionIn>
        </div>
      </Container>
    </section>
  );
}
