import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Download, ChevronRight, Shield, Terminal } from 'lucide-react'

/* ─────────────────────────────────────────
   TYPING ANIMATION
───────────────────────────────────────── */
const ROLES = ['Cyber Security Student', 'SOC Analyst', 'Penetration Tester', 'Threat Hunter', 'Blue Teamer']

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false) }, 1600)
      return () => clearTimeout(t)
    }
    const current = ROLES[roleIdx]
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setRoleIdx(i => (i + 1) % ROLES.length)
      }
    }
  }, [displayed, deleting, paused, roleIdx])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  )
}

/* ─────────────────────────────────────────
   TERMINAL WINDOW
───────────────────────────────────────── */
const TERMINAL_LINES = [
  { delay: 0,    text: '$ nmap -sV --open uttam-yadav.dev',  color: 'text-blue-400' },
  { delay: 800,  text: 'Starting Nmap 7.94 ...',             color: 'text-[#8b949e]' },
  { delay: 1400, text: 'PORT     STATE  SERVICE    VERSION',  color: 'text-[#8b949e]' },
  { delay: 1800, text: '22/tcp   open   ssh        OpenSSH',  color: 'text-cyan-400' },
  { delay: 2200, text: '80/tcp   open   http       nginx',    color: 'text-cyan-400' },
  { delay: 2600, text: '443/tcp  open   ssl/https  nginx',    color: 'text-cyan-400' },
  { delay: 3200, text: '$ burpsuite --target /images?file=', color: 'text-blue-400' },
  { delay: 4000, text: 'Payload: ../../../../etc/passwd',     color: 'text-yellow-400' },
  { delay: 4600, text: '[!] Path traversal — VULNERABLE',     color: 'text-red-400' },
  { delay: 5200, text: '[✓] Lab solved — PWNED',              color: 'text-green-400' },
  { delay: 5800, text: '$ _',                                 color: 'text-blue-400' },
]

