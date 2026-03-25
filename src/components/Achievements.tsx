import { motion } from 'framer-motion';
import { Target, Star, Trophy, Users, Calendar } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="w-full max-w-5xl mx-auto px-4 py-24 relative z-10 flex flex-col gap-12">
      
      <div className="flex flex-col px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[color:var(--foreground)]"
        >
          Milestones & Activities
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-[color:var(--muted)] font-medium max-w-xl"
        >
          Beyond the code: leadership, competition, and community.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        
        {/* Achievements Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight mb-6">Achievements</h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-6 md:p-8 flex flex-col gap-4 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <Target size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl group-hover:text-green-500 transition-colors">Solved 120+ Questions on LeetCode</h4>
              <p className="text-sm text-[color:var(--muted)] mt-2 font-medium leading-relaxed">
                Strengthened problem-solving skills using Data Structures & Algorithms.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card p-6 md:p-8 flex flex-col gap-4 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <Star size={24} />
            </div>
            <div>
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-bold text-xl group-hover:text-yellow-500 transition-colors">5-Star Rating in C++ on HackerRank</h4>
                <div className="flex items-center gap-1.5 text-[color:var(--muted)] opacity-80 mt-1 flex-shrink-0">
                  <Calendar size={14} />
                  <div className="flex flex-col text-[11px] font-bold leading-tight">
                    <span>Nov</span>
                    <span>'25</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[color:var(--muted)] mt-2 font-medium leading-relaxed">
                Demonstrated strong problem-solving skills by completing algorithmic challenges and securing a verified 5-star rank on the global leaderboard.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card p-6 md:p-8 flex flex-col gap-4 group cursor-default"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Trophy size={24} />
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-3 py-1 rounded-full">Open Source</span>
            </div>
            <div>
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-bold text-xl group-hover:text-orange-500 transition-colors">Ranked 660th in GSSoC '25</h4>
                <div className="flex items-center gap-1.5 text-[color:var(--muted)] opacity-80 mt-1 flex-shrink-0">
                  <Calendar size={14} />
                  <div className="flex flex-col text-[11px] font-bold leading-tight">
                    <span>Oct</span>
                    <span>'25</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[color:var(--muted)] mt-2 font-medium leading-relaxed">
                Placed among the top contributors by actively resolving issues, improving code quality, and enhancing documentation across multiple community-driven open-source projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Extra-Curricular Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight mb-6">Extra-Curricular</h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-6 md:p-8 flex flex-col gap-4 group cursor-default border-t border-[color:var(--primary)]/50"
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="font-bold text-xl leading-tight">Meeting Manager</h4>
              <div className="flex items-center gap-1.5 text-[color:var(--muted)] opacity-80 mt-0.5 flex-shrink-0">
                <Calendar size={14} />
                <div className="flex flex-col text-[11px] font-bold leading-tight">
                  <span>Nov</span>
                  <span>'24</span>
                </div>
              </div>
            </div>
            <h5 className="text-sm font-bold text-[color:var(--primary)] flex items-center gap-2"><Users size={14} /> Infineon Club (CPE)</h5>
            <p className="text-sm text-[color:var(--muted)] font-medium leading-relaxed">
              Coordinated and organized club meetings and events, ensuring smooth execution, clear communication, and active participation, while ensuring each session delivered productive outcomes aligned with club’s goals.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card p-6 md:p-8 flex flex-col gap-4 group cursor-default border-t border-blue-500/50"
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="font-bold text-xl leading-tight">Conducted Two Technical Events</h4>
              <div className="flex items-center gap-1.5 text-[color:var(--muted)] opacity-80 mt-0.5 flex-shrink-0">
                <Calendar size={14} />
                <div className="flex flex-col text-[11px] font-bold leading-tight">
                  <span>Aug</span>
                  <span>'24</span>
                </div>
              </div>
            </div>
            <h5 className="text-sm font-bold text-blue-500 flex items-center gap-2"><Users size={14} /> Infineon Club (CPE)</h5>
            <p className="text-sm text-[color:var(--muted)] font-medium leading-relaxed">
              Led and managed Tech Bash and Intellect Nexus, engaging 35–45 students through hands-on activities and interactive sessions, contributing to technical enrichment and community building within the university.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
