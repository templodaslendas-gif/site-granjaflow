import type { MetadataRoute } from "next";
import { absoluteUrl, SHOULD_INDEX } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: SHOULD_INDEX
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
