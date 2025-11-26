import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { facultyMembers } from "@/data/faculty"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Faculty & Teaching Approach | BBIS - KU School of Management",
  description:
    "Discover the Department of Management Informatics and Communication at Kathmandu University School of Management—meet BBIS faculty, explore modern teaching methods, and see how our curriculum blends technology, management, and communication to develop industry-ready graduates.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#1e3a5f",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Department of Management Informatics and Communication",
  "alternateName": "DoMIC, KU School of Management",
  "url": "https://bbis.vercel.app",
  "logo": "https://bbis.vercel.app/90.png",
  "sameAs": ["https://mic.ku.edu.np", "https://www.facebook.com/KUSOMofficial"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block 10 & 11, Kathmandu University",
    "addressLocality": "Dhulikhel",
    "addressRegion": "Bagmati",
    "postalCode": "45210",
    "addressCountry": "NP",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+977-11-415100",
    "contactType": "administrative",
    "email": "mic.som@ku.edu.np",
  },
}

const educationalOrgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "BBIS Program, Kathmandu University School of Management",
  "parentOrganization": {
    "@type": "CollegeOrUniversity",
    "name": "Kathmandu University",
  },
  "department": {
    "@type": "CollegeOrUniversity",
    "name": "Department of Management Informatics and Communication",
  },
  "url": "https://bbis.vercel.app",
  "areaServed": "Nepal",
  "keywords": "BBIS, Management Informatics, Kathmandu University, DoMIC, School of Management",
}

const facultyJsonLd = facultyMembers.map((member) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": member.name,
  "jobTitle": member.title,
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "Department of Management Informatics and Communication, KU School of Management",
  },
  "image": member.image.startsWith("http") ? member.image : `https://bbis.vercel.app${member.image}`,
  "description": member.degree,
  "knowsAbout": member.courses,
}))

const jsonLd = [organizationJsonLd, educationalOrgJsonLd, ...facultyJsonLd]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
