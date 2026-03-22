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
    bio: "We're looking for passionate individuals to help students master mathematics. Join our mission today!",
    isPlaceholder: true
  },
  {
    id: 3,
    name: "Join Our Team",
    role: "ENGLISH ASSISTANT",
    bio: "Help us nurture a love for reading and language. Become part of our dedicated English teaching team.",
    isPlaceholder: true
  },
  {
    id: 4,
    name: "Join Our Team",
    role: "ADMIN SUPPORT",
    bio: "Support our center's operations and help us provide a smooth learning experience for all families.",
    isPlaceholder: true
  },
  {
    id: 5,
    name: "Join Our Team",
    role: "STUDENT MENTOR",
    bio: "Guide and inspire students as they navigate their Kumon journey. Share your knowledge and experience.",
    isPlaceholder: true
  }
];

export default function TeamShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const profileRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (isMobile && hoveredId !== null) {
      setTimeout(() => {
        profileRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [hoveredId, isMobile]);

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 relative">
            {teachers.map((teacher, index) => (
              <React.Fragment key={teacher.id}>
                <div className={cn(
                  "space-y-4 md:space-y-6",
                  index === 1 && "md:pt-12", // Sir Ahmad shift on desktop only
                )}>
                  {!teacher.isPlaceholder ? (
                    <TeacherPhoto 
                      teacher={teacher} 
                      isHovered={hoveredId === teacher.id} 
                      anyHovered={hoveredId !== null}
                      onHover={() => !isMobile && setHoveredId(teacher.id)}
                      onLeave={() => !isMobile && setHoveredId(null)}
                      onClick={() => isMobile && setHoveredId(hoveredId === teacher.id ? null : teacher.id)}
                    />
                  ) : (
                    <PlaceholderCard 
                      isHovered={hoveredId === teacher.id}
                      anyHovered={hoveredId !== null}
                      onHover={() => !isMobile && setHoveredId(teacher.id)} 
                      onLeave={() => !isMobile && setHoveredId(null)} 
                      onClick={() => isMobile && setHoveredId(hoveredId === teacher.id ? null : teacher.id)}
                    />
                  )}
                </div>

                {/* Mobile Description - Inserted after the clicked photo */}
                <AnimatePresence>
                  {isMobile && hoveredId === teacher.id && (
                    <motion.div
                      ref={profileRef}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative mt-4 w-full bg-white rounded-[24px] p-6 shadow-xl border-l-4 border-l-kumon-blue overflow-hidden"
                    >
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoveredId(null);
                        }}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                      >
                        <X size={16} />
                      </button>
                      <span className="text-[10px] font-bold text-kumon-blue uppercase tracking-[0.2em] mb-2 block">
                        {teacher.isPlaceholder ? "CAREER OPPORTUNITY" : "INSTRUCTOR PROFILE"}
                      </span>
                      <h3 className="text-xl font-display font-bold text-[#111111] mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-[10px] font-bold text-kumon-blue uppercase tracking-widest mb-4">
                        {teacher.role}
                      </p>
                      <div className="h-[1px] bg-gray-100 w-full mb-4" />
                      <p className="text-sm text-body-text leading-relaxed italic">
                        {teacher.bio}
                      </p>
                      {teacher.isPlaceholder && (
                        <div className="mt-4 pt-4 border-t border-gray-50">
                          <p className="text-xs font-bold text-kumon-blue uppercase tracking-widest">
                            Come teach with us!
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </div>

          {/* Floating Profile Card (Desktop Only) */}
          <AnimatePresence>
            {!isMobile && hoveredId !== null && teachers[hoveredId] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className={cn(
                  "z-50 bg-white rounded-[40px] p-8 shadow-2xl border border-gray-100 absolute w-[450px] max-w-[90vw] pointer-events-none",
                  // Dynamic positioning based on grid index
                  (hoveredId % 3 === 0) ? "left-0" : (hoveredId % 3 === 1) ? "left-[100px]" : "left-[200px]",
                  (Math.floor(hoveredId / 3) === 0) 
                    ? (hoveredId === 1 ? "top-[280px]" : "top-[180px]") 
                    : (hoveredId === 4 ? "top-[480px]" : "top-[380px]")
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
                  {teachers[hoveredId].isPlaceholder ? "CAREER OPPORTUNITY" : "INSTRUCTOR PROFILE"}
                </span>
                <h3 className="text-2xl font-display font-bold text-[#111111] mb-1">
                  {teachers[hoveredId].name}
                </h3>
                <p className="text-[10px] font-bold text-kumon-blue uppercase tracking-widest mb-6">
                  {teachers[hoveredId].role}
                </p>
                <div className="h-[1px] bg-gray-100 w-full mb-6" />
                <p className="text-base text-body-text leading-relaxed italic">
                  {teachers[hoveredId].bio}
                </p>
                {teachers[hoveredId].isPlaceholder && (
                  <div className="mt-6 pt-6 border-t border-gray-50">
                    <p className="text-sm font-bold text-kumon-blue uppercase tracking-widest">
                      Come teach with us!
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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

function PlaceholderCard({ isHovered, anyHovered, onHover, onLeave, onClick }: any) {
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cn(
        "aspect-square rounded-2xl md:rounded-[32px] border-2 border-dashed flex items-center justify-center transition-all duration-500 cursor-pointer shadow-sm",
        anyHovered && !isHovered ? "opacity-40 scale-95 border-gray-200 bg-white/10" : "opacity-100 scale-100 border-gray-300 bg-white/20",
        isHovered ? "border-kumon-blue text-kumon-blue bg-white/40 ring-4 md:ring-8 ring-white/50 z-40" : "text-gray-200"
      )}
    >
      <Plus size={24} className={cn("md:w-8 md:h-8 transition-transform", isHovered && "scale-110")} />
    </div>
  );
}
