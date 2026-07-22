import Image from "next/image"
import { MapPin, Phone, Leaf } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
        {/* Left: brand + imagery */}
        <section className="relative overflow-hidden rounded-3xl">
          <Image
            src="/periyar-forest.png"
            alt="Misty morning over the forested hills of Periyar Tiger Reserve reflecting in a calm lake"
            width={800}
            height={1000}
            priority
            className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[540px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary">
              <Leaf className="size-3.5" aria-hidden="true" />
              Periyar Tiger Reserve
            </span>
            <h1 className="font-serif text-3xl font-semibold text-primary-foreground text-balance sm:text-4xl">
              Project Remember
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/90 text-pretty">
              Explore the wild heart of the Western Ghats with us. Reach out for
              conservation activities, guided programs, and unforgettable safaris.
            </p>
          </div>
        </section>

        {/* Right: form */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wide text-accent-foreground/70">
              Get in touch
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground text-balance sm:text-3xl">
              Plan your visit or ask us anything
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              Fill in your details and choose what you&apos;re interested in. Our
              team will get back to you soon.
            </p>
          </div>

          <ContactForm />

          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Thekkady, Kerala
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              Available 9 AM – 7 PM
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}
