import { BRAND, DESCRIPTION, EMAIL, SITE_URL } from "./site";
import { PLANS } from "./data";

const price = (p: string) => p.replace("$", "");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${BRAND} – صانع محتوى UGC`,
      inLanguage: "ar",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${BRAND} – صناعة محتوى UGC`,
      url: SITE_URL,
      image: `${SITE_URL}/og.jpg`,
      email: EMAIL,
      description: DESCRIPTION,
      inLanguage: "ar",
      areaServed: [
        "Egypt",
        "Saudi Arabia",
        "United Arab Emirates",
        "Kuwait",
        "Qatar",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      makesOffer: PLANS.filter((p) => p.price.includes("$")).map((p) => ({
        "@type": "Offer",
        name: p.title,
        priceCurrency: "USD",
        price: price(p.price),
        itemOffered: {
          "@type": "Service",
          name: p.title,
          serviceType: "UGC video production",
        },
      })),
    },
  ],
};
