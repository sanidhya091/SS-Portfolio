import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import codesense from '../assets/codesense.png'
import invoiceai from '../assets/invoiceai.png'
import lostandfound from '../assets/lostandfound.png'

const projects = [
  {
    title: "Anveshak",
    description: "Planetary data visualization platform built for NASA Space Apps Challenge 2025. Interactive map-based interface for exploring NASA imagery across 3+ datasets, with AI-powered similarity search using FAISS and feature extraction.",
    tech: ["FastAPI", "Python", "FAISS", "Svelte", "Leaflet.js", "NASA APIs"],
    live: null,
    github: "https://github.com/sanidhya091/nasa-space-apps-anveshak",
    gradient: "from-orange-500 to-yellow-500",
    badge: "🚀 NASA Space Apps 2025",
    screenshot: null,
  },
  {
    title: "CodeSense",
    description: "AI code review platform with color-coded feedback by severity — critical, warning, suggestion. Auto language-detecting editor, full auth via Clerk v7, and review history stored in Supabase with Row Level Security.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Clerk v7", "Groq API", "LLaMA 3.3 70B"],
    live: "https://code-sense-rho.vercel.app/",
    github: "https://github.com/sanidhya091/CodeSense",
    gradient: "from-purple-500 to-pink-500",
    badge: null,
    screenshot: codesense,
  },
  {
    title: "InvoiceAI",
    description: "Full-stack invoice management app with CRUD support, AI-powered item description generation via Groq API, one-click PDF export, and Clerk authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "Clerk v7", "Groq API", "Tailwind"],
    live: "https://ai-invoice-hazel.vercel.app",
    github: "https://github.com/sanidhya091/AI-Invoice",
    gradient: "from-cyan-500 to-blue-500",
    badge: null,
    screenshot: invoiceai,
  },
  {
    title: "Lost & Found Portal",
    description: "Campus web portal for reporting and searching lost items, reducing recovery time by 50%. Built with Java Servlets, JDBC, and MySQL — full auth and item management supporting 100+ concurrent users.",
    tech: ["Java", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3"],
    live: "https://found-it-finder.vercel.app",
    github: "https://github.com/sanidhya091/lost-and-found-portal-new",
    gradient: "from-green-500 to-teal-500",
    badge: null,
    screenshot: lostandfound,
  },
]

type Project = typeof projects[0]

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCardEnter = (project: Project) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveProject(project)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveProject(null)
    }, 120) // small delay — enough to move mouse into popup without it closing
  }

  const handlePopupEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

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

        <div className="relative">
          {/* cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleCardEnter(project)}
                onMouseLeave={handleLeave}
                className={`relative bg-white/5 border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 flex flex-col cursor-pointer min-h-[180px]
                  ${activeProject?.title === project.title
                    ? 'border-purple-500/60 bg-white/10'
                    : 'border-white/10 hover:border-purple-500/30'
                  }`}
              >
                {project.badge && (
                  <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 font-semibold">
                    {project.badge}
                  </span>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4`} />
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>

                {/* show first 2 tech tags on card as hint */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.tech.slice(0, 2).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-600 text-xs">
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-xs mt-auto pt-4">Hover to preview →</p>
              </motion.div>
            ))}
          </div>

          {/* popup — absolutely centered over the grid */}
          <AnimatePresence>
            {activeProject && (
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, scale: 0.93, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onMouseEnter={handlePopupEnter}
                onMouseLeave={handleLeave}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto"
              >
                {/* backdrop blur over cards */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl" />

                {/* the actual popup box */}
                <div className="relative z-10 w-[700px] max-w-[90%] h-[340px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 flex"
                  style={{ background: '#0f0f0f' }}
                >
                  {/* LEFT — screenshot */}
                  <div className="w-[45%] flex-shrink-0 overflow-hidden bg-black">
                    {activeProject.screenshot ? (
                      <img
                        src={activeProject.screenshot}
                        alt={activeProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-950/60 to-black flex flex-col items-center justify-center gap-3 p-6">
                        <span className="text-6xl">🚀</span>
                        <span className="text-orange-400 font-bold text-xs tracking-widest uppercase text-center">
                          NASA Space Apps 2025
                        </span>
                        <span className="text-gray-600 text-xs text-center">
                          Planetary Analysis · FAISS · Svelte · FastAPI
                        </span>
                      </div>
                    )}
                  </div>

                  {/* divider */}
                  <div className="w-px bg-white/10 flex-shrink-0" />

                  {/* RIGHT — details */}
                  <div className="flex-1 p-6 flex flex-col overflow-hidden">
                    {activeProject.badge && (
                      <span className="self-start text-xs px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 font-semibold mb-3">
                        {activeProject.badge}
                      </span>
                    )}

                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeProject.gradient} mb-3 flex-shrink-0`} />
                    <h3 className="text-lg font-black text-white mb-2">{activeProject.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 overflow-hidden">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-semibold border border-purple-500/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto flex-shrink-0">
                      {activeProject.live && (
                        <button
                          onClick={() => window.open(activeProject.live!, '_blank')}
                          className="px-3 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all duration-300"
                        >
                          Live Demo
                        </button>
                      )}
                      <button
                        onClick={() => window.open(activeProject.github, '_blank')}
                        className="px-3 py-1.5 rounded-full border border-purple-500 hover:bg-purple-500/20 text-purple-300 text-xs font-semibold transition-all duration-300"
                      >
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects