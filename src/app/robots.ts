import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/quiz/start",
          "/quiz/result/",
        ],
      },
    ],
    sitemap: "https://worksheetdownload.com/sitemap.xml",
  };
}
