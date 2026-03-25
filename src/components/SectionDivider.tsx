import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-32 flex flex-col items-center justify-center relative overflow-hidden">
      {/* The "Opening" Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[color:var(--primary)] to-transparent relative">
        <motion.div 
          style={{ width }}
          className="absolute inset-0 bg-[color:var(--primary)] shadow-[0_0_20px_var(--primary)]"
        />
        
        {/* Label in the center */}
        {label && (
          <motion.div 
            style={{ opacity, scale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--background)] px-6 py-2 border border-[color:var(--primary)]/30 backdrop-blur-sm"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--primary)] uppercase whitespace-nowrap">
              {label}
            </span>
          </motion.div>
        )}
      </div>

      {/* Decorative architectural elements */}
      <div className="flex justify-between w-full mt-4 opacity-20">
        <div className="text-[10px] font-mono">COORD_X: 001.24</div>
        <div className="text-[10px] font-mono">SECT_REVEAL: ACTIVE</div>
      </div>
    </div>
  );
}
