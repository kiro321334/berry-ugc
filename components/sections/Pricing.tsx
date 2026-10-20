import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING, CURRENCY } from "@/lib/data";

function Check({ featured }: { featured: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`mt-0.5 h-5 w-5 shrink-0 ${featured ? "text-white" : "text-brand"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-4 px-page pb-10">
      <SectionHeading
        id="pricing-title"
        dot
        title="الأسعار"
        sub="أسعار واضحة وبدون مفاجآت"
      />

      <ul className="mt-6 grid grid-cols-1 gap-4">
        {PRICING.map((p) => (
          <li key={p.id}>
            <article
              className={`relative rounded-[28px] p-6 ${
                p.featured ? "bg-brown text-white shadow-lg" : "bg-white text-ink shadow-sm"
              }`}
            >
              {"badge" in p && p.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand px-4 py-1 text-[11px] font-extrabold text-white">
                  {p.badge}
                </span>
              )}

              <h3 className="text-[18px] font-extrabold">{p.title}</h3>

              <div className="mt-4 flex items-baseline gap-1" dir="rtl">
                {"custom" in p ? (
                  <span className="text-[26px] font-extrabold">{p.custom}</span>
                ) : (
                  <>
                    <span dir="ltr" className="text-[40px] font-extrabold leading-none">
                      {"to" in p ? `${p.from}–${p.to}` : p.from}
                    </span>
                    <span className="text-[16px] font-bold opacity-80">{CURRENCY}</span>
                  </>
                )}
              </div>
              <p className={`mt-2 text-[12px] ${p.featured ? "text-white/70" : "text-muted"}`}>
                {p.note}
              </p>

              <hr className={`my-5 ${p.featured ? "border-white/15" : "border-black/5"}`} />

              <ul className="space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[14px] font-semibold">
                    <Check featured={p.featured} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 block rounded-full py-3 text-center text-[14px] font-extrabold ${
                  p.featured ? "bg-white text-brown" : "bg-pill text-ink"
                }`}
              >
                {p.cta}
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}