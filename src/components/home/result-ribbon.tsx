import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { ResultRibbonData } from "@/types/home";

type ResultRibbonProps = {
  data: ResultRibbonData;
};

export function ResultRibbon({ data }: ResultRibbonProps) {
  return (
    <section className="py-8">
      <Container>
        <MotionIn>
          <div className="grid gap-5 rounded-2xl border border-line-200 bg-ink-950 px-6 py-5 text-pearl-50 md:grid-cols-[1fr_2fr_auto] md:items-center">
            <p className="text-sm font-semibold tracking-wide text-pearl-50/80">{data.proof}</p>
            <blockquote className="text-sm leading-relaxed text-pearl-50/95 md:text-base">“{data.quote}”</blockquote>
            <div className="flex items-center justify-between gap-4 md:justify-end">
              <span className="text-xs text-pearl-50/70">{data.author}</span>
              <Link href={data.action.href} className="rounded-lg bg-pearl-50 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-white">
                {data.action.label}
              </Link>
            </div>
          </div>
        </MotionIn>
      </Container>
    </section>
  );
}
