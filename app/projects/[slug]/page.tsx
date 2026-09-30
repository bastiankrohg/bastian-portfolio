import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { places } from "@/lib/data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const place = places.find((p) => p.slug === slug)
  if (!place) return {}
  return { title: place.name, description: `${place.name}: ${place.summary}` }
}

export default async function PlacePage({ params }: Props) {
  const { slug } = await params
  const index = places.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()
  const place = places[index]
  const prev = places[(index - 1 + places.length) % places.length]
  const next = places[(index + 1) % places.length]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link href="/#projects" className="text-sm text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 mb-6">
            <ArrowLeft className="w-4 h-4" /> Projects
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">{place.name}</h1>
          <p className="text-xl text-slate-600 mb-4 max-w-2xl">{place.intro}</p>
          <p className="text-sm font-mono text-slate-500 mb-10">
            {[place.role, place.location, place.dates].filter(Boolean).join(" · ")}
          </p>

          {place.photo && (
            <figure className="mb-12">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image src={place.photo.src} alt={place.photo.caption} fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" priority />
              </div>
              <figcaption className="text-sm text-slate-500 mt-2">{place.photo.caption}</figcaption>
            </figure>
          )}

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {place.projects.map((project) => (
              <article key={project.id} id={project.id} className="py-6 grid sm:grid-cols-[1fr_220px] gap-4 scroll-mt-20">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">
                    {project.title}
                    {project.date && <span className="ml-2 text-sm font-mono font-normal text-slate-500">{project.date}</span>}
                  </h2>
                  <p className="text-slate-600">{project.text}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {project.links.map((l) => (
                        <a key={l.url} href={l.url} className="inline-flex items-center gap-1 text-slate-900 underline underline-offset-2 decoration-slate-300 hover:decoration-slate-900">
                          {l.label} <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <nav className="flex justify-between gap-4 mt-12 text-sm" aria-label="Other places">
            <Link href={`/projects/${prev.slug}`} className="text-slate-500 hover:text-slate-900">
              <span className="inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Previous</span>
              <span className="block text-base font-semibold text-slate-900">{prev.name}</span>
            </Link>
            <Link href={`/projects/${next.slug}`} className="text-right text-slate-500 hover:text-slate-900">
              <span className="inline-flex items-center gap-1">Next <ArrowRight className="w-4 h-4" /></span>
              <span className="block text-base font-semibold text-slate-900">{next.name}</span>
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}
