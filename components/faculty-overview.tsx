import { CheckCircle } from "lucide-react"

export function FacultyOverview() {
  const highlights = [
    "A multidisciplinary team with backgrounds in information systems, technology, business, and communication",
    "Faculty with real-world experience in tech companies, consulting firms, and research organizations",
    "Active contributors to national and international research, publications, and innovation projects",
    "A mentoring-first culture that prioritizes student growth, academic guidance, and career readiness",
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24" id="overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT: MAIN TEXT */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              DoMIC Faculty: Inspiring, Experienced, and Student-Focused
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At the Department of Management, Informatics and Communication (DoMIC), our faculty forms the heart of the 
              BBIS learning experience. They bring a unique blend of academic excellence and hands-on professional 
              expertise — ensuring students learn from people who both teach and practice their field.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              With advanced degrees from top institutions in Nepal and abroad, and industry experience across tech, 
              consulting, and innovative startups, our faculty members turn classrooms into real-world learning 
              environments. Their approach helps students build skills that are relevant, practical, and future-ready.
            </p>
          </div>

          {/* RIGHT: CARD LIST */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-card-foreground">
                What Makes Our Faculty Exceptional
              </h3>

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
