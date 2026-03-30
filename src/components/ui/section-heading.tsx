type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-rosewood-500">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-ink-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-ink-950/75 md:text-lg">{description}</p> : null}
    </div>
  );
}
