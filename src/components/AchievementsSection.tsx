import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Users, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Walmart CodeHers 2025 — Finalist",
    desc: "Top 250 out of 1,13,186 participants",
  },
  {
    icon: Trophy,
    title: "Cisco Ideathon 2025 — Finalist",
    desc: "Selected for the finals round",
  },
  {
    icon: Award,
    title: "CSI Hackathon — Winner",
    desc: "24-hour Regional Convention Hackathon",
  },
  {
    icon: Award,
    title: "IEEE-CIS SYNC — Runner-up",
    desc: "C Programming competition",
  },
  {
    icon: Star,
    title: "Academic Topper",
    desc: "2022–2024 consecutive years",
  },
];

const leadership = [
  {
    role: "Senior Team Lead",
    org: "LiteraZe Society",
    period: "Apr 2025 – Present",
    desc: "Organized events, mentored juniors, and led technical collaborations.",
  },
  {
    role: "Content Team Lead",
    org: "Enigma",
    period: "Aug 2024 – Feb 2025",
    desc: "Directed content strategy and managed team writing for outreach.",
  },
  {
    role: "Public Relations",
    org: "GDSC Anurag University",
    period: "Oct 2023 – Sep 2024",
    desc: "Handled outreach and event promotion for technical programs.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase"></p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Achievements & <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg flex items-center gap-2">
              <Trophy size={18} className="text-primary" /> Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary shrink-0 mt-0.5">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg flex items-center gap-2">
              <Users size={18} className="text-primary" /> Leadership
            </h3>
            <div className="space-y-3">
              {leadership.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card p-4 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{item.role}</p>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-xs text-primary">{item.org}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
