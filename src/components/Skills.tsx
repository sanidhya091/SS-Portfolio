import { motion } from 'framer-motion'

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
]

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-700 opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-4xl text-center"
      >
        <p className="text-purple-400 tracking-widest text-sm uppercase mb-4">What I work with</p>
        <h2 className="text-4xl md:text-6xl font-black mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, y: -5 }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer group"
            >
              <img 
  src={skill.icon} 
  alt={skill.name} 
  className={`w-10 h-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${(skill as any).invert ? 'invert' : ''}`} 
/>
              <span className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300 font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills