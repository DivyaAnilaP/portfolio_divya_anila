import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary tracking-widest uppercase">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Building with <span className="gradient-text">purpose</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year B.Tech student in Computer Science (AI & ML) at Anurag University, Hyderabad, with a CGPA of 9.53. I'm passionate about building meaningful, well-structured products with a strong emphasis on fundamentals and code quality.
              </p>
              <p>
                I enjoy full-stack development, exploring practical AI use cases, and working on real-time systems. I learn best by building, iterating, and refining — with a constant focus on clarity, correctness, and long-term maintainability.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  desc: "B.Tech CSE (AI & ML) — Anurag University, CGPA: 9.53",
                },
                {
                  icon: Target,
                  title: "Goal",
                  desc: "Software Development Engineer role at a product-driven company",
                },
                {
                  icon: Sparkles,
                  title: "Interests",
                  desc: "Full-stack dev, Agentic AI, real-time systems, system design",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="glass-card p-4 flex gap-4 items-start"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
