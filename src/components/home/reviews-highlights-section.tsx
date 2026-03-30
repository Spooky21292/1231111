import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Review } from "@/types/home";

type ReviewsHighlightsSectionProps = {
  items: Review[];
};

export function ReviewsHighlightsSection({ items }: ReviewsHighlightsSectionProps) {
  return (
    <section id="reviews" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          title="Клиенты возвращаются, потому что результат предсказуем"
          description="Отмечают не только качество работы, но и спокойный сервис: вовремя, понятно, без внезапных доплат."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((review, index) => (
            <MotionIn key={review.id} delay={index * 0.05}>
              <article className="h-full rounded-3xl border border-line-200 bg-pearl-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rosewood-500">{review.theme}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-950/85">“{review.text}”</p>
                <p className="mt-5 text-sm font-semibold text-ink-950">{review.author}</p>
                <p className="text-xs text-ink-950/60">{review.serviceType}</p>
              </article>
            </MotionIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
