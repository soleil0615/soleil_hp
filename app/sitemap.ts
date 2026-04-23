import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://le-soleil0615.com";

    const newsEntries = posts.map((post) => ({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/robo-done`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/edu`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/news`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.6,
        },
        ...newsEntries,
    ];
}
