import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { RESULTS } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" aria-labelledby="results-title" className="px-page pb-12 pt-6">
      <SectionHeading id="results-title" title="النتائج بالأرقام" sub="تأثير مباشر على مؤشرات الأداء التسويقي للعملاء" />
      <ul className="mt-6 divide-y divide-brown/10 rounded-[28px] bg-peach px-5 py-3">
        {RESULTS.map((r) => (
          <li key={r.label} className="flex items-center gap-4 py-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand">
              <Icon name={r.icon} size={22} />
            </span>
            <div className="flex-1">
              <p className="text-[28px] font-extrabold leading-none text-brand"><bdi dir="ltr">{r.num}</bdi>{r.unit}</p>
              <p className="mt-1 text-[13px] text-muted">{r.label}</p>
            </div>
            <Icon name={r.ghost} size={20} className="text-brown/30" />
          </li>
        ))}
      </ul>
    </section>
  );
}
