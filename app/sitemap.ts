import prisma from "@/lib/db";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://wish-craft-19.vercel.app";

    // Fetch all card slugs to include in sitemap
    const cards = await prisma.card.findMany({
        select: { slug: true, updatedAt: true },
    });

    const cardEntries: MetadataRoute.Sitemap = cards.map((card) => ({
        url: `${baseUrl}/card/${card.slug}`,
        lastModified: card.updatedAt,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...cardEntries,
    ];
}
