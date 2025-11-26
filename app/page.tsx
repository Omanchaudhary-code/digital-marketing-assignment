import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FacultyOverview } from "@/components/faculty-overview"
import { QualificationsSummary } from "@/components/qualifications-summary"
import { TeachingPhilosophy } from "@/components/teaching-philosophy"
import { TeachingMethods } from "@/components/teaching-methods"
import { StudentSupport } from "@/components/student-support"
import { FacultyStudentConnection } from "@/components/faculty-student-connection"
import { VisitingFaculty } from "@/components/visiting-faculty"
import { ResearchExcellence } from "@/components/research-excellence"
import { FacultyProfiles } from "@/components/faculty-profiles"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Faculty | BBIS Kathmandu University",
  description:
    "Meet the BBIS faculty at Kathmandu University School of Management—experts blending information systems, management, and communication to mentor future leaders.",
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FacultyOverview />
        <QualificationsSummary />
        <TeachingPhilosophy />
        <TeachingMethods />
        <StudentSupport />
        <FacultyProfiles />
        <FacultyStudentConnection />
        <VisitingFaculty />
        <ResearchExcellence />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
