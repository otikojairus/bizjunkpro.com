import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...PAGES.map((page) => ({
      url: `${SITE_URL}${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.kind === "Service" ? 0.8 : 0.7,
    })),
  ];
}
