import { motion } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';
import { 
  SiPython, SiDocker, SiKubernetes, 
  SiJavascript, SiMongodb, SiCss, SiHtml5, SiBootstrap, SiMysql, SiPhp, SiCanva, SiCplusplus,
  SiTailwindcss, SiFigma, SiNodedotjs, 
  SiReact, SiPostman, SiGit, SiGithub,
  SiRedux, SiFramer, SiSocketdotio, SiJsonwebtokens
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techStack = [
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss, label: 'CSS3', color: '#1572B6' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiPhp, label: 'PHP', color: '#777BB4' },
  { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiCplusplus, label: 'C++', color: '#00599C' },
  { icon: FaJava, label: 'Java', color: '#007396' },
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiGithub, label: 'GitHub', color: '#181717' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiKubernetes, label: 'Kubernetes', color: '#326CE5' },
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiCanva, label: 'Canva', color: '#00C4CC' },
  { icon: SiPostman, label: 'Postman', color: '#FF6C37' },
  { icon: SiRedux, label: 'Redux', color: '#764ABC' },
  { icon: SiFramer, label: 'Framer', color: '#0055FF' },
  { icon: SiSocketdotio, label: 'Socket.io', color: '#010101' },
  { icon: SiJsonwebtokens, label: 'JWT', color: '#000000' },
];

export default function TechMarquee() {
  return (
    <section className="w-full py-12 relative flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-[95%] max-w-5xl bento-card p-6 md:p-10"
      >
        {/* Header with Tool Toggles (Reference inspired) */}
        <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black tracking-tight text-[color:var(--foreground)]">Tech Stack</h2>
            <span className="text-sm font-medium opacity-50 text-[color:var(--muted)] mt-1">Tools I use to bring ideas to life.</span>
          </div>
          <div className="flex bg-white/5 rounded-lg p-1 gap-1 border border-white/5">
            <button className="p-1.5 rounded-md bg-white/10 shadow-inner">
              <List size={16} className="text-white/80" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-white/5 transition-colors">
              <LayoutGrid size={16} className="text-white/40" />
            </button>
          </div>
        </div>

        {/* Animated Icons Container (Marquee inside Box) */}
        <div className="relative overflow-hidden py-4 border-y border-white/5">
          <div className="animate-marquee flex gap-12 group-hover:[animation-play-state:paused] py-2">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 group cursor-default shrink-0"
              >
                <div 
                  className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 transition-all hover:scale-110 hover:border-[color:var(--primary)] hover:bg-white/[0.08]"
                  style={{ boxShadow: `0 0 15px ${tech.color}15` }}
                >
                  <tech.icon 
                    className="w-7 h-7 transition-all" 
                    style={{ 
                      color: tech.color,
                      filter: `drop-shadow(0 0 5px ${tech.color}40)` 
                    }} 
                  />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-[color:var(--foreground)] opacity-80 group-hover:opacity-100 transition-opacity">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>


      </motion.div>
    </section>
  );
}
