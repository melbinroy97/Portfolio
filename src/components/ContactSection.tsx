import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Download } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-4 py-24 relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bento-card p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between"
      >
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[color:var(--primary)]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--muted)]">Available for Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[color:var(--foreground)]">
            Let's build<br/>
            <span className="text-[color:var(--primary)]">something great.</span>
          </h2>
          
          <p className="text-lg text-[color:var(--muted)] font-medium max-w-md">
            Whether you have a project in mind, a role to fill, or just want to chat about tech, feel free to reach out.
          </p>

          <div className="pt-4">
            <a 
              href="mailto:contact@melbinroy.com" 
              className="inline-flex items-center gap-3 bg-[color:var(--primary)] text-white px-8 py-4 rounded-full font-bold hover:bg-[color:var(--primary)]/90 transition-all hover:scale-105"
            >
              <Mail size={20} /> Say Hello
            </a>
          </div>
        </div>

        <div className="w-full md:w-[320px] lg:w-[350px] flex flex-col gap-4">
          <a 
            href="https://github.com/melbinroy97" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-black/80 dark:group-hover:bg-white/20 transition-colors text-[color:var(--foreground)] group-hover:text-white">
                <Github size={20} />
              </div>
              <span className="font-bold text-lg text-[color:var(--foreground)]">GitHub</span>
            </div>
            <ArrowUpRight size={20} className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </a>

          <a 
            href="https://www.linkedin.com/in/melbin-roy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors text-[color:var(--foreground)] group-hover:text-white">
                <Linkedin size={20} />
              </div>
              <span className="font-bold text-lg text-[color:var(--foreground)]">LinkedIn</span>
            </div>
            <ArrowUpRight size={20} className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </a>

          <a 
            href="/Resume.pdf" 
            download
            className="flex items-center justify-between p-5 bg-[color:var(--primary)]/10 border border-[color:var(--primary)]/20 rounded-2xl hover:bg-[color:var(--primary)]/20 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[color:var(--primary)]/20 flex items-center justify-center text-[color:var(--primary)] group-hover:scale-110 transition-transform">
                <Download size={20} />
              </div>
              <span className="font-bold text-lg text-[color:var(--primary)]">Download CV</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
