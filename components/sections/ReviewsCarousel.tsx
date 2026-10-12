"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsCarousel({ images }: { images: string[] }) {
  const ref = useRef<HTMLUListElement>(null);

  const go = (next: boolean) => {
    const el = ref.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    const step = el.clientWidth * 0.8 * (next ? 1 : -1) * (rtl ? -1 : 1);
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <div className="mt-6" role="region" aria-roledescription="carousel" aria-label="آراء العملاء">
      <ul ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth">
        {images.map((src, i) => (
          <li key={src} className="relative aspect-[16/5] shrink-0 basis-[85%] snap-start overflow-hidden rounded-2xl bg-white shadow-sm sm:basis-[48%] lg:basis-[32%]">
            <Image src={src} alt={`تعليق عميل رقم ${i + 1} عن فيديوهات UGC`} fill loading="lazy"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 380px" className="object-contain" />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center gap-3">
        <button type="button" onClick={() => go(false)} aria-label="السابق"
          className="grid h-11 w-11 place-items-center rounded-full bg-pill text-brand">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(true)} aria-label="التالي"
          className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}