import { Download, X, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVPreviewModal = ({ isOpen, onClose }: CVPreviewModalProps) => {
  const cvUrl = "/my%20CV2.pdf"; // Space encoded as %20

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Christopher_Morgan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(cvUrl, "_blank");
  };

  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-border overflow-hidden">
          <DialogHeader className="p-4 sm:p-6 border-b border-border bg-card">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-mono text-lg sm:text-xl gradient-text">
                curriculum_vitae.pdf
              </DialogTitle>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                    onClick={handleOpenInNewTab}
                    className="p-2 sm:p-2.5 rounded-lg border border-border bg-muted/50 hover:border-primary/50 hover:text-primary transition-all"
                    aria-label="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 gradient-bg text-primary-foreground rounded-lg font-mono text-xs sm:text-sm font-medium hover:glow-shadow transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                    onClick={onClose}
                    className="p-2 sm:p-2.5 rounded-lg border border-border bg-muted/50 hover:border-destructive/50 hover:text-destructive transition-all md:hidden"
                    aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 h-[calc(90vh-80px)] bg-muted/30">
            <iframe
                src={`${cvUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title="CV Preview"
            />
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default CVPreviewModal;