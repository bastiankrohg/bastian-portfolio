import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bastian Krohg</h3>
            <p className="text-slate-300 mb-4">
              Embedded Systems Engineering student passionate about creating innovative solutions that bridge technology
              and international collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/bastiankrohg" className="text-slate-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/bastiankrohg"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:bastian.krohg@example.com" className="text-slate-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Currently</h4>
            <ul className="space-y-2 text-slate-300">
              <li>🎓 Master's Student at INSA Toulouse</li>
              <li>🌏 Exchange at Seoul National University</li>
              <li>💼 Open for internship opportunities</li>
              <li>🚀 Building innovative embedded solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Bastian Krohg
          </p>
        </div>
      </div>
    </footer>
  )
}
