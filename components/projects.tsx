import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { featured, places } from "@/lib/data"

export function Projects() {
  const items = featured.map((f) => {
    const place = places.find((p) => p.slug === f.place)!
    const project = place.projects.find((p) => p.id === f.id)!
    return { place, project, image: f.image }
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">Projects</h2>
        <p className="text-lg text-slate-600 mb-10">Before the PhD, grouped by where I did them.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {places.map((place) => (
            <Link
              key={place.slug}
              href={`/projects/${place.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-400 hover:shadow-md transition"
            >
              <p className="text-xs font-mono text-slate-500 mb-2">{place.dates}</p>
              <h3 className="font-semibold text-slate-900 mb-1">{place.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{place.summary}</p>
              <span className="text-sm font-medium text-slate-900 inline-flex items-center gap-1">
                {place.projects.length} {place.projects.length === 1 ? "project" : "projects"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-slate-900 mb-4">Selected</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({ place, project, image }) => (
            <Link key={project.id} href={`/projects/${place.slug}#${project.id}`} className="group">
              <Card className="overflow-hidden py-0 gap-0 h-full group-hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image src={image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <CardContent className="p-5 space-y-3">
                  <p className="text-xs font-mono text-slate-500">
                    {place.name}
                    {project.date ? ` · ${project.date}` : ""}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900">{project.title}</h4>
                  <p className="text-slate-600 text-sm">{project.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
