export type FacultyMember = {
  slug: string
  name: string
  title: string
  degree: string
  image: string
  courses: string[]
  honorsAndAwards: string[]
  certifications: string[]
}

export const facultyMembers: FacultyMember[] = [
  {
    slug: "dr-khagendra-acharya",
    name: "Dr. Khagendra Acharya",
    title: "Associate Professor of English & Associate Dean, School of Management, Kathmandu University",
    degree: "Ph.D. in Literary Studies (Kathmandu University)",
    image: "/ka.webp",
    courses: ["Trauma Studies", "Narrative Inquiry", "Critical Theories", "Creative Writing", "Media and Communication Studies"],
    honorsAndAwards: [
      "MASHAV Scholarship (Israel, 2009)",
      "Scholar-in-Residence Fellowship (India, 2010)",
      "Mini-Research Grant (UGC Nepal, 2010)",
      "Manisha Shrestha Memorial PhD Scholarship (2011–2014)",
      "Erasmus Scholarship (EU)",
    ],
    certifications: [],
  },
  {
    slug: "punya-prasad-koirala",
    name: "Punya Prasad Koirala",
    title: "Assistant Professor & Coordinator, DoMIC",
    degree: "M.Phil in English (IACER, Pokhara University)",
    image: "/pk.jpeg",
    courses: ["Communication Skills", "Compulsory English", "Academic Writing"],
    honorsAndAwards: ["XIV Theory/Praxis Course (University of Hyderabad, 2016)"],
    certifications: [],
  },
  {
    slug: "prof-binod-krishna-shrestha",
    name: "Prof. Binod Krishna Shrestha",
    title: "Professor",
    degree: "Expertise in Entrepreneurship, Small Business, and Marketing (35 years experience)",
    image: "/bks.webp",
    courses: ["Entrepreneurship", "Small Business Management", "Marketing", "Business Ethics", "Corporate Social Responsibility"],
    honorsAndAwards: [],
    certifications: [],
  },
  {
    slug: "ramesh-ghimire",
    name: "Ramesh Ghimire",
    title: "Assistant Professor & Associate Director, Student Welfare Directorate, KU",
    degree: "MPhil in Finance (KUSOM), MBS in Finance (TU), Graduate Diploma in Higher Education (KUSoED, ongoing)",
    image: "/rg.webp",
    courses: ["Managerial Finance", "Financial Accountancy", "Business Research Methods", "Engineering Economy"],
    honorsAndAwards: [
      "Program Lead, Startups and Incubation (KU-IRDP/NTIC)",
      "Advisor, Leo Club of Kathmandu University",
      "Advisor, Society of Business Information System",
      "Advisor, Kathmandu University Indoors Club",
    ],
    certifications: ["MS Excel Workshops", "Financial Literacy Programs", "Stock Market Training"],
  },
  {
    slug: "yash-raj-lamsal",
    name: "Yash Raj Lamsal",
    title: "Assistant Professor of Economics, DoMIC, KUSOM",
    degree: "Master's in Economics (Tribhuvan University)",
    image: "/yrl.webp",
    courses: [
      "Microeconomics",
      "Macroeconomics",
      "Critical Thinking and Problem-Solving",
      "Logic",
      "Environmental Economics",
      "Engineering Economics",
    ],
    honorsAndAwards: [],
    certifications: [],
  },
  {
    slug: "haris-c-adhikari",
    name: "Haris C. Adhikari",
    title: "Assistant Professor of English and Communication, DoMIC, KUSOM",
    degree: "MA in English and American Literature (2008), MPhil in English Language Education (2021)",
    image: "/hca.webp",
    courses: [
      "Professional and Technical Communication",
      "English Language and Literature",
      "Academic Writing",
      "Intercultural Communication",
      "Business and Legal Communication",
    ],
    honorsAndAwards: [
      "Full Grant Scholarship, Conference on Asian Linguistic Anthropology (Wenner-Gren Foundation, USA, 2019)",
      "International Conference Grants (UGC Nepal, 2018 & 2023)",
      "Faculty Development Fund for MPhil Studies (Kathmandu University, 2019)",
    ],
    certifications: [],
  },
  {
    slug: "durga-prasad-dhakal",
    name: "Durga Prasad Dhakal",
    title: "Assistant Professor",
    degree: "MPhil in Mathematics Education, Master in Business Studies (MBS)",
    image: "/dpd.webp",
    courses: ["Quantitative Techniques", "Operation Management", "Business Mathematics"],
    honorsAndAwards: [
      "1300 Euro Award, Conceptual Paper: 'Philosophy of Mathematics Education' (International Congress of Mathematics Education, Hamburg University, Germany, 2016)",
      "Best Performer Award, Mixed Methods Application in Action Research Workshop (SAGE & Vienna University, 2018)",
      "Program Initiator & Advisor, Build to Solve",
      "Program Initiator & Advisor, KUMERCH",
    ],
    certifications: [],
  },
  {
    slug: "narayan-niroula",
    name: "Narayan Niroula",
    title: "Assistant Professor of IT, DoMIC, KUSOM",
    degree: "PhD Scholar",
    image: "/nn.webp",
    courses: ["ICT for BBIS Students", "IT Course Development"],
    honorsAndAwards: [],
    certifications: ["CompTIA A+", "CompTIA Security+", "CompTIA Network+"],
  },
  {
    slug: "birendra-vaidya",
    name: "Birendra Vaidya",
    title: "Assistant Professor",
    degree: "M.Phil in Management (Tribhuvan University), PhD Scholar (Nepal Open University)",
    image: "/birendra.webp",
    courses: ["Marketing", "Business Management", "Entrepreneurship"],
    honorsAndAwards: [],
    certifications: [],
  },
]

