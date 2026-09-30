import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Research } from "@/components/research"
import { Footage } from "@/components/footage"
import { Background } from "@/components/background"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Research />
        <Footage />
        <Background />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
