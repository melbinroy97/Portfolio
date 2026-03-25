import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollBackground from './components/ScrollBackground';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import ProjectsMoodboard from './components/ProjectsMoodboard';
import AboutSection from './components/AboutSection';
import Achievements from './components/Achievements';
import ContactSection from './components/ContactSection';
import SectionDivider from './components/SectionDivider';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-[color:var(--primary)] selection:text-white">
            <ScrollBackground />
            <div className="grainy" />
            <Navbar />
            <main className="relative z-10 flex flex-col items-center w-full pb-24 pt-14">
              <Hero />
              <TechMarquee />
              
              <SectionDivider label="PROJECT_PORTFOLIO" />
              <ProjectsMoodboard />
              
              <SectionDivider label="PERSONAL_MISSION & CREDENTIALS" />
              <AboutSection />

              <SectionDivider label="MILESTONES & ACTIVITIES" />
              <Achievements />

              <SectionDivider label="CONNECT" />
              <ContactSection />
            </main>
            <footer className="relative z-10 w-full py-8 text-center text-sm text-[color:var(--muted)] border-t border-[color:var(--border)] bg-[color:var(--secondary)] mt-auto">
              <p>© {new Date().getFullYear()} Melbin Roy. Crafted with Precision & Creativity.</p>
            </footer>
          </div>
        </SmoothScroll>
      )}
    </ThemeProvider>
  );
}

export default App;
