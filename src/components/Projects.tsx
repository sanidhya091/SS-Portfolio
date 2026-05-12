import { motion } from 'framer-motion'

const projects = [
  {
    title: "Anveshak",
    description: "Planetary data visualization platform built for NASA Space Apps Challenge 2025. Interactive map-based interface for exploring NASA imagery across 3+ datasets, with AI-powered similarity search using FAISS and feature extraction.",
    tech: ["FastAPI", "Python", "FAISS", "Svelte", "Leaflet.js", "NASA APIs"],
    live: null,
    github: "https://github.com/sanidhya091/nasa-space-apps-anveshak",
    gradient: "from-orange-500 to-yellow-500",
    badge: "🚀 NASA Space Apps 2025",
  },
  {
    title: "CodeSense",
    description: "AI code review platform with color-coded feedback by severity — critical, warning, suggestion. Auto language-detecting editor, full auth via Clerk v7, and review history stored in Supabase with Row Level Security.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Clerk v7", "Groq API", "LLaMA 3.3 70B"],
    live: "https://code-sense-rho.vercel.app/",
    github: "https://github.com/sanidhya091/CodeSense",
    gradient: "from-purple-500 to-pink-500",
    badge: null,
  },
  {
    title: "InvoiceAI",
    description: "Full-stack invoice management app with CRUD support, AI-powered item description generation via Groq API, one-click PDF export, and Clerk authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Clerk v7", "Groq API", "Tailwind"],
    live: "https://ai-invoice-hazel.vercel.app",
    github: "https://github.com/sanidhya091/AI-Invoice",
    gradient: "from-cyan-500 to-blue-500",
    badge: null,
  },
  {
    title: "Lost & Found Portal",
    description: "Campus web portal for reporting and searching lost items, reducing recovery time by 50%. Built with Java Servlets, JDBC, and MySQL — full auth and item management supporting 100+ concurrent users.",
    tech: ["Java", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3"],
    live: "https://found-it-finder.vercel.app",
    github: "https://github.com/sanidhya091/lost-and-found-portal-new",
    gradient: "from-green-500 to-teal-500",
    badge: null,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-700 opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-5xl"
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
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 flex flex-col"
            >
              {project.badge && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 font-semibold">
                  {project.badge}
                </span>
              )}

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex-shrink-0`} />

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.live && (
                  <button
                    onClick={() => window.open(project.live!, '_blank')}
                    className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300"
                  >
                    Live Demo
                  </button>
                )}
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