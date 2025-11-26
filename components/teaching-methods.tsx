import { FileText, FolderKanban, FlaskConical, Laptop, Presentation, Users, Search } from "lucide-react"
import Link from "next/link"

const methods = [
  {
    icon: FileText,
    title: "Case-Based Learning",
    description:
      "Students analyze real business scenarios from Nepali and international companies, developing critical thinking skills and learning to apply theoretical concepts to practical situations.",
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    description:
      "Semester-long projects allow students to work on comprehensive solutions, from system design to implementation, mirroring the project lifecycle in professional environments.",
  },
  {
    icon: FlaskConical,
    title: "Experiential Learning",
    description:
      "Activity-based classes engage students through simulations, role-playing, and hands-on exercises that bring abstract concepts to life and foster deeper understanding.",
  },
  {
    icon: Laptop,
    title: "Lab-Based Sessions",
    description:
      "State-of-the-art computer labs provide the environment for practical skill development in programming, database management, and analytics tools used in industry.",
  },
  {
    icon: Presentation,
    title: "Presentations & Communication",
    description:
      "Regular presentation assignments build confidence in public speaking and develop the communication skills essential for professional success in technology roles.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Group projects foster teamwork, leadership, and interpersonal skills while exposing students to diverse perspectives and collaborative problem-solving approaches.",
  },
  {
    icon: Search,
    title: "Research-Driven Assignments",
    description:
      "Students engage in research activities that develop analytical skills, academic writing capabilities, and the ability to evaluate and synthesize information critically.",
  },
]

export function TeachingMethods() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="methods">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Modern Teaching Methods</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our faculty employs diverse pedagogical approaches designed to develop well-rounded professionals ready for
            the challenges of the digital economy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <method.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">{method.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Discover our learning labs and resources
            <span aria-hidden="true">→</span>
          </Link>
          
           
        </div>
      </div>
    </section>
  )
}
