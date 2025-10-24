import type { MetadataRoute } from "next";
import { personalInfo } from "@/lib/site-data";

const DEFAULT_BASE_URL = "https://rameshraoufi.me";

const baseUrl =
  personalInfo.portfolio?.trim().replace(/\/+$/, "") || DEFAULT_BASE_URL;

export const dynamic = "force-static";
export const revalidate = 60 * 60 * 24;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
