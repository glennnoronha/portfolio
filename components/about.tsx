import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export function About() {
  return (
    <section id="about" className="pt-2 pb-2 md:pt-4 md:pb-4">
      <div className="section-container">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                <Image
                  src="/Swing.jpg"
                  alt="Glenn Noronha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a Computer Science student at West Texas A&M University with
                a strong academic record (GPA: 3.9) and an NCAA Baseball player.
                My unique background has shaped me into a versatile professional
                with technical expertise and strong teamwork abilities.
              </p>
              <p className="text-lg text-muted-foreground">
                My background in baseball has instilled in me exceptional
                discipline, leadership, and analytical thinking skills that
                translate directly to solving complex problems in data science
                and software development. While I'm particularly passionate
                about applying my skills in the baseball industry, these
                qualities have prepared me to excel in any collaborative,
                fast-paced environment.
              </p>
              <p className="text-lg text-muted-foreground">
                I specialize in software engineering, data analysis, and
                full-stack development, with a particular interest in sports
                technology and analytics. I'm graduating in May 2025 and seeking
                opportunities where I can leverage my technical skills to create
                impactful solutions.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="gap-2" asChild>
                  <a href="/glenn_resume.pdf" download>
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
