import type { MetadataRoute } from "next"
import { facultyMembers } from "@/data/faculty"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bbis.vercel.app"

const sectionIds = [
  "",
  "#overview",
  "#qualifications",
  "#philosophy",
  "#methods",
  "#support",
  "#faculty",
  "#connection",
  "#visiting",
  "#research",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const timestamp = new Date().toISOString()

  const sectionEntries = sectionIds.map((id) => ({
    url: `${baseUrl}/${id}`,
    lastModified: timestamp,
    changeFrequency: "weekly" as const,
    priority: id === "" ? 1 : 0.7,
  }))

  const facultyEntries = facultyMembers.map((member) => ({
    url: `${baseUrl}/#${member.slug}`,
    lastModified: timestamp,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...sectionEntries, ...facultyEntries]
}

