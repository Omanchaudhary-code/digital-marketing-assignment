import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "BBIS Kathmandu University | Department of Management Informatics",
  description:
    "Explore the BBIS program at Kathmandu University School of Management. Discover our curriculum, faculty, and student experience within the Department of Management Informatics and Communication.",
}

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/abstract-geometric-pattern-dark-blue.jpg')" }} />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-primary-foreground sm:flex-row sm:items-center">
        <div className="space-y-6 sm:flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Kathmandu University · DoMIC</p>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Business Information Systems for Nepal&apos;s Digital Future
          </h1>
          <p className="text-lg text-primary-foreground/80">
            The Department of Management Informatics and Communication blends management insight with technical depth to prepare
            industry-ready graduates. Start from a solid curriculum, learn from researchers, and build solutions that matter.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
            >
              View BBIS Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/faculty"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/60 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Meet the Faculty
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-primary-foreground/40 bg-primary/30 p-6 text-base leading-relaxed text-primary-foreground/80 sm:max-w-sm">
          <p className="font-serif text-xl text-primary-foreground">
            “BBIS at KU School of Management stands at the intersection of analytics, technology, and management. Students graduate
            ready to innovate within Nepal&apos;s fast-evolving digital economy.”
          </p>
          <p className="mt-4 text-sm uppercase tracking-wide text-primary-foreground/60">
            Department of Management Informatics and Communication
          </p>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeHero />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
