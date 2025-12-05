import { 
  FileText, 
  FolderKanban, 
  FlaskConical, 
  Laptop, 
  Presentation, 
  Users, 
  Search 
} from "lucide-react"
import Link from "next/link"

const methods = [
  {
    icon: FileText,
    title: "Case-Based Learning",
    description:
      "Students analyze real business and technology cases from Nepal and abroad. This method strengthens strategic thinking and demonstrates how theories guide real-world decision-making.",
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    description:
      "Through semester-long projects, students design complete solutions—from system prototypes to digital transformation roadmaps—mirroring professional industry workflows.",
  },
  {
    icon: FlaskConical,
    title: "Experiential Learning",
    description:
      "Simulations, role-plays, and activity-based exercises help students understand complex concepts through practice. These sessions encourage experimentation and active learning.",
  },
  {
    icon: Laptop,
    title: "Lab-Centered Instruction",
    description:
      "Hands-on lab sessions build technical proficiency in programming, analytics, database systems, and IS development—equipping students with job-ready digital skills.",
  },
  {
    icon: Presentation,
    title: "Presentation & Communication Training",
    description:
      "Frequent presentations and structured communication tasks boost clarity, confidence, and professional presence—skills essential for leadership in business and tech roles.",
  },
  {
    icon: Users,
    title: "Collaborative & Team-Based Learning",
    description:
      "Group assignments and peer collaboration cultivate teamwork, leadership, and shared problem-solving, exposing students to diverse perspectives and real-world coordination.",
  },
  {
    icon: Search,
    title: "Research-Driven Assignments",
    description:
      "Students engage in research tasks that build inquiry, academic writing, evidence-based reasoning, and data interpretation—core competencies for higher studies and analytical careers.",
  },
]

export function TeachingMethods() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="methods">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Core Teaching Methods in the BBIS Program
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            DoMIC faculty employ modern, student-centered teaching approaches that blend theory, practice, collaboration, 
            and research—building the technical and professional strengths required for emerging information systems leaders.
          </p>
        </div>

        {/* Teaching Method Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <method.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {method.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore our learning labs and academic resources
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
