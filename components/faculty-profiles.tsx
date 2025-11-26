import Image from "next/image"
import Link from "next/link"
import { facultyMembers } from "@/data/faculty"

export function FacultyProfiles() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="faculty">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">BBIS Faculty Profiles at DoMIC</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Get to know the dedicated educators who bring expertise, passion, and real-world experience to your
              learning journey.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Learn how faculty collaborate across the{" "}
              <Link href="/about" className="text-accent underline-offset-4 hover:underline">
                Department of Management Informatics and Communication
              </Link>{" "}
              and support students through{" "}
              <Link href="/student-life" className="text-accent underline-offset-4 hover:underline">
                BBIS student life initiatives
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((member) => (
            <div
              key={member.slug}
              id={member.slug}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, ${member.title} at BBIS Kathmandu University`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{member.name}</h3>
                <p className="text-sm text-accent">{member.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{member.degree}</p>

                {/* Honors and Awards */}
                {member.honorsAndAwards.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Honors and Awards
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.honorsAndAwards.map((award, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Courses / Certifications */}
                {member.courses.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Courses
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.courses.map((course, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {member.certifications.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Certifications
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
