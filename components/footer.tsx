import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-bold text-xl mb-2">
              <span className="gradient-text">Glenn Noronha</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Software Engineer & NCAA Baseball Player
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Glenn Noronha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
