import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-40 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium">Hi, my name is</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none text-primary">
                Glenn Noronha
              </h1>
              <h2 className="text-3xl sm:text-4xl text-muted-foreground font-bold">
                Software Engineer & NCAA Baseball Player
              </h2>
            </div>

            <div className="max-w-[700px] space-y-4">
              <p className="text-muted-foreground text-lg">
                I develop innovative software solutions and data-driven
                applications with a passion for sports technology. My experience
                as an athlete gives me a unique perspective on building
                impactful digital products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View my projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Get in touch
                </Button>
              </Link>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-muted-foreground">
              <a
                href="https://github.com/glennnoronha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/glenn-noronha-314177161/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:glenn.noronha@yahoo.com"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
