import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TripSage AI",
    tags: ["NLP", "Agentic AI", "DistilBERT"],
    description:
      "AI-powered travel planning platform using Agentic AI and DistilBERT-based NLP to generate personalized, context-aware itineraries with real-time weather and crowd-pattern signals.",
    links: {
      github: "https://github.com/DivyaAnilaP",
      demo: "https://tripsageai-majorproject.vercel.app/",
    },
  },
  {
    title: "IdeaPulse",
    tags: ["Vite", "React", "OpenAI", "Gemini"],
    description:
      "AI platform that validates startup ideas via SWOT analysis, viability scoring, and competitor insights. Uses Gemini 1.5 Flash & GPT with intelligent fallback and caching.",
    links: {
      github: "https://github.com/DivyaAnilaP",
      demo: "https://idea-pulse-rho.vercel.app/",
    },
  },
  {
    title: "Real-Time Collaboration",
    tags: ["MERN", "Socket.IO", "AI"],
    description:
      "Full-stack collaboration platform with real-time chat, file sharing, task management, AI meeting summarizer, and sprint tools. Won CSI 24hr Hackathon.",
    links: {
      github: "https://github.com/DivyaAnilaP",
      demo: "https://teamflow-sync-spark.vercel.app/",
    },
  },
  {
    title: "TrustGuard AI",
    tags: ["DistilBERT", "MobileNetV2", "SHAP"],
    description:
      "Multimodal fake-content detection system combining text (DistilBERT + SHAP) and image (MobileNetV2 + Grad-CAM) analysis with an interpretable trust score (0–100).",
    links: {
      github: "https://github.com/DivyaAnilaP",
    },
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card-hover p-6 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
