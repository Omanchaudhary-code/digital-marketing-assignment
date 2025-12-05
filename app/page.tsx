import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Users, Award, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "BBIS Kathmandu University | Department of Management Informatics",
  description:
    "Explore the BBIS program at Kathmandu University School of Management. Learn about the curriculum, faculty expertise, industry exposure, and student opportunities at DoMIC.",
}

// ----------------- Hero Section -----------------
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://kusomalumni.org/static/images/icons/kusombuilding.jpg')",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-primary-foreground sm:flex-row sm:items-center">
        {/* Left Column */}
        <div className="space-y-6 sm:flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Kathmandu University · DoMIC
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Business Information Systems for Nepal&apos;s Digital Future
          </h1>
          <p className="text-lg text-primary-foreground/80">
            The Department of Management Informatics and Communication blends management insight with technical expertise,
            preparing graduates to become industry-ready professionals in Nepal's digital economy.
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

        {/* Right Column */}
        <div className="rounded-2xl border border-primary-foreground/40 bg-primary/30 p-6 text-base leading-relaxed text-primary-foreground/80 sm:max-w-sm">
          <p className="font-serif text-xl text-primary-foreground">
            “BBIS at KU School of Management equips students with analytical, technical, and managerial skills to innovate in Nepal&apos;s fast-growing digital landscape.”
          </p>
          <p className="mt-4 text-sm uppercase tracking-wide text-primary-foreground/60">
            Department of Management Informatics and Communication
          </p>
        </div>
      </div>
    </section>
  )
}

// ----------------- Stats Section -----------------
function StatsSection() {
  const stats = [
    { icon: Users, value: "15+", label: "Expert Faculty" },
    { icon: Award, value: "80%", label: "PhD & Masters" },
    { icon: BookOpen, value: "50+", label: "Years Combined Experience" },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">BBIS at a Glance</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our program combines academic rigor with practical exposure to develop well-rounded graduates.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm"
            >
              <stat.icon className="mb-3 h-8 w-8 text-accent" />
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ----------------- Why Choose Section -----------------
function WhyChooseSection() {
  const points = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Courses are designed based on current trends in IT, business analytics, and digital transformation.",
    },
    {
      title: "Hands-On Learning",
      description: "Labs, projects, and research-driven assignments give students practical skills and problem-solving experience.",
    },
    {
      title: "Strong Industry Connections",
      description: "Guest lecturers, workshops, and collaborations with tech companies ensure exposure to real-world applications.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Why Choose BBIS at DoMIC?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our program bridges business, technology, and analytics, preparing students to meet the demands of modern industries.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ----------------- Call to Action Section -----------------
function CallToActionSection() {
  return (
    <section className="bg-accent/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-accent sm:text-4xl">
          Ready to Begin Your BBIS Journey?
        </h2>
        <p className="mt-4 text-lg text-accent/80">
          Explore our curriculum, meet our faculty, and join a vibrant student community shaping Nepal&apos;s digital future.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
          >
            View Curriculum
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/faculty"
            className="inline-flex items-center justify-center rounded-lg border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
          >
            Meet Faculty
          </Link>
        </div>
      </div>
    </section>
  )
}

// ----------------- Main Page -----------------
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyChooseSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
