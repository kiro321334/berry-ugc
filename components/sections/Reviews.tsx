import fs from "node:fs";
import path from "node:path";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewsCarousel from "./ReviewsCarousel";

const dir = path.join(process.cwd(), "public/images/reviews");
const images = fs
  .readdirSync(dir)
  .filter((f) => /^\d+\.webp$/.test(f))
  .sort((a, b) => parseInt(a) - parseInt(b))
  .map((f) => `/images/reviews/${f}`);

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="px-page pb-12">
      <SectionHeading id="reviews-title" title="آراء أصحاب البراندات" sub="ما يقوله مدراء التسويق عن الشغل معانا" />
      <ReviewsCarousel images={images} />
    </section>
  );
}