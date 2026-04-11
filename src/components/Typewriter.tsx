import { useEffect, useState } from 'react'

const roles = [
  "AI Product Builder",
  "Full Stack Developer",
  "SaaS Builder",
  "CS Student",
]

const Typewriter = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1500)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, currentRole])

  return (
    <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-10">
      <span className="text-purple-400">{displayed}</span>
      <span className="animate-pulse text-pink-400">|</span>
    </div>
  )
}

export default Typewriter