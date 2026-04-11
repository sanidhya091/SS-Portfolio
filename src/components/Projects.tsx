import { motion } from 'framer-motion'

const projects = [
  {
    title: "InvoiceAI",
    description: "AI-powered invoice generator for freelancers and small businesses. Built with custom auth, JWT, Groq AI suggestions and PDF export.",
    tech: ["React", "FastAPI", "JWT", "Groq AI", "Tailwind"],
    live: "https://ai-invoice-hazel.vercel.app",
    github: "https://github.com/sanidhya091/AI-Invoice",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Lost and Found Portal",
    description: "A campus lost and found platform where students can report lost or found items, browse listings, and contact each other. Includes an admin panel with restricted access.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "shadcn-ui"],
    live: "https://found-it-finder.vercel.app",
    github: "https://github.com/sanidhya091/lost-and-found-portal-new",
    gradient: "from-cyan-500 to-blue-500"
  }
]

const Projects = () => {
  return (
    <section id = "projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-700 opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <p className="text-pink-400 tracking-widest text-sm uppercase mb-4 text-center">My Work</p>
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => window.open(project.live, '_blank')}
                  className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300"
                >
                  Live Demo
                </button>
                <button
                  onClick={() => window.open(project.github, '_blank')}
                  className="px-4 py-2 rounded-full border border-purple-500 hover:bg-purple-500/20 text-purple-300 text-sm font-semibold transition-all duration-300"
                >
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects