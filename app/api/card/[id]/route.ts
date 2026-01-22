import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface CardParams {
  id: string;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<CardParams> }
) {
  const { id } = await params;
  console.log("heheh")
  if (!id) {
    return NextResponse.json(
      { error: "Missing card ID" },
      { status: 400 } // 400 Bad Request
    );
  }


  try {
    const card = await prisma.card.findUnique({
      where: { id: parseInt(id) },
    });

    if (!card) {
      return NextResponse.json(
        { error: `Card with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(card, { status: 200 }); // Explicitly set status 200
  } catch (error) {
    console.error("FETCH CARD ERROR:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while fetching the card" },
      { status: 500 }
    );
  }
}