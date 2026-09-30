import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EMAIL } from "@/lib/data"

export function Hero() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-medium text-slate-500">PhD candidate · University of Oslo</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                Robotics for humanitarian mine action
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                I&apos;m Bastian Krohg. I work on how drones and other robots can help survey teams find explosive
                ordnance, so land can be cleared and used again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <a href="#research">
                  Research
                  <ArrowDown className="ml-1 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-1 w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
              <Image
                src="/bas-tintin-2.png"
                alt="Illustrated portrait of Bastian Krohg"
                width={340}
                height={340}
                priority
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
