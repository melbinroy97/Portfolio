import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const credentials = [
  {
    title: "Placement Training: MERN Stack, DevOPS & Cloud Computing",
    issuer: "Training Program",
    date: "2026",
    link: "#",
    color: "#4ade80",
    category: "TRAINING"
  },
  {
    title: "Basics of DSA using C++",
    issuer: "Centre for Professional Enhancement",
    date: "Jun' 2025 - Jul' 2025",
    link: "https://drive.google.com/file/d/1wdB9QPIPq0h0O4EKtzXK-wczcFWvBxYI/view?usp=sharing",
    color: "#3b82f6",
    category: "TRAINING"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct' 2025",
    link: "https://drive.google.com/file/d/1XckEF4YUKjs7hLd9ynU4GsQMI-3zKOHu/view",
    color: "#ff9900",
    category: "CERTIFICATION"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "Sep' 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/RP5A3C66QCIG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    color: "#eab308",
    category: "CERTIFICATION"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep' 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/V1IHXXLFRYDS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    color: "#06b6d4",
    category: "CERTIFICATION"
  },
  {
    title: "Computer Communications",
    issuer: "Coursera",
    date: "Aug' 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/WIP3NSKZYZBF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    color: "#8b5cf6",
    category: "CERTIFICATION"
  }
];

function CredentialCard({ cert, index }: { cert: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bento-card p-6 md:p-8 group flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[color:var(--primary)] text-[color:var(--primary)] group-hover:text-white">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold tracking-widest bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-3 py-1 rounded-full">{cert.category}</span>
      </div>

      <h4 className="text-xl font-bold mb-2 leading-tight group-hover:text-[color:var(--primary)] transition-colors">{cert.title}</h4>
      <p className="text-sm text-[color:var(--muted)] font-medium mb-6">{cert.issuer} • {cert.date}</p>

      <div className="pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center mt-auto">
        <motion.a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-[color:var(--primary)] transition-colors"
        >
          VERIFY CREDENTIAL <ExternalLink size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const training = credentials.filter(c => c.category === 'TRAINING');
  const certifications = credentials.filter(c => c.category === 'CERTIFICATION');

  return (
    <div className="mt-20 w-full space-y-20">
      
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold tracking-tight">Training</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {training.map((cert, index) => (
            <CredentialCard key={`train-${index}`} cert={cert} index={index} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8 mt-12">
          <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CredentialCard key={`cert-${index}`} cert={cert} index={index} />
          ))}
        </div>
      </div>

    </div>
  );
}
