"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageSquareText } from "lucide-react";
import { NAV } from "@/lib/data";
import { WHATSAPP } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const cls = (id: string) =>
    `text-[14px] font-bold transition-colors ${active === id ? "text-brand" : "text-ink/80 hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-50 bg-cream/95 shadow-[0_1px_0_rgba(133,88,60,0.12)]">
      <div className="px-page flex h-[var(--nav-h)] items-center justify-between">
        <a href="#home" className="text-[18px] font-extrabold text-brand">Berry Brand</a>

        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "page" : undefined} className={cls(n.id)}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14px] font-extrabold text-white lg:flex">
          <MessageSquareText size={16} aria-hidden="true" />كلمني على واتساب
        </a>

        <button type="button" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open}
          aria-controls="mobile-menu" onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full bg-pill text-brand lg:hidden">
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="قائمة الموبايل"
          className="px-page absolute inset-x-0 top-full bg-cream pb-5 shadow-[0_20px_30px_rgba(133,88,60,0.18)] lg:hidden">
          <ul>
            {NAV.map((n) => (
              <li key={n.id} className="border-b border-brown/10">
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`block py-4 ${cls(n.id)}`}>{n.label}</a>
              </li>
            ))}
          </ul>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand py-4 text-[14px] font-extrabold text-white">
            <MessageSquareText size={16} aria-hidden="true" />كلمني على واتساب
          </a>
        </nav>
      )}
    </header>
  );
}