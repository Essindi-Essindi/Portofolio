import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-10 border-t border-primary/10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold gradient-text">
              Portfolio
            </a>
            <p className="text-muted-foreground mt-2">
              Building digital experiences that matter
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm mt-8 pt-8 border-t border-primary/10">
          © {currentYear} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
