"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { GITHUB, LINKEDIN } from "@/lib/data"

const navItems = [
  { id: "research", label: "Research" },
  { id: "background", label: "Background" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const isHome = usePathname() === "/"

  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => {
      const y = window.scrollY + 100
      let current = ""
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= y) current = item.id
      }
      setActiveSection(window.scrollY < 50 ? "" : current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const linkClass = (id: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      activeSection === id
        ? "text-slate-900 bg-slate-100"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            Bastian Krohg
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navItems.map((item) => (
              <Link key={item.id} href={`/#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={GITHUB} aria-label="GitHub" className="text-slate-500 hover:text-slate-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={LINKEDIN} aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200 flex flex-col gap-1" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={linkClass(item.id)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-3 px-3">
              <a href={GITHUB} aria-label="GitHub" className="text-slate-500 hover:text-slate-900">
                <Github className="w-5 h-5" />
              </a>
              <a href={LINKEDIN} aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
