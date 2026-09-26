import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.granjaflow.com.br";
  return [
    { url: base, lastModified: new Date("2026-09-05"), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacidade`, lastModified: new Date("2026-09-05"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: new Date("2026-09-05"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos`, lastModified: new Date("2026-09-05"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
