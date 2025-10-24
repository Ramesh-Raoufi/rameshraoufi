import type { MetadataRoute } from "next";
import { personalInfo } from "@/lib/site-data";

const DEFAULT_BASE_URL = "https://rameshraoufi.me";

const baseUrl =
  personalInfo.portfolio?.trim().replace(/\/+$/, "") || DEFAULT_BASE_URL;

export const revalidate = 0;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
