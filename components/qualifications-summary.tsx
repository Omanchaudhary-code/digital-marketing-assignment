import { GraduationCap, Award, Briefcase, BookMarked } from "lucide-react"

const qualifications = [
  {
    icon: GraduationCap,
    title: "Academic Degrees",
    items: [
      "Ph.D. in Information Systems",
      "M.Phil in Computer Science",
      "Masters in Business Administration",
      "Masters in Computer Applications",
    ],
  },
  {
    icon: Award,
    title: "Professional Certifications",
    items: ["Google Cloud Certified", "AWS Solutions Architect", "PMP Certified", "Microsoft Certified Trainer"],
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    items: ["IT Consulting", "Software Development", "Business Analytics", "Project Management"],
  },
  {
    icon: BookMarked,
    title: "Research Areas",
    items: ["Data Science & Analytics", "Digital Transformation", "Information Security", "E-Business Systems"],
  },
]

export function QualificationsSummary() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="qualifications">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Faculty Qualifications at a Glance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our faculty members bring a powerful combination of academic excellence and real-world expertise to every
            classroom.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualifications.map((qual, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <qual.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">{qual.title}</h3>
              <ul className="space-y-2">
                {qual.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
