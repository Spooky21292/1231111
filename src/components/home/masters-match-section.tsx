import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Master } from "@/types/home";

type MastersMatchSectionProps = {
  items: Master[];
};

export function MastersMatchSection({ items }: MastersMatchSectionProps) {
  return (
    <section id="masters" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Мастера"
          title="Подбираем специалиста под вашу задачу, а не наоборот"
          description="Каждый мастер ведет конкретный профиль задач. Это снижает риск неудачного результата и экономит ваше время."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {items.map((master, index) => (
            <MotionIn key={master.id} delay={index * 0.08}>
              <article className="grid gap-5 rounded-3xl border border-line-200 bg-pearl-50 p-5 sm:grid-cols-[160px_1fr]">
                <div className="relative h-44 overflow-hidden rounded-2xl">
                  <Image src={master.image.src} alt={master.image.alt} fill className="object-cover" sizes="160px" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink-950">{master.name}</h3>
                  <p className="mt-1 text-sm text-ink-950/70">
                    {master.specialty} • {master.experience}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {master.focus.map((focus) => (
                      <span key={focus} className="rounded-full bg-rosewood-100 px-3 py-1 text-xs font-medium text-rosewood-600">
                        {focus}
                      </span>
                    ))}
                  </div>
                  <Link href={master.cta.href} className="mt-5 inline-flex text-sm font-semibold text-ink-950 underline underline-offset-4 hover:text-rosewood-600">
                    {master.cta.label}
                  </Link>
                </div>
              </article>
            </MotionIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
