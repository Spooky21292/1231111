import Link from "next/link";
import { NavItem } from "@/types/home";
import { Container } from "@/components/ui/container";

type HeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200/60 bg-pearl-50/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink-950">
          Atelier Verre
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink-950/75 transition hover:text-ink-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#final-cta"
          className="rounded-xl bg-rosewood-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rosewood-500"
        >
          Записаться
        </Link>
      </Container>
    </header>
  );
}
