import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title"
      className="hero-h px-page flex flex-col py-4 text-center md:flex-row md:items-center md:gap-12 md:py-8 md:text-start">
      <div className="shrink-0 md:flex-1">
        <p className="inline-flex items-center gap-2 rounded-full bg-pill px-4 py-2 text-[12px] font-medium text-ink">
          <Icon name="badge" size={16} className="text-brand" />
          صانع محتوى UGC Content
        </p>
        <h1 id="hero-title" className="mt-4 text-[clamp(1.1rem,3.2vh,1.4rem)] font-extrabold leading-[1.7] text-ink md:text-[clamp(2rem,5.5vh,3.25rem)]">
          فيديوهات UGC مش بتجيب views <br /> وبس لا بتجيب <span className="text-brand">اوردرات</span>
        </h1>
        <a href="#works" className="mt-8 hidden items-center gap-2 rounded-full bg-brand px-10 py-4 text-[14px] font-bold text-white shadow-lg shadow-brand/30 md:inline-flex">
          <Icon name="down" size={16} />
          شاهد أعمالي السابقة
        </a>
      </div>

      <div className="relative mt-4 min-h-0 flex-1 md:mt-0 md:h-full md:self-stretch">
        <Image
          src="/images/ugc-creator-berry-brand.webp" alt="صانع محتوى UGC من Berry Brand في إطار كلاسيكي"
          fill priority fetchPriority="high" quality={75} sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-bottom md:object-center"
        />
        <a href="#works"
          className="absolute bottom-[5%] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-10 py-4 text-[14px] font-bold text-white shadow-lg shadow-brand/30 md:hidden">
          <Icon name="down" size={16} />
          شاهد أعمالي السابقة
        </a>
      </div>
    </section>
  );
}