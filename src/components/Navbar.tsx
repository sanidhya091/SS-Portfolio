import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { User, Briefcase, Zap, Mail } from 'lucide-react'


const navItems = [
  { label: 'About', icon: User },
  { label: 'Projects', icon: Briefcase },
  { label: 'Skills', icon: Zap },
  { label: 'Contact', icon: Mail },
]

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    if (latest > prev && latest > 80) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={hidden ? { opacity: 0, y: -80 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <button
        onClick={() => scrollTo('hero')}
        className="text-white font-black text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        SS
      </button>

      <div className="flex items-center gap-6">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => scrollTo(label.toLowerCase())}
            className="flex items-center gap-1.5 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-semibold group"
          >
            <Icon className="w-3.5 h-3.5 group-hover:text-purple-400 transition-colors duration-300" />
            {label}
          </button>
        ))}

      </div>
    </motion.nav>
  )
}

export default Navbar