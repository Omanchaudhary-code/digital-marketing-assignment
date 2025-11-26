import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Curriculum",
    href: "https://mic.ku.edu.np/static-page/bbis-course-catalogue-2021--present",
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Labs & Resources", href: "/labs" },
  { label: "Student Life", href: "/student-life" },
  { label: "Research", href: "/research" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-background">
            <Image
              src="/90.png"
              alt="Kathmandu University School of Management crest"
              width={40}
              height={40}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              Department of Management Informatics and Communication
            </span>
            <span className="text-xs text-muted-foreground">School of Management</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
                item.label === "Faculty" ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Explore Programs
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-card">
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 bg-primary hover:bg-primary/90">Explore Programs</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
