import { Target, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"

const connections = [
  {
    icon: Target,
    title: "Practical Skill Development",
    description:
      "Our teaching methods are designed with one goal in mind: to develop skills that employers actually need. From data analysis to project management, every classroom activity builds toward professional competence.",
  },
  {
    icon: TrendingUp,
    title: "Research Meets Practice",
    description:
      "Faculty research directly informs classroom content, ensuring students learn about cutting-edge developments in information systems, analytics, and digital business transformation.",
  },
  {
    icon: Lightbulb,
    title: "Industry Relevance",
    description:
      "With faculty experienced in IT consulting, software development, and business analysis, students gain insights into industry practices and emerging trends that textbooks can't provide.",
  },
]

export function FacultyStudentConnection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="connection">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            DoMIC Faculty-to-Student Connection from Classroom to Career
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our faculty&apos;s expertise translates directly into career-ready skills for our graduates.
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
            Ready to See Where BBIS Can Take You?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Our graduates are working at leading technology companies, consulting firms, and innovative startups across
            Nepal and beyond.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/outcomes"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Learn more about career outcomes
            </Link>
            <Link
              href="https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              See the full curriculum
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
