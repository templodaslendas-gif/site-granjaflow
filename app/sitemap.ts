import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/privacy", "/terms"].map((route) => ({ url: `https://granjaflow.com.br${route}`, lastModified: new Date(), changeFrequency: route ? "yearly" : "weekly", priority: route ? .3 : 1 })); }
