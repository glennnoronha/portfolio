import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "MovieVerse",
      description:
        "A movie discovery app where users can search for movies, view trailers, and explore detailed movie info, all in a sleek, responsive interface.",
      image: "/MovieVerse.png?height=400&width=600",
      tags: ["React", "Tailwind CSS", "TMDB API", "Supabase", "Vite"],
      liveUrl: "https://movieverse-drab.vercel.app",
      githubUrl: "https://github.com/glennnoronha/movieverse",
      details: [
        "Built with React and styled using Tailwind CSS for a clean, responsive design",
        "Integrated TMDB API to fetch movie data including trailers, genres, and ratings",
        "Implemented client-side routing with React Router and fast builds with Vite",
        "Used Supabase to track and rank trending search terms",
        "Focused on user experience with debounced search, modal previews, and mobile optimization",
      ],
    },
    {
      title: "AI-Based Crop Yield Prediction",
      description:
        "A machine learning project using real-world data from FAOSTAT and NASA to predict crop yields and identify the key factors influencing agricultural productivity.",
      image: "/yield.png?height=400&width=600",
      tags: [
        "Python",
        "scikit-learn",
        "Pandas",
        "Data Analysis",
        "Machine Learning",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/glennnoronha/ml-crop-yield-analysis",
      details: [
        "Collected and merged over 14,000 rows of raw data from FAOSTAT and NASA POWER APIs",
        "Engineered a unified dataset combining pesticide use, weather stats, and crop type for 150+ countries",
        "Built and compared multiple ML models (Random Forest, Gradient Boosting, SVR, etc.)",
        "Identified temperature, pesticides, and crop type as top predictors via feature importance analysis",
        "Final model (Random Forest) achieved strong R² and RMSE scores, with interpretable visualizations and reliable performance across crop types",
      ],
    },
    {
      title: "Protein Lens AR",
      description:
        "An augmented reality platform for visualizing complex protein structures and biomechanics concepts in an immersive, interactive environment.",
      image: "/proteinlens.png?height=400&width=600",
      tags: ["Unity", "Meta XR SDK", "C#", "Blender", "AR"],
      liveUrl: "#",
      githubUrl: "https://github.com/LKiker/MolecularLensAR",
      details: [
        "Developed an augmented reality platform with applications for sports biomechanics",
        "Utilized Unity, C#, and 3D modeling to create interactive visualizations",
        "Designed features to help understand complex movement patterns in athletics",
        "Applied concepts from kinesiology and sports science to enhance the educational experience",
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive, modern web portfolio built with Next.js, Tailwind CSS, and TypeScript to showcase my software engineering work, baseball analytics projects, and technical skills.",
      image: "/portfolio-thumbnail.jpg",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "https://your-portfolio-domain.com", //
      githubUrl: "https://github.com/glennnoronha/porfolio",
      details: [
        "Designed and built a fully responsive personal portfolio to highlight my projects and skills",
        "Used Next.js for performance and routing, with Tailwind CSS for rapid UI development",
        "Integrated GitHub, LinkedIn, and contact form functionality",
        "Deployed seamlessly to Vercel with CI/CD from GitHub",
      ],
    },
    {
      title: "Coming Soon",
      description:
        "A new project is currently in the works! Stay tuned for updates on my next build.",
      image: "/project.png",
      tags: ["In Progress", "TBD"],
      liveUrl: "#",
      githubUrl: "#",
      details: [
        "This project is under active development.",
        "More details will be shared soon, including a live demo and repository.",
        "Follow me on GitHub or LinkedIn to stay up to date.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="pt-0 pb-0 md:pt-4 md:pb-4 bg-secondary/50"
    >
      <div className="section-container">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-lg text-muted-foreground max-w-[800px]">
              Here are some of my recent projects showcasing my skills.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 w-full h-full p-4 md:pl-6 flex items-center">
                    <div className="rounded-lg overflow-hidden w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-4">
                      {project.githubUrl !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}

                      {project.liveUrl !== "#" && (
                        <Button size="sm" className="gap-2" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
