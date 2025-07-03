"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

interface NewsletterFormProps {
  source?: string
  className?: string
  variant?: "default" | "compact" | "inline"
}

export function NewsletterForm({ source = "blog", className = "", variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus("error")
      setMessage("Veuillez entrer votre adresse email")
      return
    }

    setStatus("loading")

    const formData = new FormData()
    formData.append("email", email)
    formData.append("source", source)

    try {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        setStatus("success")
        setMessage(result.message)
        setEmail("")
      } else {
        setStatus("error")
        setMessage(result.message)
      }
    } catch (error) {
      setStatus("error")
      setMessage("Une erreur est survenue. Veuillez réessayer.")
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle")
      setMessage("")
    }, 5000)
  }

  if (variant === "compact") {
    return (
      <div className={`space-y-3 ${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="flex-1"
          />
          <Button type="submit" disabled={status === "loading"} size="sm">
            {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
          </Button>
        </form>

        {message && (
          <div
            className={`flex items-center gap-2 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {status === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {message}
          </div>
        )}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-64"
          />
          <Button type="submit" disabled={status === "loading"} className="bg-orange-500 hover:bg-orange-600">
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Mail className="w-4 h-4 mr-2" />
            )}
            S'abonner
          </Button>
        </form>

        {message && (
          <div
            className={`flex items-center gap-2 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {status === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {message}
          </div>
        )}
      </div>
    )
  }

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Restez Informé</h3>
          <p className="text-gray-600 text-sm">
            Recevez nos dernières actualités blockchain directement dans votre boîte mail.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full"
          />

          <Button type="submit" disabled={status === "loading"} className="w-full bg-orange-500 hover:bg-orange-600">
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Inscription en cours...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                S'abonner à la Newsletter
              </>
            )}
          </Button>
        </form>

        {message && (
          <div
            className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
              status === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {message}
          </div>
        )}

        <p className="text-xs text-gray-500 mt-4 text-center">
          En vous abonnant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.
        </p>
      </CardContent>
    </Card>
  )
}
