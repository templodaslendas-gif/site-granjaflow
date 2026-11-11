import type { MetadataRoute } from "next";
import { guides, resources } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const resourcePages: MetadataRoute.Sitemap = resources.map(({ slug }) => ({
    url: `${SITE_URL}/recursos/${slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map(({ slug }) => ({
    url: `${SITE_URL}/conteudos/${slug}`,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/recursos`, changeFrequency: "monthly", priority: 0.85 },
    ...resourcePages,
    { url: `${SITE_URL}/conteudos`, changeFrequency: "monthly", priority: 0.75 },
    ...guidePages,
    { url: `${SITE_URL}/quem-somos`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/termos`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
