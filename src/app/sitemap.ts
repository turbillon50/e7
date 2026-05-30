import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { productions } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/participate", "/productions", "/community", "/login", "/register"];
  const staticPages = routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productionPages = productions.map((p) => ({
    url: `${site.url}/productions/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productionPages];
}
