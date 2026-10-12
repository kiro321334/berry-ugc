import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { PLANS } from "@/lib/data";
import { WHATSAPP } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="px-page pb-12">
      <SectionHeading id="pricing-title" title="باقات الأسعار" sub="استثمار مباشر لتحسين أداء حملاتك الإعلانية" />
      <ul className="mt-6 space-y-5">
        {PLANS.map((p) => (
          <li key={p.id}>
            <article className={`relative rounded-[28px] bg-white p-5 shadow-sm ${
              p.featured ? "before:absolute before:inset-x-5 before:-top-1.5 before:h-3 before:rounded-t-2xl before:bg-brand" : ""}`}>
              <div className="relative flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${p.featured ? "bg-brand text-white" : "bg-pill text-ink"}`}>{p.pill}</span>
                <p className="flex items-baseline gap-1">
                  <span className={`font-extrabold text-brand ${p.per ? "text-[22px]" : "text-[26px]"}`}>{p.price}</span>
                  {p.per && <span className="text-[12px] text-muted">{p.per}</span>}
                </p>
              </div>
              <h3 className="relative mt-3 text-[18px] font-extrabold text-ink">{p.title}</h3>
              <ul className="mt-3 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[14px] leading-[1.6] text-muted">
                    <Icon name="tick" size={14} className="mt-1.5 shrink-0 text-brand" />{it}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(p.msg)}`} target="_blank" rel="noopener noreferrer"
                className={`mt-6 flex items-center justify-center rounded-full py-4 text-[14px] font-extrabold ${
                  p.featured ? "bg-brand text-white shadow-lg shadow-brand/30" : "bg-pill text-ink"}`}>
                {p.cta}
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
