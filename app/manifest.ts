import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Berry Brand – صانع محتوى UGC", short_name: "Berry UGC", lang: "ar", dir: "rtl", start_url: "/",
    display: "standalone", background_color: "#f5ede3", theme_color: "#f5ede3",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
