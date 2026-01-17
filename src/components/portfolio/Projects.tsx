import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, payments, and admin dashboard.",
    longDescription: "A comprehensive e-commerce solution built from the ground up. Features include real-time inventory management, Stripe payment integration, order tracking, admin analytics dashboard, and a responsive storefront. Implemented microservices architecture for scalability.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates.",
    longDescription: "Enterprise-grade project management application with real-time collaboration features. Includes Kanban boards, Gantt charts, time tracking, team permissions, and integrations with popular tools like Slack and GitHub. Built with WebSocket for live updates.",
    tags: ["Next.js", "TypeScript", "Supabase", "WebSocket"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Platform",
    description: "SaaS platform leveraging AI for content generation.",
    longDescription: "AI-powered content generation platform using OpenAI's GPT models. Features include blog post generation, social media content, SEO optimization suggestions, and a credit-based billing system. Handles thousands of requests daily with optimized API caching.",
    tags: ["React", "Python", "FastAPI", "OpenAI", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization and business intelligence tool.",
    longDescription: "Real-time analytics dashboard for business intelligence. Features customizable widgets, data export, automated reports, and integration with multiple data sources. Built with performance optimization for handling large datasets.",
    tags: ["React", "D3.js", "TypeScript", "GraphQL", "AWS"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cloud Infrastructure CLI",
    description: "Command-line tool for managing cloud resources.",
    longDescription: "Developer-focused CLI tool for managing multi-cloud infrastructure. Supports AWS, GCP, and Azure with unified commands. Features include infrastructure provisioning, cost monitoring, and automated backups. Published as an npm package with 10k+ weekly downloads.",
    tags: ["Go", "AWS SDK", "Terraform", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "Secure messaging platform with end-to-end encryption.",
    longDescription: "Privacy-focused chat application with end-to-end encryption. Features include group chats, file sharing, voice messages, and message reactions. Implements Signal Protocol for encryption and supports offline messaging with sync.",
    tags: ["React Native", "Node.js", "Socket.io", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="font-mono text-primary text-sm sm:text-base mb-2">
            <span className="text-muted-foreground">03.</span> Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="futuristic-card overflow-hidden group cursor-pointer"
              onClick={() => openProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {/* View Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background/90 rounded font-mono text-sm">
                    <Eye className="w-4 h-4" />
                    View Project
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="font-mono font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 sm:py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 sm:py-1 text-xs font-mono text-primary">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
