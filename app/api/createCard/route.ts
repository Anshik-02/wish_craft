import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming body:", body);

    const {
      birthdayGuyName,
      birthDate,
      mainHeading,
      message,
      songLink,
      futureMessage,
      senderName,
      qualities,
    } = body;

    const card = await prisma.card.create({
      data: {
        birthdayGuyName,
        birthDate,
        mainHeading,

        // 💌 Default birthday message
        message:
          message?.trim() ||
          `Another year older, another year stronger.
Happy Birthday 🤍 I hope this year brings you calm on hard days and laughter on easy ones. May you keep growing into the person you’re meant to be, without rushing yourself. You deserve love that feels gentle and moments that feel real. Never forget how special you are to the people around you. Always rooting for you, today and always ✨`,

        // 🎶 Default Spotify embed
        songLink:
          songLink?.trim() ||
          "https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG",

        // ✨ Default future message
        futureMessage:
          futureMessage?.trim() ||
          `Dear Future You,  
If you’re reading this, remember how far you’ve come.  
You survived days you thought you wouldn’t, and you grew in ways you didn’t notice at the time.  
Be kind to yourself — you’re doing better than you think. 🤍`,

        // ✍️ Default sender
        senderName:
          senderName?.trim() || "Someone who cares about you 💌",

        // 🌸 Default qualities
        qualities:
          qualities?.length
            ? qualities
            : [
                "Kind at heart",
                "Quietly strong",
                "Always thoughtful",
                "Never gives up",
                "A beautiful soul",
              ],
      },
    });

    return NextResponse.json(
      { id: card.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE CARD ERROR:", error);

    return NextResponse.json(
      { error: "Failed to create card" },
      { status: 500 }
    );
  }
}
