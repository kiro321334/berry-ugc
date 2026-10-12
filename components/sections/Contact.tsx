import {
  Camera,
  Mail,
  MessageSquareDot,
  MessageSquareText,
  Music2,
  Share2,
} from "lucide-react";
import { EMAIL, WHATSAPP } from "@/lib/site";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/berry_medhat_ugc?igsh=MXg0ZTB2bmdsenpxbA==",
    Icon: Camera,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@berry.ugc.creator?_r=1&_t=ZS-98ky6JCTwD1",
    Icon: Music2,
  },
  {
    label: "facebook",
    href: "https://www.facebook.com/share/1GTMu9vE9t/",
    Icon: Share2,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-page">
      <div className="rounded-[40px] bg-brown px-5 py-8 text-center text-white">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
          <MessageSquareDot size={22} aria-hidden="true" />
        </span>
        <h2
          id="contact-title"
          className="mt-4 text-[16px] font-medium text-white/85"
        >
          قولي على منتجك وهرد عليك بكل التفاصيل.
        </h2>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand py-4 text-[14px] font-extrabold shadow-lg shadow-black/20"
        >
          كلمني على واتساب <MessageSquareText size={18} aria-hidden="true" />
        </a>

        <ul className="mt-6 flex items-center justify-center gap-4 text-[12px] text-white/70">
          {socials.map(({ label, href, Icon }, i) => (
            <li key={label} className="flex items-center gap-4">
              {i > 0 && <span aria-hidden="true">•</span>}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] text-white/50">
          © صناعة محتوى UGC احترافي - القاهرة &amp; الرياض
        </p>
      </div>
    </section>
  );
}
