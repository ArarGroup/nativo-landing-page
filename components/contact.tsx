"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, CheckCircle } from "lucide-react"
import { trackContactFormSubmit } from "@/lib/analytics"

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setTimeout(() => {
      setFormState("success")
      trackContactFormSubmit()
    }, 1000)
  }

  return (
    <section id="contact" className="scroll-mt-28 py-20 relative">
      {/* Background overlay that covers only half */}
      <div className="absolute inset-0 bg-slate-50 h-1/2" />

      <div className="container px-4 mx-auto max-w-4xl relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Contáctenos
            </h2>
            <p className="text-muted-foreground mb-6">
              Solicite la prueba de 14 días o una reunión con ventas. Responderemos por los canales
              indicados abajo.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-700 shrink-0" aria-hidden />
                <p className="text-muted-foreground">
                  <a href="mailto:contacto@1nativoone.com" className="underline-offset-4 hover:underline">
                    contacto@1nativoone.com
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-700 shrink-0" aria-hidden />
                <p className="text-muted-foreground">
                  Línea Colombia:{" "}
                  <a href="tel:+576015551234" className="underline-offset-4 hover:underline">
                    +57 601 555 1234
                  </a>{" "}
                  <span className="text-sm block sm:inline sm:ml-1 text-muted-foreground/80">
                    (sustituye por tu número real)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              {formState === "success" ? (
                <div className="text-center py-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-500">Nos pondremos en contacto pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Su nombre"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="su@correo.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Sector, tamaño de equipo o dudas sobre planes…"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={formState === "submitting"}>
                    {formState === "submitting" ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
