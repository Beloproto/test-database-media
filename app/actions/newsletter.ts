"use server"

import { createNewsletterSubscription } from "@/lib/database"
import { headers } from "next/headers"
import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  source: z.string().optional().default("blog"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = newsletterSchema.safeParse({
      email: formData.get("email"),
      source: formData.get("source"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        message: validatedFields.error.errors[0]?.message || "Données invalides",
      }
    }

    const { email, source } = validatedFields.data

    // Get user agent and IP for analytics (optional)
    const headersList = headers()
    const userAgent = headersList.get("user-agent")
    const forwardedFor = headersList.get("x-forwarded-for")
    const realIp = headersList.get("x-real-ip")
    const ipAddress = forwardedFor?.split(",")[0] || realIp || "unknown"

    // Create subscription
    const result = await createNewsletterSubscription(
      email.toLowerCase().trim(),
      source,
      userAgent || undefined,
      ipAddress,
    )

    return result
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Une erreur inattendue est survenue. Veuillez réessayer.",
    }
  }
}

export async function subscribeToNewsletterFromHomepage(formData: FormData) {
  // Set source to homepage
  formData.set("source", "homepage")
  return subscribeToNewsletter(formData)
}
