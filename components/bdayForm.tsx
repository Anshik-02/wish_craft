"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import confetti from "canvas-confetti"
import { useRouter } from "next/navigation"
import { nanoid } from "nanoid"

const formSchema = z.object({
  birthdayGuyName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
  birthDate: z.string().min(1, {
    message: "Please select a birth date.",
  }),
})

export function BdayForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthdayGuyName: "",
      message: "",
      birthDate: "",
    },
  })

  const router = useRouter()

  function onSubmit(values: z.infer<typeof formSchema>) {
    confetti({
      particleCount: 1000,
      spread: 400,
      origin: { y: 0 },
      colors: ["#FF5D8F", "#FF8FAB", "#FFD6A5"],
    })

    const id = nanoid(8)

    const encodedData = btoa(
      encodeURIComponent(JSON.stringify(values))
    )

    router.push(`/card/${id}?data=${encodedData}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
          space-y-6 border p-8 rounded-3xl bg-white
          shadow-[0_25px_60px_rgba(255,140,90,0.35),0_60px_180px_rgba(255,180,150,0.45)]
          h-fit w-full max-w-xl
        "
      >
        {/* Header */}
        <div className="w-full h-20 bg-[#FF5D8F] rounded-t-2xl flex items-center">
          <h3 className="text-2xl font-bold px-6 text-white">
            Enter Birthday Details
          </h3>
        </div>

        {/* Name */}
        <FormField
          control={form.control}
          name="birthdayGuyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Anshik" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Birth Date */}
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birth Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birthday Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write something sweet 💖😋"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full bg-[#FF5D8F] hover:bg-[#ff477e]">
          Generate Card 🎂
        </Button>
      </form>
    </Form>
  )
}
