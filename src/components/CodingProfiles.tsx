import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    handle: "divyaanila18",
    url: "https://leetcode.com/divyaanila18",
    color: "from-amber-500 to-orange-600",
    icon: "⚡",
    stat: "Problem Solver",
  },
  {
    name: "HackerRank",
    handle: "22eg107a43",
    url: "https://hackerrank.com/22eg107a43",
    color: "from-emerald-500 to-green-600",
    icon: "🏆",
    stat: "Coder",
  },
  {
    name: "GitHub",
    handle: "DivyaAnilaP",
    url: "https://github.com/DivyaAnilaP",
    color: "from-slate-400 to-slate-600",
    icon: "🐙",
    stat: "Builder",
  },
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mt-10">
      <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
        <span className="text-primary">{"</"}</span> Coding Profiles
      </h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group glass-card-hover p-5 flex flex-col items-center text-center gap-3 relative overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
            
            <span className="text-2xl">{p.icon}</span>
            <div>
              <p className="font-display font-semibold text-sm">{p.name}</p>
              <p className="text-xs text-muted-foreground">@{p.handle}</p>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-medium">{p.stat}</span>
            <ExternalLink size={14} className="absolute top-3 right-3 text-muted-foreground/30 group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
