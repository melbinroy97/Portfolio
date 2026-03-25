import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Download, MapPin, BadgeCheck } from 'lucide-react';
import heroImage from '../assets/hero.jpg';
import realHeroImage from '../assets/real-hero.png';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const bentoItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 w-full">

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <motion.h1 style={{ y }} className="text-[12vw] font-black leading-none whitespace-nowrap">
          PORTFOLIO
        </motion.h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
      >

        {/* Main Intro Card (Span 8) */}
        <motion.div variants={bentoItem} className="md:col-span-8 lg:col-span-8 bento-card p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8 mt-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight mb-4 text-[color:var(--foreground)] flex items-center gap-3">
              Melbin Roy
              <BadgeCheck className="w-8 h-8 md:w-10 md:h-10 text-white fill-blue-500 flex-shrink-0" />
            </h2>
            <h3 className="text-[22px] md:text-[26px] font-medium text-[color:var(--foreground)] opacity-80">
              Full Stack Developer & Problem Solver
            </h3>
          </div>

          <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[1.5rem] p-6 lg:p-8 max-w-[95%]">
            <p className="text-[17px] md:text-[19px] text-[color:var(--muted)] font-medium leading-[1.6] opacity-90">
              Building scalable applications and turning ideas into efficient, real-world solutions through clean code.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={bentoItem}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`md:col-span-4 lg:col-span-4 bento-card p-3 flex flex-col cursor-pointer group/portrait transition-colors duration-500 ${isHovered ? 'bg-[#1a2b3c]' : ''}`}
        >
          <div className="w-full h-full min-h-[300px] relative rounded-[1.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="anime"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.img
                    src={heroImage}
                    alt="Anime Avatar"
                    animate={{
                      rotate: [0, 5, -5, 5, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full object-cover grayscale group-hover/portrait:grayscale-0 transition-all duration-700"
                  />
                  {/* "Wave" Hint / Overlay */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover/portrait:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Hi!</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="real"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={realHeroImage}
                    alt="Melbin Roy"
                    className="w-full h-full object-cover grayscale-0 group-hover/portrait:scale-110 transition-transform duration-[2000ms]"
                  />
                  {/* Subtle vignette/gradient to blend with bento black */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-white font-bold text-lg leading-tight">
                {isHovered ? "Melbin Roy" : "The Brain"}
              </h3>
              <p className="text-white/70 text-sm font-medium flex items-center gap-1 mt-1">
                <MapPin size={12} /> {isHovered ? "India" : "Digital Nomad"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons Row */}
        <motion.div variants={bentoItem} className="md:col-span-12 flex flex-col md:flex-row gap-4">

          <motion.a
            href="/Resume.pdf"
            download
            whileHover={{ scale: 0.98 }}
            className="flex-1 bento-card p-6 !bg-[color:var(--primary)] text-white hover:!bg-[color:var(--primary)]/90 transition-colors flex items-center justify-between group cursor-pointer"
          >
            <div className="flex-1">
              <span className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Get my resumé</span>
              <span className="block text-xl font-bold">Download CV</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <Download size={20} className="text-white" />
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/melbinroy97"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 0.98 }}
            className="flex-1 bento-card p-6 hover:bg-black/5 dark:hover:bg-white/[0.05] transition-colors flex items-center justify-between group cursor-pointer"
          >
            <div>
              <span className="block text-xs font-bold text-[color:var(--muted)] mb-1 uppercase tracking-wider">Code & Projects</span>
              <span className="block text-xl font-bold">GitHub</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform text-[color:var(--foreground)]">
              <Github size={20} />
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/melbin-roy/"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 0.98 }}
            className="flex-1 bento-card p-6 hover:bg-black/5 dark:hover:bg-white/[0.05] transition-colors flex items-center justify-between group cursor-pointer"
          >
            <div>
              <span className="block text-xs font-bold text-[color:var(--muted)] mb-1 uppercase tracking-wider">Professional</span>
              <span className="block text-xl font-bold">LinkedIn</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:-rotate-12 transition-transform text-[#0a66c2]">
              <Linkedin size={20} />
            </div>
          </motion.a>

        </motion.div>

      </motion.div>
    </section>
  );
}
