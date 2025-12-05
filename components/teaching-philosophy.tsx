import { Quote } from "lucide-react"
import Link from "next/link"

export function TeachingPhilosophy() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="philosophy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

          {/* Text Content */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              DoMIC Teaching Philosophy for the BBIS Program
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At the Department of Management, Informatics and Communication (DoMIC), meaningful learning begins with 
              active engagement. Our teaching philosophy emphasizes curiosity, critical thinking, and the application 
              of knowledge to real-world challenges—core elements that help students thrive in today’s dynamic digital 
              and business landscape.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We follow a student-centered learning approach where faculty act not only as instructors, but also as 
              mentors and facilitators. Through interactive discussions, workshops, and exposure to industry practices, 
              students gain practical understanding that complements theoretical foundations.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every course is designed with hands-on components such as case studies, collaborative projects, 
              simulations, and experiential tasks. This practice-oriented model empowers students to build confidence, 
              develop problem-solving abilities, and prepare for careers in business information systems and related fields.
            </p>

            <div className="mt-8">
              <Link
                href="https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                Explore the BBIS curriculum structure
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Quote Box */}
          <div className="flex items-center lg:col-span-2">
            <div className="relative rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
              <Quote className="mb-4 h-10 w-10 text-accent opacity-80" />
              
              <blockquote className="font-serif text-xl italic leading-relaxed">
                &ldquo;Education is not about the passive transfer of information—it’s about inspiring the motivation to 
                explore, build, and innovate. At DoMIC, our approach aims to spark that transformative learning journey 
                in every student.&rdquo;
              </blockquote>

              <p className="mt-4 text-sm text-primary-foreground/70">— Teaching & Learning Approach Statement</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
