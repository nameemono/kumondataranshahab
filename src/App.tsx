/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Calculator, 
  Target, 
  Users, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Star,
  Plus,
  Check,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';
import { Testimonial } from './components/ui/testimonial-card';
import { cn } from './lib/utils';
import TeamShowcase from './components/ui/team-showcase';
import { FeatureSteps } from './components/ui/feature-section';
import { Carousel } from './components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#contact' },
    { name: 'Key Pillars', href: '#how-it-works' },
    { name: 'Instructors', href: '#about' },
    { name: 'Headmaster', href: '#benefits' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-kumon-blue py-4 shadow-md' : 'bg-kumon-blue/80 backdrop-blur-sm py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex flex-col items-start leading-none cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://kumonmalaysia.com/wp-content/themes/kumon/assets/img/logo.png" 
            alt="Kumon Logo" 
            className="h-6 md:h-8 w-auto object-contain mb-1"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/90 whitespace-nowrap">
            Dataran Shahab
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium uppercase tracking-widest text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-kumon-blue px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/90 hover:scale-105 transition-all shadow-lg cursor-pointer"
          >
            Book Free Assessment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-kumon-blue shadow-2xl py-10 px-8 flex flex-col gap-8 md:hidden border-t border-white/10 z-50"
          >
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-display font-bold uppercase tracking-widest border-b border-white/10 pb-4 text-white flex justify-between items-center cursor-pointer hover:text-white/80 transition-colors"
              >
                {link.name}
                <ChevronRight size={20} className="text-white/40" />
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-kumon-blue py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-transform cursor-pointer hover:bg-white/90"
            >
              Book Free Assessment
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-transparent py-12 md:py-20">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[1px] border-white/10 rounded-full pointer-events-none opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-white/10 rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-3xl md:rounded-[50px] shadow-2xl border border-white/20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center"
        >
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-[72px] font-display font-bold leading-[0.85] tracking-tighter text-[#111111]">
              DAH BUAT<br />
              <span className="text-kumon-blue">KUMON?</span>
            </h1>
            <p className="text-lg md:text-xl text-body-text font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 md:px-0">
              KUMON teaches your child how to think, not what to think.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 pt-6 px-4 md:px-0">
              <button 
                onClick={() => document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-kumon-blue text-white px-8 md:px-10 py-5 md:py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-kumon-blue/30 w-full sm:w-auto whitespace-nowrap cursor-pointer"
              >
                Book Free Assessment <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-kumon-blue border-2 border-kumon-blue/20 px-8 md:px-10 py-5 md:py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-kumon-blue/10 w-full sm:w-auto whitespace-nowrap cursor-pointer"
              >
                Our Method
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px]">
            {/* Vertical Text Background */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 vertical-text font-display font-bold text-gray-200 text-8xl select-none opacity-20 z-0">
              MASTERY
            </div>

            {/* Image 1: Top Left */}
            <motion.div 
              initial={{ x: -100, y: -80, rotate: -15, opacity: 0 }}
              animate={{ x: 10, y: -60, rotate: -8, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-full w-[200px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl border-4 border-white z-10 hover:z-50 hover:scale-110 transition-all duration-500 cursor-pointer group"
            >
              <img 
                src="https://i.postimg.cc/3Ntp8HNP/Asian-girl-student-online-learning-class-study-online-with-the-teacher-happy-girl-learn-english-lang.jpg" 
                alt="Student Learning" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Image 2: Top Right */}
            <motion.div 
              initial={{ x: 100, y: -80, rotate: 15, opacity: 0 }}
              animate={{ x: 70, y: -50, rotate: 6, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-y-full w-[200px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl border-4 border-white z-20 hover:z-50 hover:scale-110 transition-all duration-500 cursor-pointer group"
            >
              <img 
                src="https://i.postimg.cc/1RrrCkmd/60474d860e858e6bcda4556c80e9b3f2.jpg" 
                alt="Student Studying" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Image 3: Bottom Left */}
            <motion.div 
              initial={{ x: -100, y: 80, rotate: -10, opacity: 0 }}
              animate={{ x: 0, y: 40, rotate: -4, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-full w-[200px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl border-4 border-white z-30 hover:z-50 hover:scale-110 transition-all duration-500 cursor-pointer group"
            >
              <img 
                src="https://i.postimg.cc/v8ttqJYk/694e10a1eb8061bb47b9515afdb174e4.jpg" 
                alt="Student Focused" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Image 4: Bottom Right (Happy Student) */}
            <motion.div 
              initial={{ x: 100, y: 80, rotate: 10, opacity: 0 }}
              animate={{ x: 60, y: 60, rotate: 10, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 w-[240px] aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-40 hover:z-50 hover:scale-105 transition-all duration-500 cursor-pointer group"
            >
              <img 
                src="https://i.postimg.cc/G3xx7WLN/8adbf493d4d0714d59329c33ca13d86d.jpg" 
                alt="Happy Student" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute top-0 right-0 w-24 h-24 grid grid-cols-4 gap-2 opacity-10">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-kumon-blue rounded-full" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutKumon = () => {
  return (
    <section id="about-kumon" className="py-12 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-3xl md:rounded-[60px] p-6 md:p-20 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://i.postimg.cc/QtKm6m8z/1593966872048787-1.jpg" 
              alt="Kumon Logo" 
              className="w-full max-w-full md:max-w-[650px] h-auto object-contain rounded-2xl md:rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-[#111111]">
              NEVER HEARD OF <span className="text-kumon-blue">KUMON?</span>
            </h2>
            <p className="text-lg text-body-text leading-relaxed">
              Kumon is the world's largest after-school learning programme, designed to help children of all ages and abilities develop a love for learning and the motivation to learn on their own. 
            </p>
            <p className="text-lg text-body-text leading-relaxed">
              Founded in Japan in 1954 by Toru Kumon, a high school teacher and father who wanted to help his son improve his math skills, the Kumon Method focuses on individualized instruction and self-learning. We believe that every child has the potential to succeed, and our goal is to help them reach that potential through small, manageable steps.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-kumon-blue/5 px-4 py-2 rounded-full border border-kumon-blue/10">
                <Globe size={18} className="text-kumon-blue" />
                <span className="text-sm font-bold uppercase tracking-widest text-kumon-blue">Globally-Recognized</span>
              </div>
              <div className="flex items-center gap-2 bg-kumon-blue/5 px-4 py-2 rounded-full border border-kumon-blue/10">
                <Award size={18} className="text-kumon-blue" />
                <span className="text-sm font-bold uppercase tracking-widest text-kumon-blue">Proven Method</span>
              </div>
              <div className="flex items-center gap-2 bg-kumon-blue/5 px-4 py-2 rounded-full border border-kumon-blue/10">
                <TrendingUp size={18} className="text-kumon-blue" />
                <span className="text-sm font-bold uppercase tracking-widest text-kumon-blue">Results-Driven</span>
              </div>
            </div>
            
            {/* Social Buttons in About Section */}
            <div className="flex gap-4 pt-6">
              <a href="https://www.facebook.com/people/Kumon-Dataran-Shahab/61588271020588/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue hover:bg-kumon-blue hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/kumondataranshahab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue hover:bg-kumon-blue hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@kumon.dataran.sha?_r=1&_t=ZS-94OcCglgX92" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue hover:bg-kumon-blue hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.5.73 1.36 1.19 2.26 1.2 1.02.06 2.09-.44 2.69-1.26.54-.78.53-1.78.51-2.69-.01-3.99-.01-7.98-.01-11.97z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Countries Worldwide', value: '60+' },
    { label: 'Students Enrolled', value: '3.5M+' },
    { label: 'Years of Experience', value: '65+' },
    { label: 'Learning Centres', value: '23,000+' },
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-3xl md:rounded-[60px] shadow-2xl border border-white/10 text-kumon-blue">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-6xl font-display font-bold mb-2 md:mb-4">{stat.value}</div>
              <div className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Method = () => {
  const [activeItem, setActiveItem] = useState("item-0");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      title: "SELF-LEARNING",
      emotion: "Confidence",
      desc: "Children learn how to think, not just what to learn. We guide them to solve problems independently, building real confidence.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    },
    {
      title: "DAILY PRACTICE",
      emotion: "Discipline",
      desc: "Consistent daily work builds focus, discipline, and strong learning habits that last beyond the classroom.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "INDIVIDUAL PACE",
      emotion: "No Pressure",
      desc: "Every child progresses at their own level, ensuring deep understanding without stress or pressure.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const currentImage = steps[parseInt(activeItem.replace("item-", ""))].image;

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-2xl border border-white/20 order-1 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 uppercase">
              THE 3 <br />
              <span className="text-kumon-blue">PILLARS.</span>
            </h2>
            <span className="text-kumon-blue font-display font-bold tracking-[0.3em] uppercase text-sm mb-8 block">
              Kumon's world-class tuition
            </span>
            
            <Accordion 
              type="single" 
              collapsible 
              value={activeItem}
              onValueChange={(value) => value && setActiveItem(value)}
              className="w-full"
            >
              {steps.map((step, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="border-b-gray-200"
                  onMouseEnter={() => !isMobile && setActiveItem(`item-${i}`)}
                >
                  <AccordionTrigger className="hover:no-underline py-4 md:py-6 group">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={cn(
                        "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs md:text-sm transition-all",
                        activeItem === `item-${i}` ? "border-kumon-blue bg-kumon-blue text-white" : "border-gray-300 text-gray-400 group-hover:border-kumon-blue group-hover:text-kumon-blue"
                      )}>
                        0{i + 1}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <h4 className={cn(
                          "text-base md:text-lg font-display font-bold uppercase tracking-widest transition-colors",
                          activeItem === `item-${i}` ? "text-kumon-blue" : "text-gray-500 group-hover:text-kumon-blue"
                        )}>{step.title}</h4>
                        <span className="text-[10px] md:text-xs bg-kumon-blue/10 text-kumon-blue px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                          {step.emotion}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-body-text leading-relaxed text-sm md:text-base pl-12 md:pl-16 pb-6">
                    {step.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative order-2 lg:order-2 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="aspect-video md:aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center"
              >
                <img 
                  src={currentImage} 
                  alt="Learning Environment" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const TwoPictureInteraction = () => {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pictures = {
    left: {
      src: "https://i.postimg.cc/7649DYcc/eny.jpg",
      name: "Nuraini",
      details: "I'm an English teacher. Fortunately, my own children have gone through Kumon, so I’ve seen firsthand how it builds confidence, discipline, and independent learning. Today, I guide each student step by step, helping them grow at their own pace and reach their full potential."
    },
    right: {
      src: "https://i.postimg.cc/ZRmHZKg2/alun.jpg",
      name: "Alun",
      details: "Behind this journey is my husband, whose constant support means everything to me. With his encouragement, I’m able to give my full attention to guiding each child’s learning."
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 relative">
        {/* Left Picture */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative h-[400px] md:h-[600px] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-3xl md:rounded-[40px] group"
            onMouseEnter={() => setHovered('left')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(hovered === 'left' ? null : 'left')}
            style={{
              transform: hovered === 'left' ? 'scale(1.02)' : 'scale(1)',
              zIndex: hovered === 'left' ? 20 : 10,
            }}
          >
            <img 
              src={pictures.left.src} 
              alt="Teacher"
              className="w-full h-full object-cover rounded-3xl md:rounded-[40px] shadow-2xl transition-all duration-500"
              style={{
                filter: hovered === 'right' ? 'blur(12px) brightness(0.7)' : 'none'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Desktop Details for Right Picture (appears on Left when Right is hovered) */}
            <AnimatePresence>
              {hovered === 'right' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 hidden md:flex flex-col items-center justify-center p-10 text-center z-30 bg-kumon-blue/60 backdrop-blur-md"
                >
                  <p className="text-2xl font-bold text-white drop-shadow-lg leading-relaxed">{pictures.right.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Mobile Overlay Label */}
            <div className="absolute bottom-6 left-6 md:hidden bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-kumon-blue font-bold text-xs uppercase tracking-widest">Tap for Details</span>
            </div>
          </div>
          {/* Mobile Details for Left Picture */}
          <AnimatePresence>
            {hovered === 'left' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="md:hidden bg-kumon-blue text-white p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-2 opacity-80">{pictures.left.name}</h4>
                <p className="text-sm leading-relaxed font-medium italic">"{pictures.left.details}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Picture */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative h-[400px] md:h-[600px] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-3xl md:rounded-[40px] group"
            onMouseEnter={() => setHovered('right')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(hovered === 'right' ? null : 'right')}
            style={{
              transform: hovered === 'right' ? 'scale(1.02)' : 'scale(1)',
              zIndex: hovered === 'right' ? 20 : 10,
            }}
          >
            <img 
              src={pictures.right.src} 
              alt="Husband"
              className="w-full h-full object-cover rounded-3xl md:rounded-[40px] shadow-2xl transition-all duration-500"
              style={{
                filter: hovered === 'left' ? 'blur(12px) brightness(0.7)' : 'none'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Desktop Details for Left Picture (appears on Right when Left is hovered) */}
            <AnimatePresence>
              {hovered === 'left' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 hidden md:flex flex-col items-center justify-center p-10 text-center z-30 bg-kumon-blue/60 backdrop-blur-md"
                >
                  <p className="text-2xl font-bold text-white drop-shadow-lg leading-relaxed">{pictures.left.details}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Overlay Label */}
            <div className="absolute bottom-6 left-6 md:hidden bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-kumon-blue font-bold text-xs uppercase tracking-widest">Tap for Details</span>
            </div>
          </div>
          {/* Mobile Details for Right Picture */}
          <AnimatePresence>
            {hovered === 'right' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="md:hidden bg-kumon-blue text-white p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-2 opacity-80">{pictures.right.name}</h4>
                <p className="text-sm leading-relaxed font-medium italic">"{pictures.right.details}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 md:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-16 rounded-[40px] md:rounded-[60px] shadow-2xl border border-white/20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-6 md:mb-8 text-[#111111]">
              Hi, I’m <span className="text-[#111111]">Nuraini,</span>
            </h2>
            
            {/* Social Buttons */}
            <div className="flex justify-center gap-6 mb-10">
              <a href="https://www.facebook.com/people/Kumon-Dataran-Shahab/61588271020588/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue hover:bg-kumon-blue hover:text-white transition-all shadow-lg">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/kumondataranshahab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue hover:bg-kumon-blue hover:text-white transition-all shadow-lg">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@kumon.dataran.sha?_r=1&_t=ZS-94OcCglgX92" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue hover:bg-kumon-blue hover:text-white transition-all shadow-lg">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.5.73 1.36 1.19 2.26 1.2 1.02.06 2.09-.44 2.69-1.26.54-.78.53-1.78.51-2.69-.01-3.99-.01-7.98-.01-11.97z"/>
                </svg>
              </a>
            </div>
          </div>

          <TwoPictureInteraction />
        </div>
      </div>
    </section>
  );
};

const AssessmentSection = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    childName: '',
    gender: '',
    dob: '',
    schoolName: '',
    regType: 'New Student',
    subjects: [] as string[],
    hasTablet: '',
    hasStylus: '',
    hasInternet: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Kumon Dataran Shahab! 📚 I would like to book a free assessment.

*Parent Details:*
👤 Name: ${formData.parentName}
📞 Phone: ${formData.phoneNumber}

*Child Details:*
👶 Name: ${formData.childName}
🚻 Gender: ${formData.gender}
📅 Date of Birth: ${formData.dob}
🏫 School: ${formData.schoolName}

*Programme Details:*
📝 Registration Type: ${formData.regType}
📖 Subjects: ${formData.subjects.join(', ')}
📱 Has Tablet/iPad: ${formData.hasTablet}
✍️ Has Stylus: ${formData.hasStylus}
🌐 Has Stable Internet: ${formData.hasInternet}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/+60124362984?text=${encodedMessage}`;
    
    window.open(whatsappLink, '_blank');
    setIsSubmitted(true);
  };

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject) 
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  if (isSubmitted) {
    return (
      <section id="assessment" className="py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-md p-12 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/20"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Thank you!</h2>
            <p className="text-body-text text-lg">We'll contact you within 24 hours to arrange your child's first session.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-10 text-kumon-blue font-semibold hover:underline"
            >
              Back to website
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-12 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero Part - Combined into one box */}
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-3xl md:rounded-[60px] border border-white/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="p-6 md:p-20 flex flex-col justify-center">
              <h2 className="text-3xl md:text-[64px] font-bold text-[#111111] leading-tight mb-6">
                Book Your Child’s <br />
                <span className="text-kumon-blue">Free Assessment</span>
              </h2>
              <p className="text-lg md:text-[24px] text-body-text mb-8 leading-relaxed font-medium">
                Tell us about your child so we can recommend the right starting level.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10">
                {[
                  'Personalised learning plan',
                  'No pressure, no obligation',
                  'Suitable for all levels',
                  'Expert guidance'
                ].map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-body-text font-semibold text-sm md:text-lg">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-kumon-blue/10 text-kumon-blue flex items-center justify-center shrink-0">
                      <Check size={12} />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-kumon-blue text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-[20px] hover:scale-105 transition-all shadow-xl shadow-kumon-blue/30 uppercase tracking-widest w-full md:w-fit"
              >
                Start Assessment
              </button>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop" 
                alt="Children Learning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:from-white/40" />
            </div>
          </motion.div>
        </div>

        {/* Form Part */}
        <div id="form-start" className="max-w-3xl mx-auto py-12 md:py-20 scroll-mt-20">
          <div className="bg-white/90 backdrop-blur-md p-6 md:p-12 rounded-3xl md:rounded-[40px] shadow-2xl border border-white/20 mb-8 md:mb-12">
            {/* Header for Free Assessment */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-[#111111] uppercase">
                Free <span className="text-kumon-blue">Assessment</span>
              </h2>
            </div>
            {/* Progress Bar */}
            <div className="mb-0">
              <div className="flex justify-between text-[10px] md:text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">
                <span>Step {step} of 3</span>
                <span>{Math.round((step / 3) * 100)}% Complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  className="h-full bg-kumon-blue"
                />
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-3xl md:rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/20">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#111111]">Parent Details</h3>
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-body-text uppercase tracking-widest">Parent / Guardian Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.parentName}
                        onChange={e => setFormData({...formData, parentName: e.target.value})}
                        className="w-full bg-[#F7F9FC] border-none rounded-xl p-4 focus:ring-2 focus:ring-kumon-blue outline-none" 
                        placeholder="e.g. Ahmad / Sarah" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-body-text uppercase tracking-widest">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phoneNumber}
                        onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                        className="w-full bg-[#F7F9FC] border-none rounded-xl p-4 focus:ring-2 focus:ring-kumon-blue outline-none" 
                        placeholder="e.g. 012-345 6789" 
                      />
                      <p className="text-sm text-gray-400 italic">We’ll contact you to arrange your child’s first session.</p>
                    </div>
                  </div>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.parentName || !formData.phoneNumber}
                    className="w-full bg-kumon-blue text-white py-5 rounded-full font-semibold text-[16px] hover:bg-kumon-blue/90 transition-all shadow-xl shadow-kumon-blue/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#111111]">Child Details</h3>
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-body-text uppercase tracking-widest">Child’s Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.childName}
                        onChange={e => setFormData({...formData, childName: e.target.value})}
                        className="w-full bg-[#F7F9FC] border-none rounded-xl p-4 focus:ring-2 focus:ring-kumon-blue outline-none" 
                        placeholder="Enter child's full name" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-[#4A5568] uppercase tracking-widest">Gender *</label>
                      <div className="flex gap-6">
                        {['Male', 'Female'].map(g => (
                          <label key={g} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.gender === g ? 'border-kumon-blue bg-kumon-blue' : 'border-gray-300'}`}>
                              {formData.gender === g && <div className="w-2 h-2 bg-white rounded-full" />}
                            </div>
                            <input 
                              type="radio" 
                              className="hidden" 
                              name="gender" 
                              value={g} 
                              checked={formData.gender === g}
                              onChange={() => setFormData({...formData, gender: g})}
                            />
                            <span className="text-[#4A5568] font-medium">{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-[#4A5568] uppercase tracking-widest">Date of Birth *</label>
                      <input 
                        type="date" 
                        required
                        value={formData.dob}
                        onChange={e => setFormData({...formData, dob: e.target.value})}
                        className="w-full bg-[#F7F9FC] border-none rounded-xl p-4 focus:ring-2 focus:ring-kumon-blue outline-none" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-[#4A5568] uppercase tracking-widest">School Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.schoolName}
                        onChange={e => setFormData({...formData, schoolName: e.target.value})}
                        className="w-full bg-[#F7F9FC] border-none rounded-xl p-4 focus:ring-2 focus:ring-kumon-blue outline-none" 
                        placeholder="Enter school name" 
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={prevStep}
                      className="flex-1 border-2 border-gray-200 text-gray-500 py-5 rounded-full font-semibold text-[16px] hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={nextStep}
                      disabled={!formData.childName || !formData.gender || !formData.dob || !formData.schoolName}
                      className="flex-[2] bg-kumon-blue text-white py-5 rounded-full font-semibold text-[16px] hover:bg-kumon-blue/90 transition-all shadow-xl shadow-kumon-blue/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#111111]">Programme & Setup</h3>
                    
                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-[#4A5568] uppercase tracking-widest">Registration Type *</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['New Student', 'Existing Student (Transfer)'].map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({...formData, regType: type})}
                            className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.regType === type ? 'border-kumon-blue bg-kumon-blue/5 text-kumon-blue' : 'border-gray-100 text-gray-400'}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-[14px] font-bold text-[#4A5568] uppercase tracking-widest">Interested Programme *</label>
                      <div className="flex gap-6">
                        {['Mathematics', 'English'].map(s => (
                          <label key={s} className="flex items-center gap-3 cursor-pointer">
                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${formData.subjects.includes(s) ? 'border-kumon-blue bg-kumon-blue' : 'border-gray-300'}`}>
                              {formData.subjects.includes(s) && <Check size={14} className="text-white" />}
                            </div>
                            <input 
                              type="checkbox" 
                              className="hidden" 
                              checked={formData.subjects.includes(s)}
                              onChange={() => toggleSubject(s)}
                            />
                            <span className="text-[#4A5568] font-medium">{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-gray-100">
                      {[
                        { label: 'Do you have a tablet/iPad?', key: 'hasTablet' },
                        { label: 'Do you have a stylus?', key: 'hasStylus' },
                        { label: 'Do you have stable internet?', key: 'hasInternet' }
                      ].map(q => (
                        <div key={q.key} className="flex items-center justify-between">
                          <span className="text-[#4A5568] font-medium">{q.label}</span>
                          <div className="flex gap-4">
                            {['Yes', 'No'].map(choice => (
                              <button
                                key={choice}
                                type="button"
                                onClick={() => setFormData({...formData, [q.key]: choice})}
                                className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-all ${formData[q.key as keyof typeof formData] === choice ? 'border-kumon-blue bg-kumon-blue text-white' : 'border-gray-100 text-gray-400'}`}
                              >
                                {choice}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button 
                      onClick={prevStep}
                      className="flex-1 border-2 border-gray-200 text-gray-500 py-4 md:py-5 rounded-full font-semibold text-sm md:text-[16px] hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleSubmit}
                      disabled={formData.subjects.length === 0 || !formData.hasTablet || !formData.hasStylus || !formData.hasInternet}
                      className="flex-[2] bg-kumon-blue text-white py-4 md:py-5 rounded-full font-bold text-sm md:text-[16px] hover:bg-kumon-blue/90 transition-all shadow-xl shadow-kumon-blue/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
                    >
                      Book Free Assessment
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Part */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/20">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg text-[#111111] font-medium italic mb-4 leading-relaxed">
              "My child’s confidence improved within months. Highly recommended!"
            </p>
            <p className="text-sm text-[#4A5568] uppercase tracking-widest font-bold">— Parent of Year 4 student</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/20 text-center md:text-left">
            <p className="text-[#4A5568] text-xl font-bold mb-2">
              Trusted by millions of students worldwide
            </p>
            <p className="text-[#4A5568] text-lg font-medium">
              Over 60 years of proven learning method.
            </p>
            <div className="mt-4 text-red-500 font-bold uppercase tracking-widest text-sm animate-pulse">
              Limited slots available this month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialDemo = () => {
  const testimonials = [
    {
      name: "Ahmad Zaki",
      role: "Parent of Year 3 Student",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=ahmad",
      testimonial: "Anak saya lebih berkeyakinan dalam matematik sekarang. Kumon benar-benar membantu membina asas yang kukuh. Sangat disyorkan!"
    },
    {
      name: "Siti Nurhaliza",
      role: "Parent of Year 5 Student",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=siti",
      testimonial: "My child improved in just 3 months — highly recommended! Disiplin belajar setiap hari yang diterapkan oleh Kumon sangat membantu."
    },
    {
      name: "Mohd Ridzuan",
      role: "Parent of Year 1 Student",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=ridzuan",
      testimonial: "Program Bahasa Inggeris Kumon sangat bagus. Anak saya kini lebih suka membaca buku cerita dalam BI secara berdikari."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-20 rounded-3xl md:rounded-[60px] shadow-2xl border border-white/20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-[#111111] mb-4">
              WHAT PARENTS <span className="text-kumon-blue">SAY</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-widest font-bold text-[10px] md:text-sm">Trusted by millions of students worldwide</p>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} className="border-gray-100 shadow-sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const whatsappLink = `https://wa.me/+60124362984?text=${encodeURIComponent("Hi! I would like to book a free assessment for my child.")}`;

  return (
    <section id="contact" className="py-12 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white/95 backdrop-blur-md text-kumon-ink rounded-3xl md:rounded-[60px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border border-white/20 relative">
          {/* Urgency Badge */}
          <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
            <div className="bg-red-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse">
              Limited slots
            </div>
          </div>

          <div className="p-6 md:p-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 leading-tight">
              Ready to Start Your Child’s <br />
              <span className="text-kumon-blue">Learning Journey?</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-md text-base md:text-lg leading-relaxed">
              Book a free assessment and discover your child’s true potential with Kumon.
            </p>

            <div className="space-y-4 md:space-y-6 mb-10">
              {[
                'Builds confidence & discipline',
                'Develops independent learning',
                'Personalized learning pace'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-4 text-gray-700 font-semibold text-sm md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-kumon-blue/10 text-kumon-blue flex items-center justify-center shrink-0">
                    <Check size={12} md:size={14} />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                  <p className="font-bold text-sm md:text-base">+60 12-436 2984</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 rounded-full bg-kumon-blue/10 flex items-center justify-center text-kumon-blue shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                  <p className="font-bold text-sm md:text-base truncate">dataranshahab@kumon.com.my</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-20 text-kumon-ink border-l border-gray-100 shadow-inner">
            <div className="mb-6 rounded-2xl overflow-hidden shadow-md border border-gray-100 h-[250px] md:h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.671342673238!2d100.364444!3d6.116667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b4362984%3A0x304b4362984!2sKumon%20Dataran%20Shahab!5e0!3m2!1sen!2smy!4v1711000000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button 
              onClick={() => document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-kumon-blue text-white py-4 md:py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-kumon-blue/90 transition-all shadow-xl shadow-kumon-blue/20"
            >
              Book Free Assessment <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-transparent py-12 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl md:rounded-[40px] shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://kumonmalaysia.com/wp-content/themes/kumon/assets/img/logo.png" 
                  alt="Kumon Logo" 
                  className="h-6 md:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display font-bold text-base md:text-lg tracking-tighter uppercase ml-2">
                  Dataran Shahab
                </span>
              </div>
              
              {/* Map Section */}
              <div className="mb-6 rounded-2xl overflow-hidden shadow-md border border-gray-100 h-[150px] md:h-[200px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.671342673238!2d100.364444!3d6.116667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b4362984%3A0x304b4362984!2sKumon%20Dataran%20Shahab!5e0!3m2!1sen!2smy!4v1711000000000!5m2!1sen!2smy" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Kumon Persiaran SSAH 1B, 127 & 128, 2nd Floor, Kompleks Perniagaan Sultan Abdul Hamid, Persiaran SSAH 1B, 05050, Alor Setar, Kedah, 05050
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase font-bold tracking-[0.2em] mb-8 text-gray-400">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Kumon', href: '#about-kumon' },
                  { name: 'Key Pillars', href: '#how-it-works' },
                  { name: 'Instructors', href: '#about' },
                  { name: 'Headmaster', href: '#benefits' }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base font-medium hover:text-kumon-blue transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase font-bold tracking-[0.2em] mb-8 text-gray-400">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base font-medium hover:text-kumon-blue transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2026 Kumon Dataran Shahab. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/people/Kumon-Dataran-Shahab/61588271020588/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kumon-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/kumondataranshahab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kumon-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-kumon-blue selection:text-white relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutKumon />
        <Stats />
        <Method />
        <section id="about" className="py-40 bg-transparent">
          <div className="w-full px-6">
            <TeamShowcase />
          </div>
        </section>
        <Benefits />
        <AssessmentSection />
        <TestimonialDemo />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 flex flex-col items-center gap-4 group">
        <div className="flex flex-col gap-4 opacity-0 translate-y-10 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
          <a 
            href="https://www.facebook.com/people/Kumon-Dataran-Shahab/61588271020588/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-12 md:h-12 bg-white text-kumon-blue rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-90"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.instagram.com/kumondataranshahab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-12 md:h-12 bg-white text-kumon-blue rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-90"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.tiktok.com/@kumon.dataran.sha?_r=1&_t=ZS-94OcCglgX92" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-12 md:h-12 bg-white text-kumon-blue rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-90"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.5.73 1.36 1.19 2.26 1.2 1.02.06 2.09-.44 2.69-1.26.54-.78.53-1.78.51-2.69-.01-3.99-.01-7.98-.01-11.97z"/>
            </svg>
          </a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('tel:+60124362984')}
          className="w-16 h-16 md:w-16 md:h-16 bg-kumon-blue text-white rounded-full shadow-2xl flex items-center justify-center active:bg-kumon-blue/90"
        >
          <Phone size={24} />
        </motion.button>
      </div>
    </div>
  );
}