function TerminalWindow() {
  const [visible, setVisible] = useState([])
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  // Start when scrolled into view
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    TERMINAL_LINES.forEach(line => {
      const t = setTimeout(() => setVisible(v => [...v, line.text + '||' + line.color]), line.delay)
      return () => clearTimeout(t)
    })
  }, [started])

  const restart = () => { setVisible([]); setTimeout(() => setStarted(false), 50); setTimeout(() => setStarted(true), 100) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full rounded-xl border border-[#0e1f35] bg-[#0d1423] overflow-hidden shadow-2xl shadow-blue-900/20"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#0e1f35] bg-[#07111e]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="font-mono text-xs text-[#4b5563]">uttam@kali:~</span>
        <button onClick={restart} className="font-mono text-xs text-[#4b5563] hover:text-blue-400 transition-colors">
          ↺ replay
        </button>
      </div>

      {/* Terminal body */}
      <div className="px-4 py-3 font-mono text-xs space-y-1 min-h-[160px]">
        {visible.map((raw, i) => {
          const [text, color] = raw.split('||')
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={color}
            >
              {text}
            </motion.p>
          )
        })}
        {visible.length === 0 && (
          <p className="text-[#4b5563]">$ waiting for connection...</p>
        )}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   TRYHACKME BADGE
───────────────────────────────────────── */
function THMBadge() {
  return (
    <motion.a
      href="https://tryhackme.com/certificate/THM-SBWU2IRKK5"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      whileHover={{ scale: 1.03, borderColor: 'rgba(59,130,246,0.6)' }}
      className="flex items-center gap-3 p-4 rounded-xl border border-[#0e1f35] bg-[#0d1423] hover:bg-[#0e1a2e] transition-all duration-200 group cursor-pointer"
    >
      {/* THM icon */}
      <div className="w-10 h-10 rounded-lg bg-[#1c2333] border border-[#0e1f35] flex items-center justify-center shrink-0">
        <svg viewBox="0 0 40 40" width="26" height="26" fill="none">
          <circle cx="20" cy="20" r="18" fill="#212c3b" />
          <path d="M13 20 Q20 10 27 20 Q20 30 13 20Z" fill="#2d9bf0" opacity="0.9"/>
          <circle cx="20" cy="20" r="3.5" fill="#fff" opacity="0.9"/>
        </svg>
      </div>
      <div className="min-w-0">
        <p className="font-mono text-xs text-blue-400 tracking-wider">TRYHACKME</p>
        <p className="text-sm text-[#e6edf3] font-semibold">Pre Security Certificate</p>
        <p className="font-mono text-xs text-[#4b5563]">THM-SBWU2IRKK5 · Click to verify ↗</p>
      </div>
      <div className="ml-auto shrink-0">
        <span className="font-mono text-xs text-green-400 border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">
          ✓ VERIFIED
        </span>
      </div>
    </motion.a>
  )
}

/* ─────────────────────────────────────────
   RIPPLE
───────────────────────────────────────── */
function Ripple({ x, y, onDone }) {
  return (
    <motion.span
      className="absolute rounded-full bg-blue-400/30 pointer-events-none"
      style={{ left: x - 40, top: y - 40, width: 80, height: 80 }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 6, opacity: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={onDone}
    />
  )
}

/* ─────────────────────────────────────────
   INTERACTIVE AVATAR
───────────────────────────────────────── */
function Avatar() {
  const ref = useRef(null)
  const [ripples, setRipples] = useState([])
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]), { stiffness: 120, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); setHovered(false) }
  const handleClick = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const id = Date.now()
    setRipples(r => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }])
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div className="absolute rounded-full border border-blue-500/20" style={{ width: 340, height: 340 }}
        animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-lg shadow-blue-400/60" />
      </motion.div>
      <motion.div className="absolute rounded-full border border-dashed border-blue-600/20" style={{ width: 280, height: 280 }}
        animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="absolute rounded-full pointer-events-none" style={{ width: 260, height: 260 }}
        animate={{
          background: hovered ? 'radial-gradient(circle, rgba(59,130,246,0.5), transparent)' : 'radial-gradient(circle, rgba(59,130,246,0.25), transparent)',
          scale: hovered ? 1.15 : 1,
        }} transition={{ duration: 0.3 }} />
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 overflow-hidden rounded-full">
        <img src="./avatar.jpg" alt="Uttam Yadav"
          className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full"
          style={{ filter: hovered ? 'drop-shadow(0 0 30px rgba(96,165,250,0.9))' : 'drop-shadow(0 0 20px rgba(59,130,246,0.4))', transition: 'filter 0.3s' }}
          draggable={false} />
        <motion.div className="absolute inset-0 rounded-full pointer-events-none"
          animate={{ background: hovered ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)' : 'transparent' }}
          transition={{ duration: 0.3 }} />
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <AnimatePresence>
            {ripples.map(r => (
              <Ripple key={r.id} x={r.x} y={r.y}
                onDone={() => setRipples(prev => prev.filter(p => p.id !== r.id))} />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence>
        {!hovered && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute -bottom-7 font-mono text-xs text-[#4b5563] tracking-wider">
            hover or click me
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────── */
export default function Home({ navigate }) {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-16 overflow-hidden">

      {/* ── HERO ── */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto w-full py-16">

        {/* LEFT — Avatar */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="relative flex-shrink-0 flex flex-col items-center gap-10">
          <motion.div initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.6 }}
            className="relative">
            <div className="bg-[#07111e]/90 border border-blue-500/50 rounded-2xl px-4 py-2.5 backdrop-blur-sm shadow-lg shadow-blue-900/40">
              <p className="font-mono text-sm text-[#93c5fd] whitespace-nowrap">
                Hello! I Am <span className="text-blue-300 font-bold">Uttam Yadav</span>
              </p>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-blue-500/50" />
            </div>
          </motion.div>
          <Avatar />
        </motion.div>

        {/* RIGHT — Text */}
        <div className="flex-1 max-w-xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs text-blue-400 tracking-widest mb-3">
            // BSc CYBER SECURITY · UEL 2027 · LONDON, UK
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-[#8b949e] text-sm mb-1">
            A cybersecurity student building towards a
          </motion.p>

          {/* TYPING ANIMATION */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight mb-4 min-h-[1.3em]">
            <TypingText />
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="text-[#6e7681] text-sm leading-relaxed mb-8">
            BSc (Hons) Cyber Security student at{' '}
            <span className="text-blue-400 font-semibold">University of East London</span>,
            building practical experience across phishing detection, SOC analysis, web security, Python, and cloud security.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-6">
            <button onClick={() => navigate('projects')}
              className="group px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm tracking-wider rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-900/40">
              VIEW PROJECTS
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="./cv.html" target="_blank"
              className="px-6 py-3 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 text-blue-300 font-mono text-sm tracking-wider rounded-xl transition-all flex items-center gap-2">
              <Download size={15} /> DOWNLOAD CV
            </a>
            <button onClick={() => navigate('contact')}
              className="px-6 py-3 border border-[#0e1f35] hover:border-blue-500/30 text-[#4b5563] hover:text-[#e6edf3] font-mono text-sm tracking-wider rounded-xl transition-all">
              GET IN TOUCH
            </button>
          </motion.div>

          {/* STATUS */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex items-center gap-2 font-mono text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/60" />
            OPEN TO CYBERSECURITY OPPORTUNITIES · AVAILABLE NOW
          </motion.div>
        </div>
      </div>

      {/* ── TERMINAL + THM BADGE ── */}
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-5 mb-8">
        <TerminalWindow />
        <div className="flex flex-col gap-4">
          <THMBadge />

          {/* Quick stats */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-3">
            {[
              { icon: '🎯', value: '80+', label: 'TryHackMe Rooms' },
              { icon: '🕷️', value: '4',   label: 'PortSwigger Labs' },
              { icon: '🏢', value: '3',   label: 'Job Simulations' },
              { icon: '🎓', value: '2027', label: 'Expected Graduation' },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.04 }}
                className="p-3 rounded-xl border border-[#0e1f35] bg-[#0d1423] text-center cursor-default">
                <p className="text-lg mb-0.5">{s.icon}</p>
                <p className="text-lg font-black text-blue-400">{s.value}</p>
                <p className="font-mono text-xs text-[#4b5563] leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div className="max-w-6xl mx-auto w-full border-t border-[#0e1f35] pb-6" />
    </div>
  )
}
