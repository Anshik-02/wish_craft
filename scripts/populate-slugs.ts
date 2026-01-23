import { PrismaClient } from "./src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { createId } from "@paralleldrive/cuid2"; // or just use a simple generator if cuid isn't available

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const cards = await prisma.card.findMany({
        where: {
            slug: null,
        },
    });

    console.log(`Found ${cards.length} cards without slugs.`);

    for (const card of cards) {
        const slug = Math.random().toString(36).substring(2, 15); // Simple random slug for migration
        await prisma.card.update({
            where: { id: card.id },
            data: { slug },
        });
        console.log(`Updated card ${card.id} with slug ${slug}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
