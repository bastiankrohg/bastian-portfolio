import { Card, CardContent } from "@/components/ui/card"
import { Plane, ScanEye, Network, Users } from "lucide-react"

const interests = [
  { icon: Plane, title: "Aerial survey", text: "Drones for mapping and prioritising suspected hazardous areas." },
  { icon: ScanEye, title: "Perception", text: "Sensing that works in vegetation, rough terrain and changing weather." },
  { icon: Network, title: "Swarm autonomy", text: "Several robots covering ground together." },
  { icon: Users, title: "Field use", text: "Tools that fit how mine action teams already work." },
]

export function Research() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Research</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Landmines and other explosive ordnance stay dangerous long after a conflict ends. My PhD looks at how
              robotic systems can support the people who survey and clear that land.
            </p>
            <p className="text-slate-600">
              Robotics and Autonomous Systems group, Department of Technology Systems, University of Oslo. Since
              November 2025.
            </p>
            <p className="text-sm text-slate-500">Results will be posted here once published.</p>
            {/* Research workspace (auth-protected, hosted separately). Uncomment once uxo.bastiankrohg.com is live.
            <p className="text-sm text-slate-500">
              Collaborators: <a className="underline" href="https://uxo.bastiankrohg.com/">research workspace</a>
            </p>
            */}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {interests.map((item) => (
              <Card key={item.title} className="py-0">
                <CardContent className="p-5 space-y-2">
                  <item.icon className="w-5 h-5 text-slate-500" />
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
