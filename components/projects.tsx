import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, CheckCircle } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Panhandle Pro Air",
      description:
        "A professional HVAC services website built for Panhandle Pro Air. Features comprehensive service information for heating, cooling, and air quality solutions with a clean, trustworthy design focused on customer comfort and reliability.",
      image: "/panhandle-pro-air.png",
      tags: [
        "WordPress",
        "Custom Theme",
        "PHP",
        "Responsive Design",
        "HVAC Services",
      ],
      liveUrl: "https://panhandleproair.com",
      githubUrl: null, // client project
      status: "live",
      details: [
        "Developed a professional WordPress site with custom theme for a local HVAC contractor",
        "Created detailed service pages for heating, cooling, maintenance, and air quality services",
        "Built responsive layouts from scratch using PHP, HTML, CSS, and JavaScript",
        "Designed trust-building elements including certifications, testimonials, and service guarantees",
        "Integrated contact forms and service request functionality for lead generation",
        "Optimized for local SEO to help customers in the Panhandle region find HVAC services",
      ],
    },
    {
      title: "Amarillo Dog Boarding",
      description:
        "A warm and professional pet care website built for Amarillo Dog Boarding. Features service information, pricing, and easy booking for dog boarding, daycare, and grooming services with a friendly, trustworthy design.",
      image: "/amarillo-dog-boarding.png",
      tags: [
        "WordPress",
        "Custom Theme",
        "PHP",
        "Responsive Design",
        "Pet Services",
      ],
      liveUrl: "https://amarillodogboarding.com",
      githubUrl: null, // client project
      status: "live",
      details: [
        "Developed a user-friendly WordPress site with a custom theme for a local pet boarding business",
        "Created intuitive service pages showcasing boarding, daycare, and grooming options",
        "Built responsive layouts from scratch using PHP, HTML, CSS, and JavaScript",
        "Designed trust-focused UI elements including testimonials and facility highlights",
        "Integrated contact forms and booking information to streamline customer inquiries",
        "Optimized for local SEO to help pet owners in Amarillo find services easily",
      ],
    },
    {
      title: "Bar J Services",
      description:
        "A professional services website built for Bar J Services through my role at Andrews & Associates IT Solutions. The site highlights septic systems, site planning, and excavation work in a clear, modern, and responsive layout.",
      image: "/barJ.png",
      tags: ["WordPress", "Elementor", "Custom CSS", "Responsive Design"],
      liveUrl: "https://barjservices.com",
      githubUrl: null, // private work project
      status: "live",
      details: [
        "Developed and launched during my work at Andrews & Associates IT Solutions",
        "Created a responsive WordPress site tailored to the client's service offerings",
        "Customized Elementor layouts and added advanced styling with CSS for brand consistency",
        "Migrated content from the old site and optimized for performance and SEO",
        "Integrated service detail pages, calls-to-action, and contact forms to drive leads",
      ],
    },
    {
      title: "MovieVerse",
      description:
        "A movie discovery app where users can search for movies, view trailers, and explore detailed movie info, all in a sleek, responsive interface.",
      image: "/MovieVerse.png",
      tags: ["React", "Tailwind CSS", "TMDB API", "Supabase", "Vite"],
      liveUrl: "https://movieverse-drab.vercel.app",
      githubUrl: "https://github.com/glennnoronha/movieverse",
      status: "live",
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
      image: "/yield.png",
      tags: [
        "Python",
        "scikit-learn",
        "Pandas",
        "Data Analysis",
        "Machine Learning",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/glennnoronha/ml-crop-yield-analysis",
      status: "code",
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
      image: "/proteinlens.png",
      tags: ["Unity", "Meta XR SDK", "C#", "Blender", "AR"],
      liveUrl: null,
      githubUrl: "https://github.com/LKiker/MolecularLensAR",
      status: "developed",
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
      liveUrl: "https://glennnoronha.vercel.app",
      githubUrl: "https://github.com/glennnoronha/porfolio",
      status: "live",
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
      image: "",
      tags: ["In Progress", "TBD"],
      liveUrl: null,
      githubUrl: null,
      status: "development",
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
      className=" bg-gradient-to-br from-background to-muted/30"
    >
      <div className="section-container">
        <div className="flex flex-col space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-text">Featured Projects</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent work spanning web development, machine
              learning, and augmented reality applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className={`project-card group`}>
                <div className="grid gap-0 min-h-[500px]">
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/80">
                    <div className="relative aspect-[16/9] w-full">
                      <img
                        src={project.image || "/project.png"}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        loading={index > 1 ? "lazy" : "eager"}
                      />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === "live" ? "default" : "secondary"
                        }
                        className="gap-1.5"
                      >
                        {project.status === "live" ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                        {project.status === "live" ? "Live" : project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`p-8 lg:px-10 flex flex-col justify-center space-y-6`}
                  >
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs font-medium bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Details List */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.details.slice(0, 3).map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                            View Code
                          </a>
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          size="lg"
                          className="gap-2 group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
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
