import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Menu, X, Github } from 'lucide-react'

const links = [
  { id: 'home',       label: 'HOME' },
  { id: 'about',      label: 'ABOUT' },
  { id: 'skills',     label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects',   label: 'PROJECTS' },
  { id: 'certs',      label: 'CERTIFICATIONS' },
  { id: 'contact',    label: 'CONTACT' },
]

export default function Nav({ page, navigate }) {
  const [open, setOpen] = useState(false)
  const activeId = page === 'cert-detail' ? 'certs' : page

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/85 backdrop-blur-md border-b border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => navigate('home')}
          className="font-mono text-sm text-blue-400 hover:text-blue-300 transition-colors tracking-widest">
          UY_PORTFOLIO
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <li key={l.id}>
              <button onClick={() => navigate(l.id)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded transition-all duration-200
                  ${activeId === l.id
                    ? 'text-blue-300 bg-blue-500/10 border border-blue-500/30'
                    : 'text-[#64748b] hover:text-[#e5e7eb] hover:bg-white/5'}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://github.com/daredevil587" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 border border-[#1f2937] hover:border-blue-500/40 text-[#64748b] hover:text-[#e5e7eb] text-xs font-mono tracking-wider rounded transition-all duration-200">
            <Github size={14} /> GITHUB
          </a>
          <a href="./cv.html" target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono tracking-wider rounded transition-all duration-200 border border-blue-400/30">
            <Download size={14} /> DOWNLOAD CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-[#e5e7eb] p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-[#1f2937] bg-[#0b1220]/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-2">
            {links.map(l => (
              <li key={l.id}>
                <button onClick={() => { navigate(l.id); setOpen(false) }}
                  className={`w-full text-left px-3 py-2 text-xs font-mono tracking-wider rounded transition-all
                    ${activeId === l.id ? 'text-blue-300 bg-blue-500/10' : 'text-[#64748b] hover:text-[#e5e7eb]'}`}>
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2 flex gap-2">
              <a href="https://github.com/daredevil587" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-[#1f2937] text-[#64748b] text-xs font-mono tracking-wider rounded transition-all">
                <Github size={14} /> GITHUB
              </a>
              <a href="./cv.html" target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono tracking-wider rounded transition-all">
                <Download size={14} /> CV
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
