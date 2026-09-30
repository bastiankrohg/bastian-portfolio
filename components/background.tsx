import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { background, skills } from "@/lib/data"

export function Background() {
  return (
    <section id="background" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Background</h2>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {background.map((item) => (
              <li key={item.title + item.org} className="py-4 flex flex-col sm:flex-row sm:justify-between gap-1">
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">
                    {item.org}
                    {item.place && (
                      <>
                        {" · "}
                        <Link href={`/projects/${item.place}`} className="underline underline-offset-2 hover:text-slate-900">
                          Projects
                        </Link>
                      </>
                    )}
                  </p>
                </div>
                <span className="text-sm text-slate-500 font-mono shrink-0 sm:pt-1">{item.dates}</span>
              </li>
            ))}
          </ol>

          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Badge key={s} variant="secondary" className="bg-white border-slate-200">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
