import { Metadata, ResolvingMetadata } from "next";
import prisma from "@/lib/db";
import CardPreview from "./CardPreview";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;

  try {
    const card = await prisma.card.findUnique({
      where: { slug: id },
    });

    if (!card) {
      return {
        title: "Card Not Found",
      };
    }

    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: `${card.birthdayGuyName}'s Birthday Wish`,
      description: card.message || `A special birthday wish for ${card.birthdayGuyName}!`,
      openGraph: {
        title: `${card.birthdayGuyName}'s Birthday Surprise`,
        description: card.message || `A special birthday surprise for ${card.birthdayGuyName}!`,
        images: ["/og-image.png", ...previousImages],
        url: `https://wish-craft-19.vercel.app/card/${id}`,
      },
    };
  } catch (error) {
    return {
      title: "Wish Craft Card",
    };
  }
}

export default async function CardPage({ params }: Props) {
  const { id } = await params;

  const card = await prisma.card.findUnique({
    where: { slug: id },
  });

  if (!card) {
    notFound();
  }

  // Serialize the data for the client component
  const serializedCard = {
    ...card,
    createdAt: card.createdAt.toISOString(),
    updatedAt: card.updatedAt.toISOString(),
  };

  return <CardPreview card={serializedCard as any} />;
}
