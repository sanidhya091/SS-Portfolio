import './index.css'
import Background3D from './components/Background3d'
import About from './components/About'
import Typewriter from './components/Typewriter'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="bg-transparent min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <Background3D />
      <motion.section
  id="hero"
  ref={heroRef}
  style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
  className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
>
  <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-700 opacity-10 blur-[120px] pointer-events-none" />
  
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-purple-400 tracking-widest text-sm uppercase mb-4"
  >
    Hey there, I'm
  </motion.p>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
  >
    Sanidhya Singh
  </motion.h1>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <Typewriter />
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="text-gray-400 max-w-xl text-lg mb-10"
  >
    I build applications and websites using the potential of AI 🚀
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.0 }}
    className="flex gap-4"
  >
    <button
      onClick={() => window.open('https://github.com/sanidhya091', '_blank')}
      className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 font-semibold text-white cursor-pointer"
    >
      GitHub
    </button>
    <button
      onClick={() => window.open('https://www.linkedin.com/in/sanidhya-singh', '_blank')}
      className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-500/20 transition-all duration-300 font-semibold text-purple-300 cursor-pointer"
    >
      LinkedIn
    </button>
  </motion.div>
</motion.section>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App