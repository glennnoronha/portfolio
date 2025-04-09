import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, Trophy } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="pt-0 pb-0 md:pt-4 md:pb-4 bg-secondary/50">

      <div className="section-container">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-lg text-muted-foreground max-w-[800px]">My academic background and achievements.</p>
          </div>

          <Card className="overflow-hidden border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-bold">West Texas A&M University</CardTitle>
                  <CardDescription>Canyon, TX</CardDescription>
                </div>
                <CardDescription className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Graduation: May 2025
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">BS in Computer Science, Software Engineering</h3>
                  <p className="text-primary font-medium">GPA: 3.9</p>
                  <p className="text-muted-foreground mt-1">NCAA Division II Baseball Scholarship Athlete</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium flex items-center text-lg">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Academic Achievements
                    </h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>President's List</li>
                      <li>Dean's List</li>
                      <li>Academic All-American</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium flex items-center text-lg">
                      <Trophy className="h-5 w-5 mr-2 text-primary" />
                      Athletic Achievements
                    </h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>NCAA Division II Baseball Player</li>
                      <li>Team Captain</li>
                      <li>Maintained excellence in both academics and athletics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
