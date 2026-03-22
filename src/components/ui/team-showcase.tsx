import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Linkedin, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const teachers = [
  {
    id: 0,
    name: "Teacher Siti",
    role: "LEAD MATH INSTRUCTOR",
    image: "https://i.postimg.cc/G3xx7WLN/8adbf493d4d0714d59329c33ca13d86d.jpg",
    bio: "\"I believe every child has the potential to master mathematics through consistent, small steps and self-discovery.\"",
    isPlaceholder: false
  },
  {
    id: 1,
    name: "Sir Ahmad",
    role: "ENGLISH SPECIALIST",
    image: "https://i.postimg.cc/1RrrCkmd/60474d860e858e6bcda4556c80e9b3f2.jpg",
    bio: "\"Language is a gateway to the world. My goal is to nurture a lifelong love for reading and critical thinking in every student.\"",
    isPlaceholder: false
  },
  {
    id: 2,
    name: "Join Our Team",
    role: "MATH ASSISTANT",
    isPlaceholder: true
  },
  {
    id: 3,
    name: "Join Our Team",
    role: "ENGLISH ASSISTANT",
    isPlaceholder: true
  },
  {
    id: 4,
    name: "Join Our Team",
    role: "ADMIN SUPPORT",
    isPlaceholder: true
  },
  {
    id: 5,
    name: "Join Our Team",
    role: "STUDENT MENTOR",
    isPlaceholder: true
  }
];

