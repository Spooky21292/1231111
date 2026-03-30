import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ContactData, NavItem } from "@/types/home";

type FooterProps = {
  navItems: NavItem[];
  contacts: ContactData;
};

export function Footer({ navItems, contacts }: FooterProps) {
  return (
    <footer className="border-t border-line-200 bg-mist-100/55 py-12">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-ink-950">Atelier Verre</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-950/70">
            Премиальная студия красоты с фокусом на прогнозируемый результат и аккуратный сервис.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-950/70">Навигация</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-950/75 transition hover:text-ink-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-950/70">Контакты</p>
          <p className="mt-4 text-sm text-ink-950/80">{contacts.phone}</p>
          <p className="mt-1 text-sm text-ink-950/80">{contacts.address}</p>
          <p className="mt-4 text-xs text-ink-950/55">© {new Date().getFullYear()} Atelier Verre</p>
        </div>
      </Container>
    </footer>
  );
}
