import { Building2, Users2, Calendar } from "lucide-react"

const workshops = [
  {
    title: "Network Design & IP Routing",
    speaker: "Industry Specialist from ISMS, Kathmandu University",
    description:
      "Practical training on modern networking systems, routing concepts, and real-world infrastructure scenarios.",
  },
  {
    title: "Financial Literacy & Smart Money Management",
    speaker: "Financial Literacy Expert, Agricultural Development Bank",
    description:
      "A hands-on session covering budgeting, savings, banking fundamentals, and financial decision-making for young professionals.",
  },
  {
    title: "Employment Training & Career Readiness",
    speaker: "Mr. Prayag Raj Upadhya & Mr. Kshtij Jung Thapa — Job Dynamics",
    description:
      "A practical workshop focused on resume building, interview skills, professional etiquette, and workplace competencies.",
  },
]

export function VisitingFaculty() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="visiting">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT SECTION */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              DoMIC Industry Connections & Visiting Faculty
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              BBIS students benefit from regular interactions with industry professionals, visiting scholars, and expert
              trainers who bring real-world insights into the classroom. These engagements bridge academic concepts with
              practical industry applications, helping students stay aligned with emerging tools, trends, and challenges.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our partnerships with leading organizations in Nepal and abroad enable us to host specialized workshops,
              technical sessions, and expert-led seminars that enrich the learning experience and boost professional readiness.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <Building2 className="mx-auto mb-2 h-8 w-8 text-accent" />
                <span className="text-2xl font-bold text-foreground">20+</span>
                <p className="text-sm text-muted-foreground">Partner Companies</p>
              </div>
              <div className="text-center">
                <Users2 className="mx-auto mb-2 h-8 w-8 text-accent" />
                <span className="text-2xl font-bold text-foreground">15+</span>
                <p className="text-sm text-muted-foreground">Guest Lectures/Year</p>
              </div>
              <div className="text-center">
                <Calendar className="mx-auto mb-2 h-8 w-8 text-accent" />
                <span className="text-2xl font-bold text-foreground">10+</span>
                <p className="text-sm text-muted-foreground">Workshops/Year</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Recent DoMIC Workshops & Guest Sessions
            </h3>

            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <p className="font-semibold text-card-foreground">{workshop.title}</p>
                  <p className="mt-1 text-sm text-accent">{workshop.speaker}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{workshop.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
