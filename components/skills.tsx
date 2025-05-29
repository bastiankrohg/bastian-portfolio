import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Globe, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C/C++", "JavaScript", "TypeScript", "Java", "VHDL", "Assembly"],
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Embedded Systems",
      icon: Cpu,
      skills: ["ARM Cortex", "FPGA", "Microcontrollers", "Real-time Systems", "IoT", "PCB Design"],
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["React", "Next.js", "Node.js", "HTML/CSS", "REST APIs", "Database Design"],
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Docker", "Linux", "MATLAB", "Altium Designer", "VS Code"],
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning embedded systems, software development, and international collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
