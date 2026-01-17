import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Redux", "GraphQL"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "FastAPI", "Django", "Spring Boot"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub Actions", "Jest", "Cypress", "Figma", "Gitlab"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="font-mono text-primary text-sm sm:text-base mb-2">
            <span className="text-muted-foreground">02.</span> Skills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="futuristic-card p-4 sm:p-5 lg:p-6"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <h3 className="font-mono font-semibold text-primary text-sm sm:text-base">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-mono bg-muted/50 border border-border hover:border-primary/50 hover:text-primary rounded transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            // { value: "30+", label: "Happy Clients" },
            { value: "10+", label: "Technologies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 glass-card"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
