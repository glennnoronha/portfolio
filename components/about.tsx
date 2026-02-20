import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
                I graduated with a Computer Science degree from West Texas A&M
                University with a 3.9 GPA while also competing as an NCAA
                Baseball player. That experience shaped me into someone who
                thrives under pressure, both on the field and in technical
                environments.
              </p>
              <p className="text-lg text-muted-foreground">
                Baseball taught me discipline, leadership, and sharp analytical
                thinking — all of which carry over into how I approach data
                science and software development. While I’m especially
                passionate about bringing tech into the baseball world, I’m
                well-prepared to contribute in any fast-paced, team-oriented
                setting.
              </p>
              <p className="text-lg text-muted-foreground">
                I specialize in software engineering, data analysis, and
                full-stack development. I’ve developed full-stack web apps,
                machine learning models, and AR tools, blending clean design
                with real functionality. Below are my recent projects which
                include MovieVerse, a React-based movie discovery app powered by
                the TMDB API, and Protein Lens AR, an immersive learning
                platform for visualizing protein structures on Meta Quest 3.
              </p>
              <div className="pt-4 flex gap-3">
                <Button variant="outline" className="gap-2" asChild>
                  <a 
                    href="/glenn_resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    View Resume
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a 
                    href="/glenn_resume.pdf" 
                    download
                  >
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
