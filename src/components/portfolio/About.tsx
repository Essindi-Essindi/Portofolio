import { Code, Database, Smartphone, Palette, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CVPreviewModal from "./CVPreviewModal";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development" ,
    description: "Building responsive web and mobile apps with React Native & TypeScript",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description: "Express.js, Node.js with SQL, SQLite, and MySQL integration",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform development using React Native and modern frameworks",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Advanced Figma skills, creating intuitive user interfaces and dashboards",
  },
];

const About = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

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
              I'm Christopher Morgan, a Computer Engineering student (4th year of 5) 
              with proven expertise in full-stack development, mobile applications, 
              and digital marketing. I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              My journey in software development combines strong foundations in electronics, 
              networking, and SEO optimization. I specialize in building scalable web and 
              mobile solutions using modern frameworks like React Native and TypeScript.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I'm an adaptable problem-solver passionate about creating intuitive user 
              experiences. When I'm not coding, you'll find me enjoying athletics, 
              swimming, volleyball, or handball.
            </p>

            {/* CV Preview Section */}
            <div className="pt-4 sm:pt-6">
              <div className="glass-card p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <h3 className="font-mono font-semibold text-sm sm:text-base">Curriculum Vitae</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  View my full CV to learn more about my experience, education, and skills.
                </p>
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 gradient-bg text-primary-foreground rounded font-mono text-xs sm:text-sm font-medium hover:glow-shadow transition-all"
                >
                  <Eye className="w-4 h-4" />
                  preview_cv()
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

      <CVPreviewModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
};

export default About;
