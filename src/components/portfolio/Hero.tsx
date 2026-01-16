import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(160_100%_50%_/_0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(195_100%_50%_/_0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                John <span className="gradient-text">Doe</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build exceptional digital experiences that combine beautiful
              design with powerful functionality. Specializing in React,
              TypeScript, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-bold text-lg hover:scale-105 hover:glow-shadow transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Floating Cards Visual */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-0 left-0 glass-card p-8 animate-float">
              <div className="text-5xl font-black gradient-text">5+</div>
              <div className="text-muted-foreground mt-2">Years Experience</div>
            </div>
            <div className="absolute top-36 right-0 glass-card p-8 animate-float-delayed">
              <div className="text-5xl font-black gradient-text">50+</div>
              <div className="text-muted-foreground mt-2">Projects Done</div>
            </div>
            <div className="absolute bottom-0 left-12 glass-card p-8 animate-float-delayed-2">
              <div className="text-5xl font-black gradient-text">30+</div>
              <div className="text-muted-foreground mt-2">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
