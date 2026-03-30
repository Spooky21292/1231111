import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { TrustMetric } from "@/types/home";

type TrustMetricsStripProps = {
  metrics: TrustMetric[];
};

export function TrustMetricsStrip({ metrics }: TrustMetricsStripProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <MotionIn key={metric.label} delay={index * 0.05}>
              <article className="rounded-2xl border border-line-200 bg-mist-100/50 p-6">
                <p className="font-display text-3xl font-bold text-ink-950">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-ink-950/85">{metric.label}</p>
                {metric.note ? <p className="mt-1 text-sm text-ink-950/60">{metric.note}</p> : null}
              </article>
            </MotionIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
