import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 text-primary mb-2">
              <Terminal className="w-5 h-5" />
              <span className="font-mono font-bold">dev.portfolio</span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground font-mono">
              Building the future, one commit at a time
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-border bg-background hover:border-primary/50 hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border font-mono">
          <span className="text-primary">&copy;</span> {currentYear} Essindi Essindi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
