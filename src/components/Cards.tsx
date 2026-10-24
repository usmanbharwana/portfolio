export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mb-8 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-sky-300">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>{text && <p className="mt-3 leading-7 text-slate-400">{text}</p>}</div>;
}
export function Card({ title, description, label }: { title: string; description: string; label?: string }) {
  return <article className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/40"><p className="mb-3 text-xs uppercase tracking-wider text-sky-300">{label || 'Portfolio'}</p><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{description}</p></article>;
}
