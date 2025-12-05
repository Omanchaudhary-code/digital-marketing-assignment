import { Users, Award, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-28 lg:py-32">
      <div
        className="absolute inset-0 opacity-10 background-cover background-center background-no-repeat"
        style={{ backgroundImage: "url('https://kusomalumni.org/static/images/icons/kusombuilding.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            DoMIC · Kathmandu University School of Management
          </p>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="block text-balance">
              Meet the Faculty Behind the BBIS Program
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            Learn from highly qualified educators, researchers, and industry professionals who are driving innovation in
            Business Information Systems and shaping future technology leaders at Kathmandu University.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
            <Users className="mb-3 h-8 w-8 text-accent" />
            <span className="text-3xl font-bold text-primary-foreground">15+</span>
            <span className="mt-1 text-sm text-primary-foreground/70">Dedicated Faculty Members</span>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
            <Award className="mb-3 h-8 w-8 text-accent" />
            <span className="text-3xl font-bold text-primary-foreground">80%</span>
            <span className="mt-1 text-sm text-primary-foreground/70">PhD & Advanced Degree Holders</span>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
            <BookOpen className="mb-3 h-8 w-8 text-accent" />
            <span className="text-3xl font-bold text-primary-foreground">50+</span>
            <span className="mt-1 text-sm text-primary-foreground/70">Years of Combined Expertise</span>
          </div>
        </div>
      </div>
    </section>
  )
}
