"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="gradient-text">Glenn Noronha</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors animated-underline">
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors animated-underline"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors animated-underline"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors animated-underline"
            >
              Contact
            </Link>
          </nav>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b md:hidden">
            <nav className="flex flex-col p-6 max-w-5xl mx-auto">
              <Link
                href="#about"
                className="py-3 text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="py-3 text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="py-3 text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="py-3 text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
