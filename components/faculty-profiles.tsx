import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const faculty = [
  {
    name: "Dr. Khagendra Acharya",
    title: "Associate Professor of English & Associate Dean, School of Management, Kathmandu University",
    degree: "Ph.D. in Literary Studies (Kathmandu University)",
    image: "/ka.jpg",
    courses: [
      "Trauma Studies",
      "Narrative Inquiry",
      "Critical Theories",
      "Creative Writing",
      "Media and Communication Studies"
    ],
    honorsAndAwards: [
      "MASHAV Scholarship (Israel, 2009)",
      "Scholar-in-Residence Fellowship (India, 2010)",
      "Mini-Research Grant (UGC Nepal, 2010)",
      "Manisha Shrestha Memorial PhD Scholarship (2011–2014)",
      "Erasmus Scholarship (EU)"
    ],
    certifications: []
  },
  {
    name: "Punya Prasad Koirala",
    title: "Assistant Professor & Coordinator, DoMIC",
    degree: "M.Phil in English (IACER, Pokhara University)",
    image: "/pk.jpeg",
    courses: [
      "Communication Skills",
      "Compulsory English",
      "Academic Writing",
    ],
    honorsAndAwards: [
      "XIV Theory/Praxis Course (University of Hyderabad, 2016)"
    ],
    certifications: []
  },
  {
    name: "Prof. Binod Krishna Shrestha",
    title: "Professor",
    degree: "Expertise in Entrepreneurship, Small Business, and Marketing (35 years experience)",
    image: "/bks.png",
    courses: [
      "Entrepreneurship",
      "Small Business Management",
      "Marketing",
      "Business Ethics",
      "Corporate Social Responsibility"
    ],
    honorsAndAwards: [],
    certifications: []
  },  
  {
    name: "Ramesh Ghimire",
    title: "Assistant Professor & Associate Director, Student Welfare Directorate, KU",
    degree: "MPhil in Finance (KUSOM), MBS in Finance (TU), Graduate Diploma in Higher Education (KUSoED, ongoing)",
    image: "/rg.jpg",
    courses: [
      "Managerial Finance",
      "Financial Accountancy",
      "Business Research Methods",
      "Engineering Economy",
    ],
    honorsAndAwards: [
      "Program Lead, Startups and Incubation (KU-IRDP/NTIC)",
      "Advisor, Leo Club of Kathmandu University",
      "Advisor, Society of Business Information System",
      "Advisor, Kathmandu University Indoors Club",
    ],
    certifications: [
      "MS Excel Workshops",
      "Financial Literacy Programs",
      "Stock Market Training"
    ]
  },
  {
    name: "Yash Raj Lamsal",
    title: "Assistant Professor of Economics, DoMIC, KUSOM",
    degree: "Master's in Economics (Tribhuvan University)",
    image: "/yrl.jpg",
    courses: [
      "Microeconomics",
      "Macroeconomics",
      "Critical Thinking and Problem-Solving",
      "Logic",
      "Environmental Economics",
      "Engineering Economics"
    ],
    honorsAndAwards: [],
    certifications: []
  },
  {
    name: "Haris C. Adhikari",
    title: "Assistant Professor of English and Communication, DoMIC, KUSOM",
    degree: "MA in English and American Literature (2008), MPhil in English Language Education (2021)",
    image: "/hca.jpg",
    courses: [
      "Professional and Technical Communication",
      "English Language and Literature",
      "Academic Writing",
      "Intercultural Communication",
      "Business and Legal Communication"
    ],
    honorsAndAwards: [
      "Full Grant Scholarship, Conference on Asian Linguistic Anthropology (Wenner-Gren Foundation, USA, 2019)",
      "International Conference Grants (UGC Nepal, 2018 & 2023)",
      "Faculty Development Fund for MPhil Studies (Kathmandu University, 2019)"
    ],
    certifications: []
  },
  {
    name: "Durga Prasad Dhakal",
    title: "Assistant Professor",
    degree: "MPhil in Mathematics Education, Master in Business Studies (MBS)",
    image: "/dpd.jpg",
    courses: [
      "Quantitative Techniques",
      "Operation Management",
      "Business Mathematics",
    ],
    honorsAndAwards: [
      "1300 Euro Award, Conceptual Paper: 'Philosophy of Mathematics Education' (International Congress of Mathematics Education, Hamburg University, Germany, 2016)",
      "Best Performer Award, Mixed Methods Application in Action Research Workshop (SAGE & Vienna University, 2018)",
      "Program Initiator & Advisor, Build to Solve",
      "Program Initiator & Advisor, KUMERCH"
    ],
    certifications: []
  },
  {
    name: "Narayan Niroula",
    title: "Assistant Professor of IT, DoMIC, KUSOM",
    degree: "PhD Scholar",
    image: "/nn.jpg",
    courses: [
      "ICT for BBIS Students",
      "IT Course Development",
    ],
    honorsAndAwards: [],
    certifications: [
      "CompTIA A+",
      "CompTIA Security+",
      "CompTIA Network+"
    ]
  },
  {
    name: "Birendra Vaidya",
    title: "Assistant Professor",
    degree: "M.Phil in Management (Tribhuvan University), PhD Scholar (Nepal Open University)",
    image: "/professional-headshot-male-lecturer-asian-young-ca.jpg",
    courses: [
      "Marketing",
      "Business Management",
      "Entrepreneurship",
    ],
    honorsAndAwards: [],
    certifications: []
  }
  
  
    
]

export function FacultyProfiles() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24" id="faculty">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Faculty Members</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Get to know the dedicated educators who bring expertise, passion, and real-world experience to your
              learning journey.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Professor ${member.name}`}
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
