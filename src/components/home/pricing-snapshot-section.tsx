import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingRow } from "@/types/home";

type PricingSnapshotSectionProps = {
  items: PricingRow[];
};

export function PricingSnapshotSection({ items }: PricingSnapshotSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Цены"
          title="Стоимость понятна до записи"
          description="Показываем базовый диапазон заранее. Перед визитом уточняем детали, которые могут повлиять на финальную цену."
        />

        <MotionIn className="mt-10 overflow-hidden rounded-3xl border border-line-200 bg-pearl-50">
          <table className="w-full text-left">
            <thead className="bg-mist-100/70 text-xs uppercase tracking-[0.12em] text-ink-950/60">
              <tr>
                <th className="px-6 py-4 font-semibold">Услуга</th>
                <th className="px-6 py-4 font-semibold">От</th>
                <th className="px-6 py-4 font-semibold">Время</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.service} className="border-t border-line-200/80 text-sm text-ink-950/85">
                  <td className="px-6 py-4">{item.service}</td>
                  <td className="px-6 py-4 font-semibold">{item.fromPrice}</td>
                  <td className="px-6 py-4">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </MotionIn>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-ink-950/70">Финальная цена зависит от длины, плотности и сложности задачи.</p>
          <Link href="#final-cta" className="font-semibold text-ink-950 underline underline-offset-4 hover:text-rosewood-600">
            Уточнить стоимость заранее
          </Link>
        </div>
      </Container>
    </section>
  );
}
