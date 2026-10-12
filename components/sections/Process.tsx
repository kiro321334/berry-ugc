import SectionHeading from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="px-page pb-12">
      <SectionHeading id="process-title" title="طريقة الشغل (4 خطوات بسيطة)" sub="من استلام البريف لحد ما يوصلك إعلان جاهز للنشر" />
      <ol className="relative mt-6 space-y-3 pe-0 before:absolute before:bottom-6 before:end-[15px] before:top-4 before:w-0.5 before:bg-brand/30">
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative pe-10">
            <span className={`absolute end-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-extrabold text-white ${
              i === 0 || i === 3 ? "bg-brand" : "bg-brown"}`}>{i + 1}</span>
            <div className="rounded-md bg-step px-4 py-3">
              <h3 className="text-[15px] font-extrabold text-ink">{s.title}</h3>
              <p className="mt-1 text-[14px] leading-[1.7] text-muted">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
