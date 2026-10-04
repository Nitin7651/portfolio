import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, ArrowRight, Code, Award, Briefcase, BookOpen, Quote, Download, Globe, Cpu, Database, Cloud, Layers, MessageCircle, FileText, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaJava, FaDocker, FaAws, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMongodb, SiRedis, SiApachekafka, SiHuggingface } from 'react-icons/si';
import heroImage from './assets/Thoughtful Workspace Portrait.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Navbar = () => (
  <nav className="fixed w-full bg-cream-50/90 backdrop-blur-md z-50 py-4 border-b border-cream-200">
    <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
      <span className="font-serif font-bold text-xl tracking-widest uppercase text-ink-900">Nitin.</span>
      {/* Nav links - hidden on mobile */}
      <div className="hidden md:flex gap-8 items-center">
        {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs font-bold tracking-[0.2em] uppercase text-ink-900/50 hover:text-cream-700 transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/Nitin7651" target="_blank" rel="noopener noreferrer" className="text-ink-900/60 hover:text-cream-700 transition-colors duration-200">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/nitin8467" target="_blank" rel="noopener noreferrer" className="text-ink-900/60 hover:text-cream-700 transition-colors duration-200">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:shivadwivedi7651@gmail.com" className="text-ink-900/60 hover:text-cream-700 transition-colors duration-200">
          <Mail size={20} />
        </a>
        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/file/d/1ptL8XbuFxSpyIP1pbY2-C8fbXYBJMyHu/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-cream-700 text-cream-700 hover:bg-cream-700 hover:text-white transition-all duration-300"
        >
          <Download size={12} /> Resume
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50">
    {/* Decorative background grid lines */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'linear-gradient(rgba(176,118,63,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(176,118,63,0.08) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    {/* Warm glow top-left */}
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(221,179,110,0.22) 0%, transparent 70%)' }} />

    {/* Warm glow bottom-right */}
    <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(221,179,110,0.14) 0%, transparent 70%)' }} />

    <div className="relative max-w-7xl mx-auto px-6 md:px-16 w-full pt-28 pb-16 grid md:grid-cols-2 gap-8 lg:gap-20 items-center z-10">

      {/* LEFT — Text Content */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left order-2 md:order-1">

        {/* Eyebrow badge */}
        <motion.div variants={fadeIn} className="inline-flex items-center gap-3 mb-10">
          <span className="w-8 h-[1.5px] bg-cream-600" />
          <span className="text-xs font-bold tracking-[0.35em] text-cream-700 uppercase">Software Engineer</span>
          <span className="w-8 h-[1.5px] bg-cream-600" />
        </motion.div>

        {/* Cursive subtitle */}
        <motion.p variants={fadeIn} className="font-cursive text-3xl md:text-4xl text-cream-700 mb-4 lowercase leading-tight">
          Creative &amp; Professional
        </motion.p>

        {/* Main name */}
        <motion.h1 variants={fadeIn}
          className="font-serif font-black leading-none uppercase tracking-tighter mb-10 text-ink-900"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: '0.92' }}>
          Nitin<br />
          <span style={{ WebkitTextStroke: '2px rgba(176,118,63,0.9)', color: 'transparent' }}>Dwivedi</span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={fadeIn} className="text-sm md:text-base font-light leading-relaxed text-ink-900/60 max-w-sm mb-10">
          Java Backend Developer crafting scalable microservices, resilient APIs, and AI-powered enterprise systems.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 items-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #b0763f, #d39850)', color: '#fff' }}>
            Get In Touch <ArrowRight size={14} />
          </a>
          <a href="https://drive.google.com/file/d/1ptL8XbuFxSpyIP1pbY2-C8fbXYBJMyHu/view"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold tracking-[0.2em] uppercase border border-ink-900/20 text-ink-900/70 hover:border-cream-700 hover:text-cream-700 transition-all duration-300">
            <Download size={14} /> Download CV
          </a>
        </motion.div>

        {/* Floating tech pills */}
        <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mt-12">
          {['Java', 'Spring Boot', 'Microservices', 'AWS', 'AI/LLMs'].map((tag) => (
            <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-ink-900/15 text-ink-900/40 hover:border-cream-700 hover:text-cream-700 transition-all duration-300 cursor-default">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        className="relative flex justify-center items-center order-1 md:order-2">

        {/* Decorative outer ring */}
        <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-cream-400/40 animate-spin"
          style={{ animationDuration: '20s' }} />
        <div className="absolute w-[320px] h-[320px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-cream-400/30 animate-spin"
          style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

        {/* Gold corner accents */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 border-t-2 border-r-2 border-cream-600" />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 border-b-2 border-l-2 border-cream-600" />

        {/* Image frame */}
        <div className="relative w-[260px] h-[310px] md:w-[320px] md:h-[390px] lg:w-[360px] lg:h-[430px] overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(176,118,63,0.18), 0 20px 60px rgba(26,26,26,0.18)' }}>
          {/* Gold border overlay */}
          <div className="absolute inset-0 border-2 border-cream-500/50 z-10 pointer-events-none" />
          <img
            src={heroImage}
            alt="Nitin Dwivedi"
            className="w-full h-full object-cover object-top"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
          />
          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(253,251,247,0.6), transparent)' }} />
        </div>

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-10 px-5 py-4 bg-white border border-cream-200 shadow-lg">
          <p className="text-2xl font-serif font-bold text-ink-900">2+</p>
          <p className="text-[10px] font-bold tracking-widest uppercase text-cream-700">Years Exp.</p>
        </motion.div>

        {/* Floating LLM badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute -top-4 -right-4 md:top-4 md:-right-10 px-5 py-4 bg-white border border-cream-200 shadow-lg">
          <p className="text-2xl font-serif font-bold text-ink-900">AI</p>
          <p className="text-[10px] font-bold tracking-widest uppercase text-cream-700">&amp; LLMs</p>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-900/30">Scroll</span>
      <div className="w-[1px] h-10 bg-gradient-to-b from-cream-600 to-transparent animate-pulse" />
    </motion.div>
  </section>
);

const AboutStats = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeIn}>
          <p className="font-cursive text-4xl text-cream-700 mb-2 lowercase">introducing</p>
          <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-8">About Me</h2>
          <p className="text-base leading-relaxed font-light text-ink-900/80 mb-8">
            Java Backend Developer with 2+ years of experience building Spring Boot microservices, REST APIs, and data-driven backend systems. Hands-on experience with PostgreSQL, MySQL, MongoDB, Redis, AWS, Docker, Git, CI/CD, JPA, API security, unit testing, and performance optimization.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid grid-cols-2 gap-8 bg-cream-50 p-10 border border-cream-200">
          <div>
            <h4 className="text-4xl font-serif font-bold text-ink-900">2+</h4>
            <p className="text-xs uppercase tracking-wider mt-2 text-cream-700 font-bold">Years Exp.</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-bold text-ink-900">1K+</h4>
            <p className="text-xs uppercase tracking-wider mt-2 text-cream-700 font-bold">Records APIs</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-bold text-ink-900">30%</h4>
            <p className="text-xs uppercase tracking-wider mt-2 text-cream-700 font-bold">Faster Resp.</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-bold text-ink-900">40%</h4>
            <p className="text-xs uppercase tracking-wider mt-2 text-cream-700 font-bold">Less Duplication</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const VisionSkills = () => (
  <section id="skills" className="py-24 bg-cream-100">
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-24">
        <p className="font-cursive text-4xl text-cream-700 mb-2 lowercase">personal</p>
        <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-8">Vision</h2>
        <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-ink-900">
          "To build scalable, resilient, and intelligent backend systems that drive enterprise solutions, utilizing modern architectures, cloud technologies, and the latest advancements in AI and LLMs."
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="w-12 h-[1px] bg-ink-900"></div>
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase">Technical Skills</h2>
          <div className="w-12 h-[1px] bg-ink-900"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div variants={fadeIn} className="bg-white p-8 border border-cream-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
            <Code className="mx-auto mb-6 text-cream-700" size={32} />
            <h3 className="font-bold uppercase tracking-wider mb-4">Programming</h3>
            <p className="text-sm font-light leading-relaxed text-ink-900/70">Java, JavaScript, Python, SQL</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 border border-cream-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
            <Briefcase className="mx-auto mb-6 text-cream-700" size={32} />
            <h3 className="font-bold uppercase tracking-wider mb-4">Backend</h3>
            <p className="text-sm font-light leading-relaxed text-ink-900/70">Spring Boot, Microservices, REST APIs, JPA, Node.js, Express.js</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 border border-cream-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
            <Award className="mx-auto mb-6 text-cream-700" size={32} />
            <h3 className="font-bold uppercase tracking-wider mb-4">AI & LLMs</h3>
            <p className="text-sm font-light leading-relaxed text-ink-900/70">LangChain, LangGraph, CrewAI, AutoGen, Spring AI, OpenAI</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 border border-cream-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
            <MapPin className="mx-auto mb-6 text-cream-700" size={32} />
            <h3 className="font-bold uppercase tracking-wider mb-4">Cloud & Data</h3>
            <p className="text-sm font-light leading-relaxed text-ink-900/70">AWS, Docker, CI/CD, PostgreSQL, MongoDB, Redis, RAG</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">work</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-20 text-center">Experience</motion.h2>

        <div className="space-y-16">
          <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute w-[1px] h-full bg-cream-200 left-[-30px] top-0"></div>
            <div className="hidden md:block absolute w-3 h-3 bg-cream-700 rounded-full left-[-35.5px] top-3"></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
              <h3 className="text-2xl font-serif font-bold">Software Engineer</h3>
              <span className="text-sm font-bold tracking-widest text-cream-700 uppercase">Jul 2025 - Present</span>
            </div>
            <p className="text-base font-bold uppercase tracking-wider mb-6">PSNOVA SOLUTIONS PRIVATE LIMITED</p>
            <ul className="list-disc list-outside ml-4 space-y-3 text-base font-light leading-relaxed text-ink-900/80 marker:text-cream-500">
              <li>Built an enterprise subscription platform covering lifecycle management, entitlements, licensing, trials, authorization, billing sync, and audit compliance for SaaS products.</li>
              <li>Designed DDD-based microservices and SDD-driven domain rules.</li>
              <li>Implemented resilient async workflows, event-driven processing, and REST APIs.</li>
              <li>Applied Spring AI, LLMs, RAG, vector search, structured prompts, and guardrails for enterprise assistants.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute w-3 h-3 bg-cream-300 rounded-full left-[-35.5px] top-3"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
              <h3 className="text-2xl font-serif font-bold">Java Software Developer</h3>
              <span className="text-sm font-bold tracking-widest text-cream-700 uppercase">Jan 2025 - Jul 2025</span>
            </div>
            <p className="text-base font-bold uppercase tracking-wider mb-6">Kodnest</p>
            <ul className="list-disc list-outside ml-4 space-y-3 text-base font-light leading-relaxed text-ink-900/80 marker:text-cream-500">
              <li>Improved a diagnostic assessment system in Java, Spring Boot, and microservices that classified learners into 3 proficiency levels.</li>
              <li>Built REST APIs for 6 test lifecycle stages: bootstrap, attempt generation, submission, status tracking, validation, and scoring.</li>
              <li>Designed randomized question selection and difficulty-based evaluation logic.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute w-3 h-3 bg-cream-300 rounded-full left-[-35.5px] top-3"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
              <h3 className="text-2xl font-serif font-bold">Freelance Software Developer</h3>
              <span className="text-sm font-bold tracking-widest text-cream-700 uppercase">Jul 2022 - Apr 2025</span>
            </div>
            <p className="text-base font-bold uppercase tracking-wider mb-6">Eyeonix Boparai's Martial Security Pvt Ltd</p>
            <ul className="list-disc list-outside ml-4 space-y-3 text-base font-light leading-relaxed text-ink-900/80 marker:text-cream-500">
              <li>Enhanced and maintained Java, Spring Boot, and REST APIs plus admin modules for system integration, user management, and configuration handling.</li>
              <li>Increased system reliability through API testing, debugging, log analysis, and performance optimization.</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-cream-50">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">project</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-20 text-center">Portfolio</motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div variants={fadeIn} className="group cursor-pointer">
            <div className="aspect-video bg-cream-200 mb-8 overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-ink-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-cream-700 transition-colors">Feedback Analytics Platform</h3>
            <p className="text-xs uppercase tracking-widest text-cream-700 font-bold mb-4">Java, Spring Boot, PostgreSQL</p>
            <p className="text-base font-light leading-relaxed text-ink-900/80">
              Built analytics and reporting APIs for average rating, rating distribution, and trend analysis while reducing code duplication by 40%.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="group cursor-pointer">
            <div className="aspect-video bg-cream-200 mb-8 overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-ink-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Assessment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-cream-700 transition-colors">Diagnostic Assessment System</h3>
            <p className="text-xs uppercase tracking-widest text-cream-700 font-bold mb-4">Java, Spring Boot, REST APIs</p>
            <p className="text-base font-light leading-relaxed text-ink-900/80">
              Expanded course recommendation workflows backed by 6-stage test lifecycle APIs and 3-level skill evaluation.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-24 bg-white border-t border-cream-200">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-16">

        <motion.div variants={fadeIn}>
          <BookOpen className="mx-auto mb-6 text-cream-700" size={32} />
          <h2 className="text-3xl font-serif font-black uppercase tracking-widest mb-6">Education</h2>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-base font-light mb-2 text-ink-900/80">C.S.J.M. University, Kanpur</p>
          <p className="text-sm font-bold tracking-widest text-cream-700 uppercase">2022 - 2025</p>
        </motion.div>

        <motion.div variants={fadeIn} className="pt-16 border-t border-cream-200">
          <Award className="mx-auto mb-6 text-cream-700" size={32} />
          <h2 className="text-3xl font-serif font-black uppercase tracking-widest mb-6">Certifications & Achievements</h2>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Startup School Prompt to Prototype</h3>
          <p className="text-base font-light mb-8 text-ink-900/80">Google for Startups x Scaler</p>

          <div className="bg-cream-50 p-8 border border-cream-200 rounded-sm">
            <p className="text-lg md:text-xl font-serif italic leading-relaxed text-ink-900">
              "Recognized for outstanding problem-solving and software development skills through successful delivery of automation and backend engineering projects."
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   TECH STACK VISUAL GRID
───────────────────────────────────────── */
const techStack = [
  { icon: FaJava, label: 'Java', color: '#E76F00' },
  { icon: SiSpringboot, label: 'Spring Boot', color: '#6DB33F' },
  { icon: FaDocker, label: 'Docker', color: '#2496ED' },
  { icon: FaAws, label: 'AWS', color: '#FF9900' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiRedis, label: 'Redis', color: '#DC382D' },
  { icon: FaPython, label: 'Python', color: '#3776AB' },
  { icon: FaNodeJs, label: 'Node.js', color: '#339933' },
  { icon: SiApachekafka, label: 'Kafka', color: '#231F20' },
  { icon: SiHuggingface, label: 'HuggingFace', color: '#FF9D00' },
  { icon: FaGit, label: 'Git', color: '#F05032' },
];

const TechStack = () => (
  <section className="py-20 bg-cream-50 border-t border-cream-200">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">tools &amp;</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-16 text-center">Tech Stack</motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {techStack.map(({ icon: Icon, label, color }) => (
            <motion.div
              key={label}
              variants={fadeIn}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-5 bg-white border border-cream-200 shadow-sm hover:shadow-md hover:border-cream-400 transition-all duration-300 cursor-default"
            >
              <Icon size={36} style={{ color }} />
              <span className="text-[10px] font-bold tracking-widest uppercase text-ink-900/60">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   SERVICES / WHAT I OFFER
───────────────────────────────────────── */
const services = [
  {
    icon: Layers,
    title: 'Microservices Architecture',
    description: 'Design and build scalable, domain-driven microservices with Spring Boot, event-driven patterns, and resilient async workflows.',
  },
  {
    icon: Cpu,
    title: 'AI & LLM Integration',
    description: 'Integrate LLMs, RAG pipelines, vector search, and multi-agent systems using LangChain, LangGraph, Spring AI, and OpenAI.',
  },
  {
    icon: Database,
    title: 'API Design & Backend',
    description: 'Build production-grade REST APIs with security, validation, testing, caching, and full lifecycle management.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deploy and manage cloud infrastructure on AWS with Docker, CI/CD pipelines, and observability tooling.',
  },
  {
    icon: Globe,
    title: 'Enterprise Platform Dev',
    description: 'Build SaaS subscription platforms covering licensing, billing sync, entitlements, and audit compliance.',
  },
  {
    icon: Code,
    title: 'Performance Optimization',
    description: 'Identify bottlenecks and optimize API response times, database queries, and system throughput.',
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">what i</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-16 text-center">Offer</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeIn}
              custom={i}
              whileHover={{ y: -6 }}
              className="group p-8 border border-cream-200 bg-cream-50 hover:bg-white hover:border-cream-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 border border-cream-300 bg-white group-hover:bg-cream-700 group-hover:border-cream-700 transition-all duration-300">
                <Icon size={22} className="text-cream-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-3 text-ink-900">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-ink-900/70">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────── */
const testimonials = [
  {
    quote: "Nitin consistently delivered robust backend solutions under tight deadlines. His Spring Boot expertise and ability to architect scalable microservices made him invaluable to our engineering team.",
    name: 'Senior Engineer',
    role: 'PSNOVA Solutions Pvt. Ltd.',
  },
  {
    quote: "His understanding of AI integration and LLM-powered workflows is exceptional. Nitin brought fresh thinking to our enterprise assistant project and executed flawlessly.",
    name: 'Tech Lead',
    role: 'PSNOVA Solutions Pvt. Ltd.',
  },
  {
    quote: "Reliable, sharp, and detail-oriented. Nitin's diagnostic assessment system was one of the cleanest implementations we've reviewed — well-structured APIs and excellent testing discipline.",
    name: 'Engineering Manager',
    role: 'Kodnest',
  },
];

const Testimonials = () => (
  <section className="py-24 bg-cream-100">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">what they</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-16 text-center">Say</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role }, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -4 }}
              className="bg-white p-8 border border-cream-200 shadow-sm hover:shadow-md hover:border-cream-400 transition-all duration-300 relative"
            >
              {/* Large quote mark */}
              <Quote size={40} className="text-cream-200 mb-4" />
              <p className="text-base font-light leading-relaxed text-ink-900/80 mb-8 italic">"{quote}"</p>
              <div className="border-t border-cream-200 pt-6">
                <p className="font-bold uppercase tracking-wider text-sm text-ink-900">{name}</p>
                <p className="text-xs text-cream-700 font-bold tracking-widest uppercase mt-1">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   BLOG / ARTICLES
───────────────────────────────────────── */
const articles = [
  {
    title: 'Building Scalable Microservices with Spring Boot & DDD',
    summary: 'A deep dive into Domain-Driven Design principles applied to Spring Boot microservices — event sourcing, bounded contexts, and resilient async workflows.',
    tag: 'Microservices',
    date: 'Sep 2025',
    href: 'https://medium.com',
  },
  {
    title: 'RAG Pipelines with LangChain & Spring AI',
    summary: 'How to build enterprise-grade Retrieval-Augmented Generation systems using vector databases, structured prompts, and guardrails for LLM safety.',
    tag: 'AI / LLMs',
    date: 'Aug 2025',
    href: 'https://medium.com',
  },
  {
    title: 'Optimizing REST APIs: From Milliseconds to Sub-100ms',
    summary: 'Practical techniques I used to achieve 30% faster API responses — Redis caching, query optimization, connection pooling, and profiling strategies.',
    tag: 'Performance',
    date: 'Jul 2025',
    href: 'https://medium.com',
  },
];

const Blog = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">thoughts &amp;</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-16 text-center">Articles</motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map(({ title, summary, tag, date, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              whileHover={{ y: -6 }}
              className="group block border border-cream-200 bg-cream-50 hover:bg-white hover:border-cream-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Color bar */}
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #b0763f, #d39850)' }} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-black tracking-[0.3em] uppercase px-3 py-1 bg-cream-100 border border-cream-300 text-cream-700">{tag}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-ink-900/40">{date}</span>
                </div>
                <h3 className="text-lg font-serif font-bold mb-4 text-ink-900 group-hover:text-cream-700 transition-colors leading-snug">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-ink-900/70 mb-6">{summary}</p>
                <div className="flex items-center gap-2 text-cream-700 font-bold text-xs tracking-widest uppercase">
                  <FileText size={12} /> Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   CONTACT / HIRE ME
───────────────────────────────────────── */
const Contact = () => (
  <section id="contact" className="py-28 bg-cream-50 border-t border-cream-200">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <motion.p variants={fadeIn} className="font-cursive text-4xl text-cream-700 mb-2 text-center lowercase">let's</motion.p>
        <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-black uppercase tracking-widest mb-6 text-center">Work Together</motion.h2>
        <motion.p variants={fadeIn} className="text-center text-base font-light text-ink-900/60 max-w-xl mx-auto mb-16">
          I'm open to backend engineering roles, freelance projects, and AI/LLM integration opportunities. Let's build something great.
        </motion.p>

        {/* Contact cards */}
        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, label: 'Email Me', value: 'shivadwivedi7651@gmail.com', href: 'mailto:shivadwivedi7651@gmail.com' },
            { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/nitin8467', href: 'https://linkedin.com/in/nitin8467' },
            { icon: FaGithub, label: 'GitHub', value: 'github.com/Nitin7651', href: 'https://github.com/Nitin7651' },
          ].map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-4 p-8 bg-white border border-cream-200 hover:border-cream-500 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-cream-300 bg-cream-50 group-hover:bg-cream-700 group-hover:border-cream-700 transition-all duration-300">
                <Icon size={24} className="text-cream-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-sm text-ink-900 mb-1">{label}</p>
                <p className="text-xs font-light text-ink-900/50 break-all">{value}</p>
              </div>
              <ExternalLink size={14} className="text-cream-400 group-hover:text-cream-700 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Big CTA */}
        <motion.div variants={fadeIn} className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-ink-900/40 mb-6">or drop me a direct message</p>
          <a
            href="mailto:shivadwivedi7651@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-white hover:opacity-90 transition-opacity duration-300 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #b0763f, #d39850)' }}
          >
            <Send size={16} /> Send Me an Email
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-ink-900 text-cream-50 py-12 text-center">
    <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
      <h2 className="text-2xl font-serif font-bold uppercase tracking-widest mb-8">Nitin Dwivedi</h2>
      <div className="flex gap-6 mb-8">
        <a href="https://github.com/Nitin7651" target="_blank" rel="noopener noreferrer" className="hover:text-cream-700 transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/nitin8467" target="_blank" rel="noopener noreferrer" className="hover:text-cream-700 transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:shivadwivedi7651@gmail.com" className="hover:text-cream-700 transition-colors">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-sm font-light text-cream-100/60 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Nitin Dwivedi. All Rights Reserved.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-white text-ink-900 selection:bg-cream-300 selection:text-ink-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutStats />
        <VisionSkills />
        <TechStack />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Blog />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
