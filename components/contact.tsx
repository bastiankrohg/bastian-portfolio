import { Mail, Github, Linkedin } from "lucide-react"
import { EMAIL, GITHUB, LINKEDIN, PERSONAL_EMAIL } from "@/lib/data"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">Contact</h2>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-3 text-xl sm:text-3xl font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 break-all"
        >
          <Mail className="w-6 h-6 shrink-0" />
          {EMAIL}
        </a>
        <div className="flex flex-wrap gap-6 mt-6 text-slate-600">
          <a href={LINKEDIN} className="inline-flex items-center gap-2 hover:text-slate-900">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={GITHUB} className="inline-flex items-center gap-2 hover:text-slate-900">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href={`mailto:${PERSONAL_EMAIL}`} className="hover:text-slate-900">
            Personal email
          </a>
        </div>
      </div>
    </section>
  )
}
