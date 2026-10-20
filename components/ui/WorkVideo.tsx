"use client";

import { useState } from "react";
import Image from "next/image";

const COVER = "/images/ugc-creator-berry-brand.webp";

type Props = {
  index: number; // 1..4
  alt: string;
};

export default function WorkVideo({ index, alt }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative mx-auto aspect-[144/254] w-full max-w-[320px] overflow-hidden rounded-2xl bg-brown">
      {active ? (
        <video
          data-work-video
          className="absolute inset-0 h-full w-full object-cover"
          src={`/images/works/${index}.mp4`}
          poster={COVER}
          aria-label={alt}
          autoPlay
          controls
          playsInline
          preload="metadata"
          onPlay={(e) => {
            // فيديو واحد بس يشتغل في نفس الوقت
            document
              .querySelectorAll<HTMLVideoElement>("video[data-work-video]")
              .forEach((v) => {
                if (v !== e.currentTarget) v.pause();
              });
          }}
        />
      ) : (
        <>
          <Image
            src={COVER}
            alt={alt}
            fill
            loading="lazy"
            sizes="(max-width: 480px) 90vw, 320px"
            className="object-cover"
          />
          {/* الفلتر الغامق */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`تشغيل الفيديو ${index}`}
            className="group absolute inset-0 grid place-items-center"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-xl ring-8 ring-white/25 transition-transform duration-200 group-active:scale-95 md:group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-9 w-9 translate-x-[2px] fill-brand"
              >
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.9-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}