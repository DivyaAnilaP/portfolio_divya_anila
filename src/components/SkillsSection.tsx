import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CodingProfiles from "./CodingProfiles";

const categories = [
  {
    name: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "Java"],
  },
  {
    name: "Web Technologies",
    icon: "🌐",
    skills: ["React", "Node.js", "Express", "REST APIs", "HTML", "CSS"],
  },
  {
    name: "AI / ML",
    icon: "🤖",
    skills: ["TensorFlow", "Keras", "scikit-learn", "PyTorch", "OpenCV"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "SQL"],
  },
  {
    name: "Tools & DevOps",
    icon: "🔧",
    skills: ["Git", "GitHub", "VSCode", "Vercel"],
  },
  {
    name: "CS Fundamentals",
    icon: "📚",
    skills: ["DSA", "OOP", "OS", "DBMS", "Computer Networks"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 space-y-4"
            >
              <h3 className="font-display font-semibold text-sm text-primary flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <CodingProfiles />
      </div>
    </section>
  );
};

export default SkillsSection;
