import { motion } from 'framer-motion'

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <button
        onClick={() => scrollTo('hero')}
        className="text-white font-black text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        SS
      </button>

      <div className="flex gap-8">
        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-semibold"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar