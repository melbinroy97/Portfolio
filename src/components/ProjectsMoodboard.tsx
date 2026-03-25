
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import quizArenaImage from '../assets/quiz-arena-live.png';
import careermindImage from '../assets/careermind-project.png';
import examAuthImage from '../assets/exam-auth-project.png';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  rotation: number;
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Quiz Arena',
    category: 'MERN Stack / Real-time',
    description: 'A full-stack competition platform with live leaderboards, timed sessions, and Socket.io integration.',
    color: '#ff4d00',
    rotation: -3,
    image: quizArenaImage,
    github: 'https://github.com/melbinroy97/QuizArena',
    live: 'https://quizzarena-frontend.onrender.com/'
  },
  {
    id: '02',
    title: 'CareerMind',
    category: 'AI / Career Orchestration',
    description: 'Next-gen AI career discovery platform. Features personalized roadmap generation and intelligent resume building using Google Gemini.',
    color: '#3b82f6',
    rotation: -1,
    image: careermindImage,
    github: 'https://github.com/melbinroy97/CareerMind',
    live: 'https://careermind-lbdl.onrender.com/'
  },
  {
    id: '03',
    title: 'Secure Exam Auth',
    category: 'Security / Aadhaar Auth',
    description: 'Aadhaar-linked authentication system to prevent exam impersonation. Features QR code-based hall ticket verification and biometric sync.',
    color: '#00e5ff',
    rotation: 2,
    image: examAuthImage,
    github: 'https://github.com/melbinroy97/Exam-Impersonation-Detection-System-by-using-QR-code-Scanner'
  }
];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bento-card flex flex-col h-full group"
    >
      {/* Image Header */}
      <div className="w-full aspect-video bg-black/5 dark:bg-black/40 overflow-hidden relative border-b border-black/5 dark:border-white/5">
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white font-bold tracking-widest z-20">
          PROJ_{project.id}
        </div>
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
          ) : (
            <h3 className="text-xl font-bold opacity-30" style={{ color: project.color }}>{project.title}</h3>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-[color:var(--primary)] transition-colors">{project.title}</h3>
        <p className="text-sm text-[color:var(--muted)] font-medium leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex gap-2 sm:gap-3 justify-between items-center mt-auto">
          <span className="inline-flex items-center justify-center text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--primary)] bg-[color:var(--primary)]/10 px-2 sm:px-3 py-1.5 rounded-full h-7 min-w-0">
            <span className="truncate">{project.category}</span>
          </span>
          <div className="flex gap-2 sm:gap-3 flex-shrink-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[color:var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[color:var(--primary)] hover:border-transparent hover:text-white transition-colors flex-shrink-0"
              >
                <Github size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[color:var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[color:var(--primary)] hover:border-transparent hover:text-white transition-colors flex-shrink-0"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsMoodboard() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">

      <div className="flex flex-col mb-16 px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[color:var(--foreground)]"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-[color:var(--muted)] font-medium max-w-xl"
        >
          Selected works showcasing modern design and technical architecture.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch px-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}
