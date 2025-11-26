import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "About BBIS", href: "/about" },
  {
    label: "Curriculum",
    href: "https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present",
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Research", href: "/research" },
  { label: "Student Life", href: "/student-life" },
  { label: "Contact", href: "/contact" },
]

const programLinks = [
  { label: "Admission Requirements", href: "/admissions" },
  { label: "Fee Structure", href: "/fees" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Academic Calendar", href: "/calendar" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">BBIS</span>
                <span className="text-xs text-muted-foreground">KU School of Management</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Department of Management and Information Systems, Kathmandu University School of Management
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Program Info</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Dhulikhel, Kavre, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+977-11-661399</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>som@ku.edu.np</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kathmandu University School of Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
