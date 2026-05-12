import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // dot follows instantly
  const dotX = useSpring(cursorX, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(cursorY, { stiffness: 1000, damping: 50 })

  // glow ring follows with lag
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20 })

  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onEnter = () => { isHovering.current = true }
    const onLeave = () => { isHovering.current = false }

    window.addEventListener('mousemove', move)

    // hide native cursor site-wide
    document.documentElement.style.cursor = 'none'

    // track hover on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.style.cursor = ''
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* glowing ring — lags behind */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
          x: '-50%',
          y: '-50%',
        }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-purple-500/60 pointer-events-none z-[9999] mix-blend-screen"
      >
        {/* inner glow */}
        <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-sm" />
      </motion.div>

      {/* sharp dot — instant */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
          x: '-50%',
          y: '-50%',
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-pink-400 pointer-events-none z-[9999] mix-blend-screen"
      />
    </>
  )
}

export default CustomCursor