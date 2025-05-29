import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "SenseInside - Handheld NIR instrument for sub-surface",
      description:
        "Development and commercialization efforts on the SenseInside project at SINTEF Digital in the Smart Sensors and Microsystems group.",
      image: "/senseinside.png?height=400&width=400",
      technologies: ["NIR Spectroscopy", "Embedded Systems", "UI/UX", "IoT", "Food Research"],
      liveUrl: "https://prosjektbanken.forskningsradet.no/project/FORISS/341632",
      date: "2025",
    },
    {
      title: "Autonomous Robot Navigation",
      description:
        "Embedded control system for autonomous robot navigation using computer vision and sensor fusion, implemented during Seoul National University exchange.",
      image: "/rover.jpeg?height=400&width=400",
      technologies: ["Python", "OpenCV", "ROS", "Raspberry Pi", "Machine Learning"],
      githubUrl: "https://github.com/bastiankrohg/AutoPi",
      date: "2025",
    },
    {
      title: "IoT Environmental Monitoring System",
      description:
        "A comprehensive embedded system for real-time environmental monitoring using ARM Cortex-M microcontrollers, featuring wireless connectivity and cloud data visualization.",
      image: "/iot_plant.png?height=400&width=400",
      technologies: ["C++", "ARM Cortex", "IoT", "Cloud APIs", "Sensors"],
      githubUrl: "https://github.com/bastiankrohg/arduino",
      date: "2024",
    },
    {
      title: "LeRobot Hackathon – Autonomous Robotics",
      description:
        "Explored state-of-the-art robotics working with with real-time teleoperation, imitation learning and reinforcement learning demos.",
      image: "/lerobot2.png", // Replace with a real image
      technologies: ["HuggingFace", "Robotics", "Teleoperation", "Imitation Learning", "Reinforcement Learning"],
      liveUrl: "https://github.com/huggingface/lerobot_hackathon_oct2024", // Optional, or link to a post/hackathon page
      date: "2024",
    },
    {
        title: "Startup Website Proofs of Concept",
        description:
            "Developed two full-stack MVP websites for early-stage startups: one focused on men's hair care e-commerce in Toulouse, and the other a digital platform for food delivery optimization. Both projects included design, frontend, backend, and deployment.",
        image: "/desktop.jpeg",
        technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB", "Stripe"],
        liveUrls: [
        { label: "Le Beau", url: "https://beau.bastiankrohg.com" },
        { label: "MetaManager", url: "https://metamanager.bastiankrohg.com" },
        ],
        date: "2024",
    },
    {
      title: "RC Sailboat Control System",
      description:
        "STM32-based control system for an RC sailboat using C and ARM Assembly, integrating accelerometer sensing, heading control, wind direction sensing and automatic rigging adjustments and safety features.",
      image: "/voilier_stm32.jpeg?height=400&width=400",
      technologies: ["STM32", "C", "Assembly", "ARM Cortex", "Sailing", "Sensors", "Control Systems"],
      liveUrl: "https://github.com/INSA-GEI/Voilier",
      date: "2023",
    },
  ]
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of engineering projects spanning embedded systems, web development, and international
            collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="outline" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    <a href={project.githubUrl}>View Code</a>
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    {project.liveUrls?.map((liveUrl, urlIndex) => (
                      <Button key={urlIndex} size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <a href={liveUrl.url}>{liveUrl.label}</a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-4 h-4 mr-2" />
            <a href="https://github.com/bastiankrohg">View All Projects on GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

