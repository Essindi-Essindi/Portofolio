import { Code, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer dedicated to crafting exceptional digital
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer with over 5 years of experience
              building web applications. I specialize in React, TypeScript, and
              Node.js, with a strong focus on creating performant and accessible
              user interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity about how websites
              work, and it has evolved into a passion for building products that
              make a real impact. I love tackling complex problems and turning
              them into simple, beautiful solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
