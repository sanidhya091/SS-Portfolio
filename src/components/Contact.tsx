import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-700 opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl text-center"
      >
        <p className="text-cyan-400 tracking-widest text-sm uppercase mb-4">Get in touch</p>
        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Let's Build Something
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          I'm always open to new opportunities, collabs, or just a good conversation about tech. Hit me up 🚀
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open('https://github.com/sanidhya091', '_blank')}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 text-white font-semibold w-full md:w-auto justify-center"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5 invert" />
            GitHub
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open('https://www.linkedin.com/in/sanidhya-singh-2aa6b7273/', '_blank')}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white font-semibold w-full md:w-auto justify-center"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-5 h-5" />
            LinkedIn
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = 'mailto:ssanidhya75@gmail.com'}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-white font-semibold w-full md:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.button>
        </div>

        <p className="text-gray-600 text-sm mt-20">
          Built with React + Three.js + Framer Motion ⚡ by Sanidhya Singh
        </p>
      </motion.div>
    </section>
  )
}

export default Contact