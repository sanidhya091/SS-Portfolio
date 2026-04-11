import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      
      {/* background blob */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-700 opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <p className="text-cyan-400 tracking-widest text-sm uppercase mb-4">About Me</p>
        <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Who am I?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I'm a 6th semester CS student who discovered that the most powerful thing 
          you can do with AI isn't just use it — it's <span className="text-purple-400 font-semibold">build with it</span>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          I specialize in building <span className="text-cyan-400 font-semibold">AI-powered business tools</span> — 
          full stack applications that solve real problems for real people. 
          From idea to deployed product, I handle it all.
        </p>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {["React", "TypeScript", "Python", "FastAPI", "JWT Auth", "Groq AI", "Tailwind", "Git"].map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About