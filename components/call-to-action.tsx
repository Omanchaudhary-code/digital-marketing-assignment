import Link from "next/link"
import { BookOpen, FlaskConical, Users, TrendingUp } from "lucide-react"

const nextSteps = [
  {
    icon: BookOpen,
    title: "Explore the Curriculum",
    description: "See how our courses are structured to build your expertise.",
    href: "https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present",
  },
  {
    icon: FlaskConical,
    title: "Discover Our Labs",
    description: "Learn about the resources and technology available to you.",
    href: "/labs",
  },
  {
    icon: Users,
    title: "Student Life at DoMIC",
    description: "Experience the vibrant community beyond the classroom.",
    href: "/student-life",
  },
  {
    icon: TrendingUp,
    title: "Career Outcomes",
    description: "See where our graduates are making an impact.",
    href: "/outcomes",
  },
]

export function CallToAction() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Continue Your Exploration</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Now that you&apos;ve met our faculty, discover more about what makes the BBIS program at KU School of
            Management the right choice for your future in technology and business.
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
              <h3 className="mb-2 font-semibold text-card-foreground group-hover:text-accent">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
