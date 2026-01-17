import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <DialogHeader className="p-4 sm:p-6 pb-0">
          <DialogTitle className="font-mono text-xl sm:text-2xl flex items-center gap-2 pr-8">
            <span className="text-primary">&gt;</span> {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm sm:text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4 bg-background/80 border-border hover:bg-background" />
              <CarouselNext className="right-2 sm:right-4 bg-background/80 border-border hover:bg-background" />
            </Carousel>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-muted-foreground">
              {project.images.length} images
            </div>
          </div>

          {/* Long Description */}
          {project.longDescription && (
            <div className="space-y-2">
              <h4 className="font-mono text-sm text-primary">// Project Details</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-2">
            <h4 className="font-mono text-sm text-primary">// Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-mono bg-primary/10 text-primary border border-primary/30 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 gradient-bg text-primary-foreground rounded font-mono text-sm font-medium hover:glow-shadow transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              view_live()
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-primary text-primary rounded font-mono text-sm font-medium hover:bg-primary/10 transition-all"
            >
              <Github className="w-4 h-4" />
              view_code()
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
