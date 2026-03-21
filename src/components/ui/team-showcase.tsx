import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Linkedin } from 'lucide-react';
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

  const whatsappLink = `https://wa.me/+60124362984?text=${encodeURIComponent("Hi! I Would like to apply as a teacher!")}`;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Header Box - Overlapping */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-white rounded-[40px] shadow-xl px-12 py-8 border border-gray-100 text-center min-w-[320px]">
          <h2 className="text-4xl font-display font-bold tracking-tight text-[#111111] uppercase">
            MEET THE <br />
            <span className="text-kumon-blue">INSTRUCTORS.</span>
          </h2>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white/40 backdrop-blur-xl rounded-[80px] p-12 md:p-20 shadow-2xl border border-white/20 min-h-[700px] flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        
        {/* Left Side: Grid */}
        <div className="flex-1 relative">
          {/* Badge */}
          <div className="absolute -top-12 left-0 z-20">
            <div className="bg-kumon-blue text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-kumon-blue/20">
              HOVER A PHOTO FOR DETAILS! <Plus size={12} className="rotate-45" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 relative">
            {/* Column 1 */}
            <div className="space-y-6">
              <TeacherPhoto 
                teacher={teachers[0]} 
                isHovered={hoveredId === 0} 
                anyHovered={hoveredId !== null}
                onHover={() => setHoveredId(0)}
                onLeave={() => setHoveredId(null)}
              />
              <PlaceholderCard onHover={() => setPlaceholderHovered(2)} onLeave={() => setPlaceholderHovered(null)} />
            </div>

            {/* Column 2 - Shifted Down */}
            <div className="space-y-6 pt-12">
              <TeacherPhoto 
                teacher={teachers[1]} 
                isHovered={hoveredId === 1} 
                anyHovered={hoveredId !== null}
                onHover={() => setHoveredId(1)}
                onLeave={() => setHoveredId(null)}
              />
              <PlaceholderCard onHover={() => setPlaceholderHovered(3)} onLeave={() => setPlaceholderHovered(null)} />
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <PlaceholderCard onHover={() => setPlaceholderHovered(4)} onLeave={() => setPlaceholderHovered(null)} />
              <PlaceholderCard onHover={() => setPlaceholderHovered(5)} onLeave={() => setPlaceholderHovered(null)} />
            </div>

            {/* Floating Profile Card */}
            <AnimatePresence>
              {hoveredId !== null && teachers[hoveredId] && !teachers[hoveredId].isPlaceholder && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  className={cn(
                    "absolute z-50 w-[450px] max-w-[90vw] bg-white rounded-[40px] p-8 shadow-2xl border border-gray-100 pointer-events-none",
                    hoveredId === 0 ? "top-[180px] left-0" : "top-[280px] left-[100px]"
                  )}
                >
                  <span className="text-[10px] font-bold text-kumon-blue uppercase tracking-[0.2em] mb-2 block">
                    INSTRUCTOR PROFILE
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
                </motion.div>
              )}
            </AnimatePresence>

            {/* Placeholder Hover Card */}
            <AnimatePresence>
              {placeholderHovered !== null && (
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
                className={cn(
                  "flex items-center gap-4 transition-all duration-300",
                  hoveredId === teacher.id ? "opacity-100 translate-x-2" : "opacity-40"
                )}
              >
                <div className={cn(
                  "w-4 h-2 rounded-full transition-all",
                  hoveredId === teacher.id ? "bg-kumon-blue w-6" : "bg-gray-400"
                )} />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-bold text-lg text-[#111111]">
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

function TeacherPhoto({ teacher, isHovered, anyHovered, onHover, onLeave }: any) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "relative aspect-square rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 shadow-xl",
        anyHovered && !isHovered ? "grayscale opacity-40 scale-95" : "grayscale-0 opacity-100 scale-100",
        isHovered && "z-40 ring-8 ring-white/50"
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
      className="aspect-square rounded-[32px] border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-200 bg-white/20 transition-all hover:border-kumon-blue hover:text-kumon-blue cursor-pointer"
    >
      <Plus size={32} />
    </div>
  );
}
