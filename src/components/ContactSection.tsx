import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Download, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;

    // Basic validation
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({ name, email, message });

      if (error) throw error;

      setStatus("sent");
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:pantangidivyaanila@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} />
                </div>
                pantangidivyaanila@gmail.com
              </a>
              <a
                href="https://github.com/DivyaAnilaP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Github size={18} />
                </div>
                github.com/DivyaAnilaP
              </a>
              <a
                href="https://linkedin.com/in/divya-anila-pantangi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={18} />
                </div>
                linkedin.com/in/divya-anila-pantangi
              </a>
            </div>

            <a
              href="/DivyaAnila_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4 relative overflow-hidden"
          >
            {/* Success overlay */}
            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm z-10 rounded-xl"
              >
                <CheckCircle size={48} className="text-primary mb-3" />
                <p className="font-display font-semibold">Message Sent!</p>
                <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
              </motion.div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_hsl(174_72%_46%/0.25)] transition-all disabled:opacity-60 text-sm"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
