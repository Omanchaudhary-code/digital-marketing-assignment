import Link from "next/link"
import { BookOpen, FlaskConical, Users, TrendingUp } from "lucide-react"

const nextSteps = [
  {
    icon: BookOpen,
    title: "Explore the BBIS Curriculum",
    description: "Understand how each course builds your technical, analytical, and managerial strengths.",
    href: "https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present",
  },
  {
    icon: FlaskConical,
    title: "Visit Our Digital Innovation Labs",
    description: "Discover hands-on learning spaces equipped with modern tools and technologies.",
    href: "/labs",
  },
  {
    icon: Users,
    title: "Experience Student Life",
    description: "See how BBIS students collaborate, lead clubs, and grow beyond academics.",
    href: "/student-life",
  },
  {
    icon: TrendingUp,
    title: "Explore Career Outcomes",
    description: "Learn where BBIS graduates work and how the program accelerates career growth.",
    href: "/outcomes",
  },
]

export function CallToAction() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Discover Your Path in BBIS at DoMIC
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You’ve met our faculty—now explore the program, opportunities, and learning journey that empower
            future-ready graduates in business information systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nextSteps.map((step, index) => (
            <Link
              key={index}
              href={step.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 font-semibold text-card-foreground group-hover:text-accent">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
