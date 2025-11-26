import { Clock, MessageSquare, Compass, ThumbsUp } from "lucide-react"
import Link from "next/link"

const supportFeatures = [
  {
    icon: Clock,
    title: "Open Consultation Hours",
    description:
      "Faculty members maintain regular office hours dedicated to one-on-one student consultations, ensuring personalized guidance is always accessible.",
  },
  {
    icon: MessageSquare,
    title: "Approachable Faculty",
    description:
      "Our professors maintain an open-door policy, encouraging students to seek help, discuss ideas, or simply have conversations about their academic journey.",
  },
  {
    icon: Compass,
    title: "Mentorship Programs",
    description:
      "Structured mentorship pairs students with faculty advisors who provide guidance on academic planning, career direction, and personal development.",
  },
  {
    icon: ThumbsUp,
    title: "Continuous Feedback",
    description:
      "Regular feedback on assignments and projects helps students understand their strengths and areas for improvement, fostering continuous growth.",
  },
]

export function StudentSupport() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="support">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6">
                  <feature.icon className="mb-3 h-8 w-8 text-accent" />
                  <h3 className="mb-2 font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">A Support System That Cares</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At DoMIC, we understand that academic success extends beyond the classroom. Our faculty is deeply committed
              to supporting each student&apos;s unique journey, whether that means providing extra help with challenging
              concepts, offering career advice, or simply being a sounding board for new ideas.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The approachable nature of our faculty creates an environment where students feel comfortable asking
              questions, taking intellectual risks, and seeking guidance. This supportive atmosphere is a cornerstone of
              the BBIS experience and contributes significantly to our students&apos; success.
            </p>

            <div className="mt-8 rounded-xl bg-accent/10 p-6">
              <p className="italic text-muted-foreground">
                &ldquo;The faculty here genuinely cares about our success. My advisor helped me navigate not just my
                courses, but also internship opportunities and career planning. That support made all the
                difference.&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">— BBIS Graduate, Class of 2024</p>
            </div>

            <div className="mt-6">
              <Link href="/student-life" className="inline-flex items-center gap-2 text-accent hover:underline">
                See what students say about our teaching approach
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
