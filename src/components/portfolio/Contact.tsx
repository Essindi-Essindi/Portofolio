import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="font-mono text-primary text-sm sm:text-base mb-2">
            <span className="text-muted-foreground">04.</span> Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-sm sm:text-base mb-1">Email</h3>
                  <a
                    href="mailto:yvanstephanee@gmail.com"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    yvanstephanee@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-sm sm:text-base mb-1">Phone</h3>
                  <a
                    href="tel:+442076668555"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +(237) 653353093/680921972
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-sm sm:text-base mb-1">Location</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Montee Jouvence, Yaounde Cameroon
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h3 className="font-mono text-sm text-primary mb-3 sm:mb-4">// Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded border border-border bg-card hover:border-primary/50 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/christopher_morgan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded border border-border bg-card hover:border-primary/50 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 futuristic-card p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-mono text-primary mb-1.5 sm:mb-2"
                >
                  name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-mono text-primary mb-1.5 sm:mb-2"
                >
                  email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                  placeholder="stpeh@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs sm:text-sm font-mono text-primary mb-1.5 sm:mb-2"
              >
                subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-mono text-primary mb-1.5 sm:mb-2"
              >
                message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none font-mono text-sm"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 gradient-bg text-primary-foreground rounded font-mono font-medium text-sm sm:text-base hover:glow-shadow transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              send_message()
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
