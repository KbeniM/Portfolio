'use client';

import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiPhp, 
  SiMysql, 
  SiDocker, 
  SiUnity, 
  SiNextdotjs, 
  SiLaravel,
  SiPrisma,
  SiDrizzle,
  SiReact,
  SiGithub,
  SiCplusplus,
  SiPython,
  SiSharp,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CgFigma } from 'react-icons/cg';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const TypewriterText = ({ texts, speed = 100 }: { texts: string[], speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [charIndex, currentIndex, isDeleting, texts, speed]);

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-8 bg-blue-400 ml-1"
      />
    </span>
  );
};

const Header = () => {
  const roles = [
    "Full-Stack Developer",
    "Game Developer"
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            👋 Hi, I&apos;m Benjamin Kun
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-blue-400 mb-8 h-12">
            <TypewriterText texts={roles} speed={120} />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m passionate about crafting innovative solutions with cutting-edge technologies. 
            Specialized in full-stack development, game development, and creating exceptional user experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.a 
            href="https://www.linkedin.com/in/benjamin-kun-57778136b/"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0, duration: 0.2 }}
            className="text-slate-300 hover:text-blue-400 transition-colors p-3 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
          >
            <Linkedin size={32} />
          </motion.a>
          <motion.a 
            href="https://github.com/KbeniM" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0, duration: 0.2 }}
            className="text-slate-300 hover:text-white transition-colors p-3 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
          >
            <Github size={32} />
          </motion.a>
          <motion.a 
            href="mailto:kunbenjamin23@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0, duration: 0.2 }}
            className="text-slate-300 hover:text-green-400 transition-colors p-3 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
          >
            <Mail size={32} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-slate-400 mb-4">Explore my work</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-slate-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

const TechnologiesSection = () => {
  const languages: TechItem[] = [
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-500' },
    { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-500' },
    { name: 'C#', icon: <SiSharp />, color: 'text-purple-700' },
    { name: 'PHP', icon: <SiPhp />, color: 'text-purple-600' },
  ];

  const frameworks: TechItem[] = [
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  ];

  const databases: TechItem[] = [
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
    { name: 'Drizzle ORM', icon: <SiDrizzle />, color: 'text-green-400' },
    { name: 'Prisma ORM', icon: <SiPrisma />, color: 'text-slate-200' },
  ];

  const tools: TechItem[] = [
    { name: 'Docker', icon: <SiDocker />, color: 'text-blue-400' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-white' },
    { name: 'Figma', icon: <CgFigma />, color: 'text-purple-500' },
    { name: 'Unity Engine', icon: <SiUnity />, color: 'text-slate-200' },
  ];

  const TechGrid = ({ title, items }: { title: string; items: TechItem[] }) => (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="text-2xl font-semibold text-white mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((tech, index) => (
          <motion.div 
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transition: { delay: 0, duration: 0.3 }
            }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-center border border-slate-700/50 backdrop-blur-sm hover:border-slate-600/50 transition-all cursor-pointer group"
          >
            <div className={`text-4xl mb-4 ${tech.color} flex justify-center group-hover:scale-110 transition-transform`}>
              {tech.icon}
            </div>
            <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Technologies & Tools
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proficient in modern technologies for both front-end and back-end development, 
            ensuring robust application performance.
          </p>
        </motion.div>
        
        <TechGrid title="Programming Languages" items={languages} />
        <TechGrid title="Frameworks & Libraries" items={frameworks} />
        <TechGrid title="Databases & ORMs" items={databases} />
        <TechGrid title="Tools & Platforms" items={tools} />
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Soon...",
      description: "",
      technologies: [],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications, 
            innovative solutions, and cutting-edge technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ delay: 0, duration: 0.2 }}
                >
                  <ExternalLink className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300" size={20} />
                </motion.div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed text-sm line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <motion.span 
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0, duration: 0.2 }}
                    className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full text-xs border border-slate-600/50 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
              
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <motion.a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0, duration: 0.2 }}
                    className="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0, duration: 0.2 }}
                    className="flex items-center text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities, exciting projects, and meaningful collaborations. 
            Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.a 
            href="https://www.linkedin.com/in/benjamin-kun-57778136b/"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0, duration: 0.2 }}
            className="text-slate-300 hover:text-blue-400 transition-colors p-4 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-blue-500/20 border border-slate-700/50 hover:border-blue-500/50"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a 
            href="https://github.com/KbeniM" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0, duration: 0.2 }}
            className="text-slate-300 hover:text-white transition-colors p-4 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50"
          >
            <Github size={28} />
          </motion.a>
          <motion.a 
            href="mailto:kunbenjamin23@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0, duration: 0.2 }}
            className="text-slate-300 hover:text-green-400 transition-colors p-4 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-green-500/20 border border-slate-700/50 hover:border-green-500/50"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700/50 pt-8"
        >
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Benjamin Kun. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <TechnologiesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
