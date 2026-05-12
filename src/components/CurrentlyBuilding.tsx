import { motion } from 'framer-motion'

const building = [
  {
    name: 'Oddly',
    tagline: 'A discovery engine for the uniquely curious.',
    description: "Mood-based recommendation engine for books, music, films, and experiences. Take a vibe quiz, chat with AI, or describe how you feel — Oddly finds things you didn't know you needed.",
    stack: ['React', 'Spring Boot', 'MongoDB Atlas', 'Claude API', 'Last.fm', 'TMDB'],
    status: 'Frontend done · Backend in progress',
    color: 'from-purple-500 to-pink-500',
    dot: 'bg-purple-400',
  },
  {
    name: 'Ranbhumi',
    tagline: 'A digital democratic battlefield.',
    description: 'Live debate and discussion platform inspired by TV debate panels — structured, moderated, multilingual. Users create or join debate rooms, vote, react, and support speakers in real time.',
    stack: ['Flutter', 'Firebase', 'Firestore', 'WebRTC', 'Push Notifications'],
    status: 'Concept & design phase',
    color: 'from-red-500 to-orange-500',
    dot: 'bg-red-400',
  },
]

const CurrentlyBuilding = () => {
  return (
    <section className="flex flex-col items-center px-6 py-20 relative">
      <div className="absolute w-[400px] h-[300px] rounded-full bg-pink-700 opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <p className="text-pink-400 tracking-widest text-sm uppercase mb-4 text-center">What's cooking</p>
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Currently Building
        </h2>

        <div className="flex flex-col gap-5">
          {building.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* pulsing dot */}
              <div className="mt-1.5 flex-shrink-0 relative">
                <div className={`w-3 h-3 rounded-full ${item.dot}`} />
                <div className={`absolute inset-0 w-3 h-3 rounded-full ${item.dot} opacity-40 animate-ping`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                  <div>
                    <span className={`text-xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.name}
                    </span>
                    <p className="text-gray-500 text-xs mt-0.5 italic">{item.tagline}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-400 font-semibold whitespace-nowrap">
                    {item.status}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mt-2 mb-3">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CurrentlyBuilding