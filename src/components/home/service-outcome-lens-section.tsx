import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceLensItem } from "@/types/home";

type ServiceOutcomeLensSectionProps = {
  items: ServiceLensItem[];
};

export function ServiceOutcomeLensSection({ items }: ServiceOutcomeLensSectionProps) {
  return (
    <section id="services" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Service-to-Outcome Lens"
          title="Выберите услугу по желаемому результату"
          description="Каждая карточка показывает, для кого подходит услуга, сколько длится визит и с какого бюджета лучше планировать запись."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <MotionIn key={item.id} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-line-200 bg-pearl-50 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rosewood-500">{item.masterType}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950">{item.serviceName}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-950/75">{item.bestFor}</p>

                <dl className="mt-6 space-y-2 text-sm">
                  <div className="flex items-center justify-between border-b border-line-200/70 pb-2">
                    <dt className="text-ink-950/60">Время</dt>
                    <dd className="font-semibold text-ink-950">{item.typicalTime}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-950/60">Стоимость</dt>
                    <dd className="font-semibold text-ink-950">{item.fromPrice}</dd>
                  </div>
                </dl>

                <Link
                  href={item.cta.href}
                  className="mt-7 inline-flex rounded-xl bg-rosewood-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rosewood-500"
                >
                  {item.cta.label}
                </Link>
              </article>
            </MotionIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
