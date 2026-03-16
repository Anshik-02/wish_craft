import prisma from "@/lib/db";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://wish-craft-19.vercel.app";

    // Fetch all card slugs to include in sitemap
    let cardEntries: MetadataRoute.Sitemap = [];
    try {
        const cards = await prisma.card.findMany({
            select: { slug: true, updatedAt: true },
        });

        cardEntries = cards.map((card) => ({
            url: `${baseUrl}/card/${card.slug}`,
            lastModified: card.updatedAt,
            changeFrequency: "monthly",
            priority: 0.6,
        }));
    } catch (error) {
        console.error("Sitemap generation error:", error);
    }

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
