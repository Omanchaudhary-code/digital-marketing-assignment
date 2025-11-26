import { FileText, Globe, Award, Users } from "lucide-react"
import Link from "next/link"

const researchHighlights = [
  {
    icon: FileText,
    stat: "50+",
    label: "Published Papers",
  },
  {
    icon: Globe,
    stat: "10+",
    label: "Conference Presentations",
  },
  {
    icon: Award,
    stat: "5+",
    label: "Research Grants",
  },
  {
    icon: Users,
    stat: "30+",
    label: "Student Research Projects",
  },
]

const researchAreas = [
  "Data Science and Business Analytics",
  "Digital Transformation in Nepali Enterprises",
  "E-Commerce and Digital Marketing",
  "Information Security and Privacy",
  "Cloud Computing and Infrastructure",
  "Artificial Intelligence Applications in Business",
]

export function ResearchExcellence() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="research">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Research & Academic Excellence
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our faculty are not just teachers—they are active researchers contributing to the advancement of knowledge
              in information systems, business analytics, and digital transformation. This research activity directly
              enriches the classroom experience, ensuring students learn about the latest developments in their field.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Students are encouraged to participate in research projects, gaining valuable experience in academic
              inquiry and developing skills that serve them in graduate studies or research-oriented careers. Faculty
              mentorship in research helps students understand how to approach complex problems systematically and
              contribute to knowledge creation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {researchHighlights.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <span className="block text-2xl font-bold text-foreground">{item.stat}</span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/research" className="inline-flex items-center gap-2 text-accent hover:underline">
                Explore faculty research and publications
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-card-foreground">Faculty Research Areas</h3>
              <ul className="space-y-3">
                {researchAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl bg-accent/10 p-6">
              <h4 className="font-semibold text-foreground">Student Research Opportunities</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                BBIS students can participate in faculty-led research projects, present at departmental seminars, and
                contribute to publications under faculty mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
