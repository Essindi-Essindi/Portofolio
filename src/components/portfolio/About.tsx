import { Code, Database, Cloud, Terminal, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code,
    title: "Clean Architecture",
    description: "Building maintainable, testable, and scalable codebases",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing efficient database schemas and data pipelines",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Deploying and managing applications on AWS, GCP, Azure",
  },
  {
    icon: Terminal,
    title: "DevOps Culture",
    description: "CI/CD pipelines, containerization, and infrastructure as code",
  },
];

const About = () => {
  const handleDownloadCV = () => {
    // Create a link to download the CV
    // In production, replace this with your actual CV URL
    const cvUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Essindi_Essindi_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="font-mono text-primary text-sm sm:text-base mb-2">
            <span className="text-muted-foreground">01.</span> About Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I'm a software engineer with a passion for building robust,
              scalable applications. With expertise spanning frontend frameworks,
              backend systems, and cloud infrastructure, I bring ideas to life
              through clean, efficient code.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              My journey in software development started with curiosity about
              how systems work at scale. Today, I specialize in designing
              architectures that handle millions of users while maintaining
              code quality and developer experience.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              When I'm not shipping features, you'll find me contributing to
              open-source projects, writing technical articles, or exploring
              the latest in distributed systems.
            </p>

            {/* CV Download Section */}
            <div className="pt-4 sm:pt-6">
              <div className="glass-card p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <h3 className="font-mono font-semibold text-sm sm:text-base">Curriculum Vitae</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Download my full CV to learn more about my experience, education, and skills.
                </p>
                <button
                  onClick={handleDownloadCV}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 gradient-bg text-primary-foreground rounded font-mono text-xs sm:text-sm font-medium hover:glow-shadow transition-all"
                >
                  <Download className="w-4 h-4" />
                  download_cv.pdf
                </button>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="futuristic-card p-4 sm:p-5 lg:p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded border border-primary/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-primary/60 group-hover:glow-shadow transition-all">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-mono font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
