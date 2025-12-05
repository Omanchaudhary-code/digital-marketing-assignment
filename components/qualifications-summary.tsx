import { GraduationCap, Award, Briefcase, BookMarked } from "lucide-react"

const qualifications = [
  {
    icon: GraduationCap,
    title: "Academic Credentials",
    items: [
      "Advanced degrees across Information Systems, Computer Science, and Management",
      "Faculty with postgraduate and doctoral-level qualifications",
      "Educators trained in globally recognized academic institutions",
      "Strong foundation in both theoretical and applied learning",
    ],
  },
  {
    icon: Award,
    title: "Professional Certifications",
    items: [
      "Technology and cloud-computing certifications",
      "Industry-recognized credentials in project and process management",
      "Specializations in data analytics, cybersecurity, and digital tools",
      "Continuous professional development to stay industry-relevant",
    ],
  },
  {
    icon: Briefcase,
    title: "Industry Exposure",
    items: [
      "Hands-on experience in IT services and software development",
      "Consulting background across business and tech domains",
      "Involvement in real-world digital transformation projects",
      "Faculty who connect classroom learning with industry trends",
    ],
  },
  {
    icon: BookMarked,
    title: "Research Contributions",
    items: [
      "Active engagement in academic research and publications",
      "Focus areas spanning data science, digital innovation, and MIS",
      "Participation in conferences and scholarly communities",
      "Research-driven teaching ensuring updated learning materials",
    ],
  },
]

export function QualificationsSummary() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="qualifications">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Faculty Qualifications That Strengthen Student Learning
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The DoMIC faculty team brings together academic depth, industry knowledge, and research-driven insight—creating a learning environment designed for real impact.
          </p>
        </div>

        {/* Cards */}
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
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
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
