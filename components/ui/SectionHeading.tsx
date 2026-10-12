export default function SectionHeading({ id, title, sub, dot = false }: { id: string; title: string; sub: string; dot?: boolean }) {
  return (
    <header>
      <h2 id={id} className="flex items-center gap-2 text-[22px] font-extrabold leading-tight text-ink">
        {dot && <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand" />}
        {title}
      </h2>
      <p className="mt-1 text-[14px] text-muted">{sub}</p>
    </header>
  );
}
