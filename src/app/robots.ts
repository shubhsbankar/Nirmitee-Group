import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all search engines
        allow: "/",     // Allow them to crawl everything
      },
    ],
    sitemap: "https://nirmiteegroup.com/sitemap.xml",
  };
}
