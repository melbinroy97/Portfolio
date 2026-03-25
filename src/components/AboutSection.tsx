import { motion } from 'framer-motion';
import Certificates from './Certificates';
import realHeroImage from '../assets/real-hero.png';

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-4 py-24 relative z-10 flex flex-col gap-6">
      
      <div className="flex flex-col mb-8 px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[color:var(--foreground)]"
        >
          About & Education
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-[color:var(--muted)] font-medium max-w-xl"
        >
          My background, philosophy, and academic journey.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bio Card (Span 7) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bento-card p-8 md:p-10 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4 tracking-tight">About Me</h3>
          <p className="text-[15px] md:text-base text-[color:var(--muted)] font-medium leading-relaxed mb-8 flex-grow">
            I’m a Computer Science student interested in full-stack development and problem-solving. I enjoy building real-world applications using the MERN stack and exploring new technologies. I spend most of my time writing code, improving it, and occasionally wondering why it worked yesterday but not today.
          </p>
          <div className="flex flex-col gap-3 mt-auto">
            <span className="text-sm font-bold text-[color:var(--foreground)] opacity-70">Soft Skills</span>
            <div className="flex flex-wrap gap-2">
              {['Problem-Solving', 'Team Player', 'Critical Thinking', 'Adaptability'].map(v => (
                <div key={v} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-xs font-semibold text-[color:var(--foreground)] opacity-80">
                  {v}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Card (Span 5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-5 bento-card p-3 md:p-4 flex flex-col justify-center overflow-hidden group"
        >
          <div className="w-full h-full min-h-[300px] rounded-[1.5rem] overflow-hidden relative bg-black/5 dark:bg-white/5">
            <img 
              src={realHeroImage} 
              alt="Melbin Roy" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" 
            />
          </div>
        </motion.div>

        {/* Education Section (Span 12) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-12 bento-card p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-8 tracking-tight">Academic Record</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            <div className="flex flex-col h-full p-6 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl transition-colors hover:bg-black/5 dark:hover:bg-white/10 group">
              <h4 className="font-bold text-lg text-[color:var(--primary)] mb-1 group-hover:scale-105 transition-transform origin-left">Bachelor of Technology</h4>
              <p className="text-sm font-semibold mb-2 text-[color:var(--foreground)]">Computer Science and Engineering</p>
              <p className="text-sm text-[color:var(--muted)] mb-6">Lovely Professional University<br/>Punjab, India</p>
              <div className="pt-4 border-t border-black/5 dark:border-white/5 text-sm font-bold mt-auto tracking-widest uppercase text-[color:var(--foreground)]">CGPA: 7.83</div>
            </div>

            <div className="flex flex-col h-full p-6 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl transition-colors hover:bg-black/5 dark:hover:bg-white/10 group">
              <h4 className="font-bold text-lg text-[color:var(--primary)] mb-1 group-hover:scale-105 transition-transform origin-left">Intermediate</h4>
              <p className="text-sm font-semibold mb-2 text-[color:var(--foreground)]">Class XII</p>
              <p className="text-sm text-[color:var(--muted)] mb-6">St. Anne’s Convent School<br/>Chandigarh, India</p>
              <div className="pt-4 border-t border-black/5 dark:border-white/5 text-sm font-bold mt-auto tracking-widest uppercase text-[color:var(--foreground)]">Percentage: 78.8%</div>
            </div>

            <div className="flex flex-col h-full p-6 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl transition-colors hover:bg-black/5 dark:hover:bg-white/10 group">
              <h4 className="font-bold text-lg text-[color:var(--primary)] mb-1 group-hover:scale-105 transition-transform origin-left">Matriculation</h4>
              <p className="text-sm font-semibold mb-2 text-[color:var(--foreground)]">Class X</p>
              <p className="text-sm text-[color:var(--muted)] mb-6">St. Anne’s Convent School<br/>Chandigarh, India</p>
              <div className="pt-4 border-t border-black/5 dark:border-white/5 text-sm font-bold mt-auto tracking-widest uppercase text-[color:var(--foreground)]">Percentage: 92.6%</div>
            </div>

          </div>
        </motion.div>
      </div>

      <div className="mt-8">
        <Certificates />
      </div>

    </section>
  );
}
