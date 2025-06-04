import {
  Database,
  Layout,
  Server,
  BarChart,
  Terminal,
  Brain,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="h-8 w-8" />,
      skills: ["Python", "JavaScript", "C#", "Java", "C++", "SQL", "R"],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="h-8 w-8" />,
      skills: [
        "Pandas",
        "NumPy",
        "scikit-learn",
        "Data Visualization",
        "Exploratory Data Analysis",
        "Predictive Modeling",
        "Jupyter Notebooks",
      ],
    },
    {
      title: "Web Development",
      icon: <Layout className="h-8 w-8" />,
      skills: [
        "React.js",
        "Node.js",
        "React-Router",
        "Vite",
        "Vercel",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8" />,
      skills: ["PostgreSQL", "MySQL", "Supabase", "Data Modeling"],
    },
    {
      title: "Tools & Technologies",
      icon: <Server className="h-8 w-8" />,
      skills: ["Git", "GitHub", "Vercel", "Unity", "Blender", "Meta XR SDK", "Agile", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="pt-0 pb-0 md:pt-4 md:pb-4">
      <div className="section-container">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-lg text-muted-foreground max-w-[800px]">
              I've developed a diverse set of technical skills that I apply to
              baseball analytics and sports technology. Here's a snapshot of my
              technical expertise.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col space-y-4">
                  <div className="p-2 bg-primary/10 rounded-full text-primary w-fit">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center rounded-full bg-background px-3 py-1 text-xs font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
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
