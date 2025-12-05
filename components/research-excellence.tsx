import { FileText, Globe, Award, Users } from "lucide-react"
import Link from "next/link"

const researchHighlights = [
  {
    icon: FileText,
    stat: "50+",
    label: "Peer-Reviewed Publications",
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
  "Data Science, Machine Learning & Business Analytics",
  "Digital Transformation in Nepali and Global Enterprises",
  "E-Commerce Strategy & Digital Marketing Innovation",
  "Information Security, Cyber Risk & Privacy Management",
  "Cloud Computing, Systems Architecture & Infrastructure",
  "Applied Artificial Intelligence in Business Decision-Making",
]

export function ResearchExcellence() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="research">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              DoMIC Research & Academic Excellence
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The Department of Management Information Systems (DoMIC) maintains a strong research culture, with faculty actively contributing to scholarly work in information systems, analytics, technology management, and digital innovation. Their research directly informs teaching, ensuring that BBIS students engage with current theories, emerging technologies, and evidence-based practices.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Students collaborate with faculty on research projects, participate in departmental seminars, and contribute to academic publications. These opportunities help them build analytical skills, explore emerging topics, and prepare for graduate studies or research-oriented careers.
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
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                Explore faculty research and publications
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-card-foreground">
                DoMIC Faculty Research Areas
              </h3>
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
              <h3 className="font-semibold text-foreground">BBIS Student Research Opportunities</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                BBIS students gain hands-on exposure to research through faculty-guided projects, seminar presentations, data-driven explorations, and contributions to academic publications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
