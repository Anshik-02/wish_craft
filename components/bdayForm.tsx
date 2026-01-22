"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import axios from "axios";
/* ---------------- SCHEMA ---------------- */

const formSchema = z.object({
  birthdayGuyName: z.string().min(2, "Name is required"),
  birthDate: z.string().min(1, "Birth date is required"),
  mainHeading: z.string().min(5, "Main heading is required"),

  message: z.string().optional(),
  futureMessage: z.string().optional(),
  senderName: z.string().optional(),

  qualities: z
    .array(z.string().min(1))
    .min(6, "Qualities are required"),

  songLink: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.includes("spotify.com"),
      "Please enter a valid Spotify link"
    ),
});

type FormValues = z.infer<typeof formSchema>;


export function BdayForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthdayGuyName: "",
      birthDate: "",
      mainHeading: "",
      message: "",
      futureMessage: "",
      senderName: "",
      qualities: ["", "", "", "", "", ""],
      songLink: "",
    },
  });

 async function onSubmit(values: FormValues) {
    confetti({
      particleCount: 900,
      spread: 400,
      origin: { y: 0 },
      colors: ["#FF5D8F", "#FF8FAB", "#FFD6A5"],
    });


   
    const response=await axios.post('/api/createCard',values)
    const { id } = response.data;
     router.push(`/card/${id}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
          space-y-6 border p-8 rounded-3xl bg-white
          shadow-[0_25px_60px_rgba(255,140,90,0.35),0_60px_180px_rgba(255,180,150,0.45)]
          w-full max-w-xl
        "
      >
        {/* HEADER */}
        <div className="bg-[#FF5D8F] rounded-2xl p-6 text-white text-center">
          <h2 className="text-2xl font-bold">
            {step === 1 ? "Let’s start 🎂" : "Make it personal 💖"}
          </h2>
          <p className="opacity-90 text-sm mt-1">
            {step === 1
              ? "Just the essentials to begin"
              : "Optional, but makes it special"}
          </p>
        </div>

        {/* ---------------- STEP 1 ---------------- */}
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="birthdayGuyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birthday Person Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Anshik" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Date *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mainHeading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Heading *</FormLabel>
                  <FormControl>
                    <Input placeholder="Another Beautiful Year ✨" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              className="w-full bg-[#FF5D8F]"
              onClick={async () => {
                const valid = await form.trigger([
                  "birthdayGuyName",
                  "birthDate",
                  "mainHeading",
                ]);
                if (valid) setStep(2);
              }}
            >
              Next →
            </Button>
          </>
        )}

        {/* ---------------- STEP 2 ---------------- */}
        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birthday Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write something sweet…"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="futureMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message to Future You</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A gentle reminder for the future…"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* QUALITIES */}
            <FormField
              control={form.control}
              name="qualities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorite Qualities *</FormLabel>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {field.value?.map((_, index) => (
                      <Input
                        key={index}
                        placeholder={`Quality ${index + 1}`}
                        value={field.value?.[index] || ""}
                        onChange={(e) => {
                          const updated = [...(field.value || [])];
                          updated[index] = e.target.value;
                          field.onChange(updated);
                        }}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground mt-2">
                    Add up to 6 qualities (Kind, Loyal, Creative…)
                  </p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="senderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="From someone who cares 🤍"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="songLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Spotify Song Link(embeds)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://open.spotify.com/embed/track/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ACTIONS */}
            <div className="flex flex-col gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setStep(1)}
              >
                ← Back
              </Button>

              <Button
                type="submit"
                className="w-full bg-[#FF5D8F] hover:bg-[#ff477e]"
              >
                Generate Card 🎉
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
}
