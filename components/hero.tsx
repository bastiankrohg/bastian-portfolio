import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Hey, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  @bastiankrohg
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Embedded Systems Engineering student passionate about creating innovative solutions that bridge hardware
                and software. Currently exploring the intersection of technology and international management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center">
                  Check out my projects
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact" className="flex items-center">
                  Get in touch
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/bastiankrohg"
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/bastiankrohg"
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/bas-tintin-2.png?height=400&width=400"
                  alt="Bastian Krohg - Embedded Systems Engineer"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
