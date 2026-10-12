import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { WORKS } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-4 px-page pb-10">
      <SectionHeading id="works-title" dot title="أفضل أعمالي" sub="فيديوهات حصدت تفاعل حقيقي ومبيعات ملموسة للبراندات" />
      <ul className="mt-6 grid grid-cols-2 gap-2">
        {WORKS.map((w) => (
          <li key={w.img}>
            <article className="rounded-[28px] bg-white p-2 pb-3 shadow-sm">
              <div className="rounded-2xl bg-brown p-2">
                <div className="mb-1.5 flex items-center justify-between px-1 text-[10px] font-bold text-white">
                  <span aria-hidden="true" className="flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-white" /><i className="h-1.5 w-1.5 rounded-full bg-white" /><i className="h-1.5 w-1.5 rounded-full bg-white" /></span>
                  <span>مشاهدة {w.views}</span>
                </div>
                <Image src={`/images/works/${w.img}.webp`} alt={w.alt} width={144} height={254} loading="lazy"
                  sizes="(max-width: 480px) 40vw, 180px" className="aspect-[144/254] w-full rounded-lg object-cover" />
              </div>
              <h3 className="mt-3 px-2 text-[14px] font-extrabold text-ink">{w.title}</h3>
              <div className="mt-2 flex items-center justify-between px-2">
                <span className="rounded-full bg-pill px-3 py-1 text-[11px] font-bold text-muted">{w.tag}</span>
                <span dir="ltr" className="text-[10px] font-extrabold text-brand">CTR {w.ctr}</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <a href="#contact" className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-pill px-8 py-3 text-[14px] font-bold text-ink">
        عرض المزيد (+6 فيديوهات) <Icon name="chevron" size={14} />
      </a>
    </section>
  );
}
