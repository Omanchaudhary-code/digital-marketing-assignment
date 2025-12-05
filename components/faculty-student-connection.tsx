import { Target, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"

const connections = [
  {
    icon: Target,
    title: "Practical Skill Development",
    description:
      "Students build high-demand skills through hands-on projects, case studies, analytical tasks, and collaborative problem-solving aligned with real employer expectations.",
  },
  {
    icon: TrendingUp,
    title: "Research-Driven Teaching",
    description:
      "Faculty research in analytics, information systems, and digital strategy directly shapes coursework—keeping learning aligned with emerging tools and industry developments.",
  },
  {
    icon: Lightbulb,
    title: "Industry-Relevant Insights",
    description:
      "With backgrounds in IT consulting, software engineering, and business analysis, faculty provide real-world guidance that goes far beyond textbook concepts.",
  },
]

export function FacultyStudentConnection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="connection">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            How DoMIC Faculty Connect Classroom Learning to Real Career Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our faculty blend academic expertise with industry experience—ensuring every lesson builds toward
            professional, real-world competency.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {connections.map((connection, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <connection.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{connection.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{connection.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-primary p-8 text-center sm:p-12">
          <h3 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
            Where Can BBIS Take You?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            BBIS graduates work in leading tech companies, consulting firms, financial institutions, and innovative
            startups—equipped with skills that match today’s digital economy.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/outcomes"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Explore Career Outcomes
            </Link>
            <Link
              href="https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View the Full Curriculum
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
