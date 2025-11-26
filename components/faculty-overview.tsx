import { CheckCircle } from "lucide-react"

export function FacultyOverview() {
  const highlights = [
    "Diverse academic backgrounds spanning information systems, computer science, and business management",
    "Industry professionals with hands-on experience in technology and consulting",
    "Active researchers contributing to academic discourse in Nepal and internationally",
    "Dedicated mentors committed to student success and career development",
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24" id="overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Excellence in Teaching, Innovation in Learning
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At the Department of Management, Informatics and Communication (DoMIC), our faculty represents the perfect blend
              of academic rigor and practical expertise. Each member brings unique perspectives from their specialized
              fields, creating a rich learning environment where theory meets practice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our professors hold advanced degrees from prestigious institutions across Nepal and abroad, with many
              possessing professional experience from globally recognized companies. This
              combination of academic credentials and industry experience ensures that students receive an education
              that is both intellectually rigorous and professionally relevant.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-card-foreground">What Sets Our Faculty Apart</h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