export default function TeamShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [placeholderHovered, setPlaceholderHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const whatsappLink = `https://wa.me/+60124362984?text=${encodeURIComponent("Hi! I Would like to apply as a teacher!")}`;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0">
      {/* Header Box - Overlapping */}
      <div className="relative md:absolute -top-8 md:-top-24 left-1/2 -translate-x-1/2 z-30 mb-8 md:mb-0">
        <div className="bg-white rounded-3xl md:rounded-[40px] shadow-xl px-8 md:px-12 py-6 md:py-8 border border-gray-100 text-center min-w-[280px] md:min-w-[320px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#111111] uppercase">
            MEET THE <br />
            <span className="text-kumon-blue">INSTRUCTORS.</span>
          </h2>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white/40 backdrop-blur-xl rounded-[40px] md:rounded-[80px] p-6 md:p-20 shadow-2xl border border-white/20 min-h-auto md:min-h-[700px] flex flex-col lg:flex-row gap-10 md:gap-16 items-center lg:items-start">
        
        {/* Left Side: Grid */}
        <div className="flex-1 w-full relative">
          {/* Badge */}
          <div className="absolute -top-10 md:-top-12 left-0 z-20">
            <div className="bg-kumon-blue text-white px-3 md:px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-kumon-blue/20">
              {isMobile ? "TAP A PHOTO FOR DETAILS!" : "HOVER A PHOTO FOR DETAILS!"} <Plus size={10} className="rotate-45" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative">
            {/* Column 1 */}
            <div className="space-y-4 md:space-y-6">
              <TeacherPhoto 
                teacher={teachers[0]} 
                isHovered={hoveredId === 0} 
                anyHovered={hoveredId !== null}
                onHover={() => setHoveredId(0)}
                onLeave={() => setHoveredId(null)}
                onClick={() => isMobile && setHoveredId(hoveredId === 0 ? null : 0)}
              />
              <PlaceholderCard onHover={() => setPlaceholderHovered(2)} onLeave={() => setPlaceholderHovered(null)} />
            </div>

            {/* Column 2 - Shifted Down */}
            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
              <TeacherPhoto 
                teacher={teachers[1]} 
                isHovered={hoveredId === 1} 
                anyHovered={hoveredId !== null}
                onHover={() => setHoveredId(1)}
                onLeave={() => setHoveredId(null)}
                onClick={() => isMobile && setHoveredId(hoveredId === 1 ? null : 1)}
              />
              <PlaceholderCard onHover={() => setPlaceholderHovered(3)} onLeave={() => setPlaceholderHovered(null)} />
            </div>

            {/* Column 3 - Stacks on mobile if needed, but grid-cols-2 handles it */}
            <div className="space-y-4 md:space-y-6 md:pt-0 pt-0">
              <PlaceholderCard onHover={() => setPlaceholderHovered(4)} onLeave={() => setPlaceholderHovered(null)} />
              <PlaceholderCard onHover={() => setPlaceholderHovered(5)} onLeave={() => setPlaceholderHovered(null)} />
            </div>

            {/* Floating Profile Card */}
            <AnimatePresence>
              {hoveredId !== null && teachers[hoveredId] && !teachers[hoveredId].isPlaceholder && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className={cn(
                    "z-50 bg-white rounded-[24px] md:rounded-[40px] p-5 md:p-8 shadow-2xl border border-gray-100",
                    isMobile 
                      ? "absolute top-0 left-0 w-full h-full flex flex-col justify-center bg-white/95 backdrop-blur-sm" 
                      : cn(
                          "absolute w-[450px] max-w-[90vw] pointer-events-none",
                          hoveredId === 0 ? "top-[180px] left-0" : "top-[280px] left-[100px]"
                        )
                  )}
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setHoveredId(null);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shadow-sm active:scale-95 transition-transform"
                  >
                    <X size={20} />
                  </button>
                  <span className="text-[10px] font-bold text-kumon-blue uppercase tracking-[0.2em] mb-2 block">
                    INSTRUCTOR PROFILE
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#111111] mb-1">
                    {teachers[hoveredId].name}
                  </h3>
                  <p className="text-[10px] font-bold text-kumon-blue uppercase tracking-widest mb-4 md:mb-6">
                    {teachers[hoveredId].role}
                  </p>
                  <div className="h-[1px] bg-gray-100 w-full mb-4 md:mb-6" />
                  <p className="text-sm md:text-base text-body-text leading-relaxed italic">
                    {teachers[hoveredId].bio}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Placeholder Hover Card */}
            <AnimatePresence>
              {placeholderHovered !== null && !isMobile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute z-50 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 pointer-events-none font-bold text-kumon-blue uppercase tracking-widest text-xs"
                  style={{
                    top: placeholderHovered === 2 ? '350px' : placeholderHovered === 3 ? '450px' : placeholderHovered === 4 ? '100px' : '300px',
                    left: placeholderHovered === 2 ? '0' : placeholderHovered === 3 ? '200px' : placeholderHovered === 4 ? '400px' : '400px'
                  }}
                >
                  Come teach with us!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: List */}
        <div className="w-full lg:w-[350px] space-y-8">
          <div className="space-y-6">
            {teachers.map((teacher) => (
              <div 
                key={teacher.id}
                onClick={() => !teacher.isPlaceholder && setHoveredId(teacher.id)}
                className={cn(
                  "flex items-center gap-4 transition-all duration-300 cursor-pointer group",
                  hoveredId === teacher.id ? "opacity-100 translate-x-2" : "opacity-40 hover:opacity-70"
                )}
              >
                <div className={cn(
                  "w-4 h-2 rounded-full transition-all",
                  hoveredId === teacher.id ? "bg-kumon-blue w-6" : "bg-gray-400 group-hover:bg-kumon-blue/50"
                )} />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={cn(
                      "font-display font-bold text-lg transition-colors",
                      hoveredId === teacher.id ? "text-kumon-blue" : "text-[#111111]"
                    )}>
                      {teacher.name}
                    </h4>
                    {!teacher.isPlaceholder && <Linkedin size={12} className="text-gray-300" />}
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-kumon-blue text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-kumon-blue/90 transition-all shadow-xl shadow-kumon-blue/20 mt-12"
          >
            APPLY AS A TEACHER <ArrowRight size={18} />
          </a>
          <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">
            We're hiring, so drop your resume!
          </p>
        </div>
      </div>
    </div>
  );
}

function TeacherPhoto({ teacher, isHovered, anyHovered, onHover, onLeave, onClick }: any) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cn(
        "relative aspect-square rounded-2xl md:rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 shadow-xl",
        anyHovered && !isHovered ? "grayscale opacity-40 scale-95" : "grayscale-0 opacity-100 scale-100",
        isHovered && "z-40 ring-4 md:ring-8 ring-white/50"
      )}
    >
      <img 
        src={teacher.image} 
        alt={teacher.name} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}

function PlaceholderCard({ onHover, onLeave }: any) {
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="aspect-square rounded-2xl md:rounded-[32px] border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-200 bg-white/20 transition-all hover:border-kumon-blue hover:text-kumon-blue cursor-pointer"
    >
      <Plus size={24} className="md:w-8 md:h-8" />
    </div>
  );
}
