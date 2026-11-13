import type { MetadataRoute } from "next";
import { cashBoxOverview, hrCoreOverview, hrMobileOverview, hrRecruitmentOverview } from "@/features/products/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? ["/", "/about", hrCoreOverview.href, hrMobileOverview.href, hrRecruitmentOverview.href, cashBoxOverview.href].map(path => ({ url: new URL(path, siteUrl).href })) : [];
}
