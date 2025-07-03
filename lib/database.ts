import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required")
}

export const sql = neon(process.env.DATABASE_URL)

export interface NewsletterSubscription {
  id: number
  email: string
  subscribed_at: string
  is_active: boolean
  source: string
  user_agent?: string
  ip_address?: string
}

export async function createNewsletterSubscription(
  email: string,
  source = "blog",
  userAgent?: string,
  ipAddress?: string,
): Promise<{ success: boolean; message: string; data?: NewsletterSubscription }> {
  try {
    // Check if email already exists
    const existingSubscription = await sql`
      SELECT * FROM newsletter_subscriptions 
      WHERE email = ${email}
    `

    if (existingSubscription.length > 0) {
      // If exists but inactive, reactivate
      if (!existingSubscription[0].is_active) {
        const reactivated = await sql`
          UPDATE newsletter_subscriptions 
          SET is_active = true, subscribed_at = CURRENT_TIMESTAMP
          WHERE email = ${email}
          RETURNING *
        `
        return {
          success: true,
          message: "Votre abonnement a été réactivé avec succès!",
          data: reactivated[0] as NewsletterSubscription,
        }
      }

      return {
        success: false,
        message: "Cette adresse email est déjà abonnée à notre newsletter.",
      }
    }

    // Create new subscription
    const newSubscription = await sql`
      INSERT INTO newsletter_subscriptions (email, source, user_agent, ip_address)
      VALUES (${email}, ${source}, ${userAgent || null}, ${ipAddress || null})
      RETURNING *
    `

    return {
      success: true,
      message: "Merci pour votre abonnement! Vous recevrez bientôt nos dernières actualités.",
      data: newSubscription[0] as NewsletterSubscription,
    }
  } catch (error) {
    console.error("Database error:", error)
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer plus tard.",
    }
  }
}

export async function getNewsletterSubscriptions(limit = 100, offset = 0) {
  try {
    const subscriptions = await sql`
      SELECT * FROM newsletter_subscriptions 
      WHERE is_active = true 
      ORDER BY subscribed_at DESC 
      LIMIT ${limit} OFFSET ${offset}
    `

    const total = await sql`
      SELECT COUNT(*) as count FROM newsletter_subscriptions WHERE is_active = true
    `

    return {
      subscriptions: subscriptions as NewsletterSubscription[],
      total: total[0].count as number,
    }
  } catch (error) {
    console.error("Database error:", error)
    throw new Error("Failed to fetch newsletter subscriptions")
  }
}

export async function unsubscribeFromNewsletter(email: string) {
  try {
    const result = await sql`
      UPDATE newsletter_subscriptions 
      SET is_active = false 
      WHERE email = ${email}
      RETURNING *
    `

    return {
      success: result.length > 0,
      message: result.length > 0 ? "Vous avez été désabonné avec succès." : "Adresse email non trouvée.",
    }
  } catch (error) {
    console.error("Database error:", error)
    return {
      success: false,
      message: "Une erreur est survenue lors du désabonnement.",
    }
  }
}
