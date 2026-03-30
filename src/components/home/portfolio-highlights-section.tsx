import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioItem } from "@/types/home";

type PortfolioHighlightsSectionProps = {
  items: PortfolioItem[];
};

export function PortfolioHighlightsSection({ items }: PortfolioHighlightsSectionProps) {
  return (
    <section id="portfolio" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Результаты"
          title="Реальные работы с понятной задачей и финальным эффектом"
          description="Показываем не случайные фото, а конкретные кейсы: что хотели получить и как выглядит результат после работы мастера."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <MotionIn key={item.id} delay={index * 0.06}>
              <article className="overflow-hidden rounded-3xl border border-line-200 bg-pearl-50">
                <div className="relative h-80 w-full">
                  <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rosewood-500">{item.category}</p>
                  <p className="mt-2 text-sm text-ink-950/80">{item.resultNote}</p>
                </div>
              </article>
            </MotionIn>
          ))}
        </div>

        <div className="mt-8">
          <Link href="#final-cta" className="text-sm font-semibold text-ink-950 underline underline-offset-4 transition hover:text-rosewood-600">
            Хочу похожий результат
          </Link>
        </div>
      </Container>
    </section>
  );
}
