import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev: number) => (prev < 100 ? prev + 1 : 100));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[color:var(--background)] flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      <div className="relative w-full max-w-lg flex flex-col gap-8">
        {/* Loading header */}
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.3em] opacity-30 uppercase">SYSTEM_CORE_INIT</span>
            <h2 className="text-xl font-bold tracking-tighter text-white">MELBIN ROY / <span className="text-[color:var(--primary)] text-outline">PORTFOLIO</span></h2>
          </div>
          <span className="text-4xl font-black text-[color:var(--primary)] leading-none">{percent}%</span>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full bg-white/5 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="h-full bg-[color:var(--primary)] shadow-[0_0_15px_rgba(255,77,0,0.5)]"
          />
        </div>

        {/* Status logs (Flickering effect) */}
        <div className="flex flex-col gap-2 font-mono text-[9px] text-[color:var(--muted)] opacity-50">
          <p className="flex justify-between">
            <span>&gt; LOADING_ARCHITECTURE_BLUEPRINTS...</span>
            <span className="text-green-500">DONE</span>
          </p>
          <p className="flex justify-between">
            <span>&gt; INITIALIZING_CREATIVE_MODULES...</span>
            <span className="text-green-500">{percent > 40 ? 'DONE' : 'WAIT'}</span>
          </p>
          <p className="flex justify-between">
            <span>&gt; RENDERING_PRECISION_CRAFTSMANSHIP...</span>
            <span className="text-[color:var(--primary)] animate-pulse">{percent === 100 ? 'READY' : 'BUSY'}</span>
          </p>
        </div>

        {/* Handcrafted note footer */}
        <div className="absolute -bottom-24 left-0 w-full flex justify-center opacity-40">
          <span className="handwritten text-lg rotate-[-2deg]">"Good things take time."</span>
        </div>

        {/* Corner tech label */}
        <div className="absolute -top-12 -right-8 px-3 py-1 bg-[color:var(--accent)] text-black text-[10px] font-black rotate-12">
          BOOT_SQ_01
        </div>
      </div>

    </motion.div>
  );
}
