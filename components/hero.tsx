import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center items-center gap-5 md:grid-cols-12 md:text-start">
          {/* text */}
          <div className="order-2 md:order-1 md:col-span-6">
            <p className="text-sm font-medium text-muted-foreground">
              Hi, my name is
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-7xl">
              Glenn Noronha
            </h1>

            <h2 className="mt-3 text-2xl font-semibold text-muted-foreground sm:text-3xl">
              Software Engineer
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
              <span className="md:hidden">
                I build clean, useful products.
              </span>
              <span className="hidden md:block">
                I'm a software engineer and data analyst who turns ideas into
                useful, clean interfaces. I like building real products, keeping
                things simple, and shipping.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div className="mt-6 flex items-center justify-center md:justify-start gap-5 text-muted-foreground">
              <a
                href="https://github.com/glennnoronha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/glenn-noronha-314177161/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:glenn.noronha@yahoo.com"
                aria-label="Email"
                className="transition-colors hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 md:order-2 md:col-span-6">
            <div className="mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-auto md:max-w-md lg:max-w-lg">
              <div className="relative rounded-full md:rounded-2xl bg-gradient-to-br from-primary/40 to-transparent p-1 h-full">
                <div className="flex h-full items-center justify-center overflow-hidden rounded-full md:rounded-xl">
                  <Image
                    src="/headshot.jpeg"
                    alt="Headshot of Glenn Noronha"
                    width={650}
                    height={800}
                    priority
                    className="h-full w-full rounded-full md:rounded-xl object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#about"
            aria-label="Scroll down"
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  );
}