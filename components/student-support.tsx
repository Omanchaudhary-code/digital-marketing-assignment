import { Clock, MessageSquare, Compass, ThumbsUp } from "lucide-react";
import Link from "next/link";

const supportFeatures = [
  {
    icon: Clock,
    title: "Consultation Hours",
    description:
      "Faculty members offer dedicated consultation hours where students can seek help with coursework, clarify concepts, review assignments, and discuss academic challenges in a supportive one-on-one setting.",
  },
  {
    icon: MessageSquare,
    title: "Approachable Teachers",
    description:
      "BBIS instructors maintain a student-first, open-door approach. Whether inside or outside the classroom, faculty encourage curiosity and create a learning space where questions and discussions are always welcomed.",
  },
  {
    icon: Compass,
    title: "Mentorship & Guidance",
    description:
      "Every BBIS student receives structured mentorship from faculty who support academic planning, personal development, and project direction—ensuring each learner has a clear and confident pathway throughout the program.",
  },
  {
    icon: ThumbsUp,
    title: "Constructive Feedback",
    description:
      "Students receive continuous, actionable feedback on assignments, presentations, and projects. This helps them understand expectations, improve performance, and track their progress throughout the program.",
  },
];

export function StudentSupport() {
  return (
    <section className="py-20" id="support">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2">

        {/* Feature Grid */}
        <div className="order-2 lg:order-1 grid gap-4 sm:grid-cols-2">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-6"
            >
              <feature.icon className="h-8 w-8 mb-3 text-accent" />
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-3xl font-bold">
            Faculty Support That Empowers Every BBIS Student
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            At BBIS, faculty members play a central role in shaping the academic and personal 
            growth of students. Beyond classroom teaching, our instructors actively guide learners 
            through complex concepts, hands-on projects, and career decisions—ensuring that every 
            student feels supported throughout their journey.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            With a culture built on approachability and mentorship, students are encouraged to 
            ask questions, explore new ideas, and engage deeply with course material. This supportive 
            environment helps them build confidence, develop critical thinking skills, and take 
            meaningful intellectual risks.
          </p>

          <div className="mt-8 bg-accent/10 p-6 rounded-xl">
            <p className="italic text-muted-foreground">
              “My mentor helped me understand my strengths, choose the right electives, and prepare 
              for my internship. Their guidance made my BBIS experience truly transformative.”
            </p>
            <p className="mt-3 text-sm font-medium">— BBIS Graduate, Class of 2024</p>
          </div>

          <div className="mt-6">
            <Link
              href="/student-life"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              Explore student experiences <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
