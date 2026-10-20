import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import WorkVideo from "@/components/ui/WorkVideo";
import { WORKS } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-4 px-page pb-10">
      <SectionHeading id="works-title" dot title="أفضل أعمالي" sub="فيديوهات حصدت تفاعل حقيقي ومبيعات ملموسة للبراندات" />
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {WORKS.slice(0, 4).map((w, i) => (
          <li key={w.img}>
            <WorkVideo index={i + 1} alt={w.alt} />
          </li>
        ))}
      </ul>
      <a href="#contact" className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-pill px-8 py-3 text-[14px] font-bold text-ink">
        عرض المزيد  <Icon name="chevron" size={14} />
      </a>
    </section>
  );
}