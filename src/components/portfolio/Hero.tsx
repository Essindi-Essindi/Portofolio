import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Terminal Header */}
          <div className="inline-block">
            <div className="glass-card px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              <span>available for opportunities</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-3 sm:space-y-4">
            <p className="font-mono text-primary text-sm sm:text-base">
              Hello, World! I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Essindi Essindi
            </h1>
            <div className="font-mono text-lg sm:text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary">&gt;</span> Software Engineer
              <span className="animate-pulse">_</span>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
            I architect and build scalable software solutions. Specialized in
            full-stack development, cloud infrastructure, and creating elegant
            code that solves complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 gradient-bg text-primary-foreground rounded font-mono font-medium text-sm sm:text-base hover:glow-shadow transition-all duration-300"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-primary text-primary rounded font-mono font-medium text-sm sm:text-base hover:bg-primary/10 transition-all duration-300"
            >
              contact_me()
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-2 sm:p-3 glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
