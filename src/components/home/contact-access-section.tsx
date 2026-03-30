import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MotionIn } from "@/components/ui/motion-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactData } from "@/types/home";

type ContactAccessSectionProps = {
  data: ContactData;
};

export function ContactAccessSection({ data }: ContactAccessSectionProps) {
  return (
    <section id="contacts" className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Контакты"
          title="Удобно добраться и легко связаться"
          description="Если вам удобнее написать, отвечаем в мессенджере в среднем за 2 минуты в рабочие часы."
        />

        <MotionIn className="mt-10 grid gap-5 rounded-3xl border border-line-200 bg-pearl-50 p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-rosewood-600" />
              <div>
                <p className="text-sm font-semibold text-ink-950">{data.phone}</p>
                <p className="text-sm text-ink-950/70">Ежедневно в рабочие часы</p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-rosewood-600" />
              <div>
                <p className="text-sm font-semibold text-ink-950">{data.address}</p>
                <p className="text-sm text-ink-950/70">{data.landmark}</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {data.hours.map((item) => (
                <div key={item.day} className="flex max-w-xs items-center justify-between text-sm text-ink-950/80">
                  <span>{item.day}</span>
                  <span className="font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.channels.map((channel) => (
                <Link
                  key={channel.label}
                  href={channel.href}
                  className="rounded-xl border border-line-200 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-mist-100"
                >
                  {channel.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line-200 bg-mist-100/70 p-6">
            <p className="text-sm font-semibold text-ink-950">Как добраться</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-950/70">
              Находимся в центральном районе. Если едете на машине, рядом есть платная парковка. На метро — 5 минут пешком.
            </p>
            <Link
              href={data.mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-lg bg-ink-950 px-4 py-2.5 text-sm font-semibold text-pearl-50 transition hover:bg-ink-950/90"
            >
              Открыть карту
            </Link>
          </div>
        </MotionIn>
      </Container>
    </section>
  );
}
