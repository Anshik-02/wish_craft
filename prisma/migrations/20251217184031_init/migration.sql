-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "birthdayGuyName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "mainHeading" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "futureMessage" TEXT,
    "senderName" TEXT NOT NULL,
    "qualities" TEXT[],
    "songLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
