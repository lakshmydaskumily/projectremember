"use client"

import type React from "react"
import { useState } from "react"
import {
  User,
  Phone,
  MessageCircle,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const ENQUIRY_OPTIONS = [
  {
    value: "activities",
    label: "Project Remember Activities",
    description: "Conservation drives, awareness & community programs",
  },
  {
    value: "periyar-programs",
    label: "Periyar Tiger Reserve Programs",
    description: "Guided treks, nature camps & eco-tourism packages",
  },
  {
    value: "jeep-safari",
    label: "Jeep Safari & Others",
    description: "Wildlife safaris, boating & custom experiences",
  },
]

type FormState = {
  name: string
  phone: string
  whatsapp: string
  enquiry: string
  remarks: string
}

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  whatsapp: "",
  enquiry: "activities",
  remarks: "",
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-semibold text-card-foreground text-balance sm:text-3xl">
            Thank you, {form.name || "friend"}!
          </h2>
          <p className="mx-auto max-w-md leading-relaxed text-muted-foreground text-pretty">
            {"We've received your enquiry and our team will reach out to you shortly. In the meantime, explore more about our work."}
          </p>
        </div>
        <a
          href="https://projectremember.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Visit Project Remember
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(INITIAL_STATE)
            setSubmitted(false)
          }}
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="space-y-5">
        <Field
          id="name"
          label="Full Name"
          icon={<User className="size-4" aria-hidden="true" />}
        >
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-input bg-background px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="phone"
            label="Phone Number"
            icon={<Phone className="size-4" aria-hidden="true" />}
          >
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-input bg-background px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </Field>

          <Field
            id="whatsapp"
            label="WhatsApp Number"
            icon={<MessageCircle className="size-4" aria-hidden="true" />}
          >
            <input
              id="whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-input bg-background px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </Field>
        </div>

        <fieldset className="space-y-3">
          <legend className="mb-1 text-sm font-medium text-foreground">
            What is your enquiry about?
          </legend>
          <div className="grid gap-3">
            {ENQUIRY_OPTIONS.map((option) => {
              const active = form.enquiry === option.value
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors ${
                    active
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="enquiry"
                    value={option.value}
                    checked={active}
                    onChange={(e) => update("enquiry", e.target.value)}
                    className="sr-only"
                  />
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      active ? "border-primary" : "border-muted-foreground/40"
                    }`}
                    aria-hidden="true"
                  >
                    {active && <span className="size-2.5 rounded-full bg-primary" />}
                  </span>
                  <span className="space-y-0.5">
                    <span className="block text-sm font-medium text-foreground">
                      {option.label}
                    </span>
                    <span className="block text-xs leading-relaxed text-muted-foreground">
                      {option.description}
                    </span>
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <Field
          id="remarks"
          label="Remarks / Questions"
          icon={<MessageSquare className="size-4" aria-hidden="true" />}
        >
          <textarea
            id="remarks"
            rows={4}
            value={form.remarks}
            onChange={(e) => update("remarks", e.target.value)}
            placeholder="Tell us how we can help, preferred dates, group size, etc."
            className="w-full resize-none rounded-xl border border-input bg-background px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </Field>

        <Button type="submit" size="lg" className="w-full rounded-xl">
          <Leaf className="size-4" aria-hidden="true" />
          Send Enquiry
        </Button>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  icon,
  children,
}: {
  id: string
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  const isTextarea = id === "remarks"
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-3.5 text-muted-foreground ${
            isTextarea ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {icon}
        </span>
        {children}
      </div>
    </div>
  )
}
