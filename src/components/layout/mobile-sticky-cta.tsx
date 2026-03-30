import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex gap-2 rounded-2xl border border-line-200 bg-pearl-50 p-2 shadow-card md:hidden">
      <Link href="tel:+74951234567" className="flex-1 rounded-lg border border-line-200 px-3 py-2 text-center text-sm font-semibold text-ink-950">
        Позвонить
      </Link>
      <Link href="#final-cta" className="flex-1 rounded-lg bg-rosewood-600 px-3 py-2 text-center text-sm font-semibold text-white">
        Записаться
      </Link>
    </div>
  );
}
