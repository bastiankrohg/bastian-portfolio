import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Globe, ChefHat } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate about technology, languages, and creating meaningful connections across cultures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm Bastian Krohg, a Master's student in <strong>Embedded Systems Engineering</strong> and
              <strong> International Management</strong> at INSA Toulouse and Toulouse School of Management. My journey
              has taken me across continents, including an exciting exchange semester to Seoul National University in
              South Korea.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm fluent in Norwegian, English, and French, and currently working on improving my Italian. Proficient in
              a series of programming languages and technologies, I love bridging the gap between technical innovation
              and global collaboration.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not coding or studying, you'll find me exploring new cuisines as an amateur chef and food geek,
              always curious about the intersection of culture and technology.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Education</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Master's in Embedded Systems & International Management
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300">Toulouse, France • Seoul, South Korea</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Languages</h3>
                    <p className="text-slate-600 dark:text-slate-300">Norwegian, English, French, Italian (learning)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                    <ChefHat className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Interests</h3>
                    <p className="text-slate-600 dark:text-slate-300">Amateur chef, food geek, cultural explorer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
