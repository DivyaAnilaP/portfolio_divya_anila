import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import Typewriter from "./Typewriter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(174 72% 46%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 72% 46%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-secondary/50 text-xs text-muted-foreground mb-4"
          >
            <span className="glow-dot" />
            Open to SDE roles — 2026 Graduate
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Divya Anila</span>
          </h1>

          <div className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed h-8 md:h-9">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "AI/ML Enthusiast",
                "Problem Solver",
                "Hackathon Winner",
                "Open Source Builder",
              ]}
            />
          </div>

          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground/70 leading-relaxed">
            Crafting clean, scalable products with practical AI and a relentless focus on quality.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-[0_0_24px_hsl(174_72%_46%/0.3)] hover:scale-[1.02]"
            >
              <FolderOpen size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-8 md:gap-12 pt-8 text-center"
          >
            {[
              { value: "9.53", label: "CGPA" },
              { value: "4+", label: "Projects" },
              { value: "3+", label: "Hackathons" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-float">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
