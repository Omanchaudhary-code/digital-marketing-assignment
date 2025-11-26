import { Quote } from "lucide-react"
import Link from "next/link"

export function TeachingPhilosophy() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="philosophy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Teaching Philosophy</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At KU School of Management, we believe that the best learning happens when students are actively engaged
              in solving real-world problems. Our teaching philosophy centers on creating an environment where curiosity
              is encouraged, critical thinking is developed, and practical skills are honed for the modern workplace.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We embrace a student-centered approach where faculty serve as facilitators and mentors rather than mere
              lecturers. Through interactive seminars, industry workshops, and guest lectures from leading
              professionals, we ensure that our students gain exposure to the latest trends and technologies in business
              information systems.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our commitment to practice-oriented education means that every course incorporates hands-on projects, case
              studies, and experiential learning opportunities. This approach not only deepens understanding but also
              builds the confidence and competence that employers value.
            </p>

            <div className="mt-8">
              <Link
                href="https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                Explore our curriculum structure
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center lg:col-span-2">
            <div className="relative rounded-2xl bg-primary p-8 text-primary-foreground">
              <Quote className="mb-4 h-10 w-10 text-accent opacity-80" />
              <blockquote className="font-serif text-xl italic leading-relaxed">
                &ldquo;Education is not the filling of a pail, but the lighting of a fire. At DoMIC, we strive to ignite
                that passion for learning and innovation in every student who walks through our doors.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-primary-foreground/70">— Department Vision Statement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
