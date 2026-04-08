import { motion } from 'framer-motion'

const certs = [
  { id: 'deloitte-cyber', icon: '🔐', name: 'Deloitte Australia — Cyber Job Simulation', issuer: 'DELOITTE · FORAGE PLATFORM', status: 'completed' },
  { id: 'deloitte-data', icon: '📊', name: 'Deloitte Australia — Data Analytics Simulation', issuer: 'DELOITTE · FORAGE PLATFORM', status: 'completed' },
  { id: 'aig', icon: '🛡️', name: 'AIG — Shields Up: Cybersecurity Job Simulation', issuer: 'AIG · FORAGE PLATFORM', status: 'completed' },
  { id: 'thm-presec', icon: '🛡️', name: 'Pre Security Certificate', issuer: 'TRYHACKME · OCT 2025 – OCT 2028', status: 'completed' },
  { id: 'python', icon: '🐍', name: 'Python Essentials 2', issuer: 'CISCO NETWORKING ACADEMY', status: 'completed' },
  { id: 'thm-rooms', icon: '🎯', name: 'TryHackMe — 80+ Rooms Completed', issuer: 'TRYHACKME · ONGOING', status: 'active' },
  { id: 'isc2', icon: '⏳', name: 'ISC2 CC — Certified in Cybersecurity', issuer: 'ISC2', status: 'progress' },
  { id: 'portswigger', icon: '🕷️', name: 'PortSwigger Web Security Academy', issuer: 'PORTSWIGGER · WEB APP EXPLOITATION LABS', status: 'progress' },
]

const badge = {
  completed: 'text-green-400 border-green-500/30 bg-green-500/10',
  active:    'text-green-400 border-green-500/30 bg-green-500/10',
  progress:  'text-amber-400 border-amber-500/30 bg-amber-500/10',
}
const badgeLabel = { completed: '✓ COMPLETED', active: '✓ ACTIVE', progress: '⟳ IN PROGRESS' }

export default function Certifications({ navigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2"
      >
        // CERTIFICATIONS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e2e0ff] mb-10"
      >
        Certifications & Simulations
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(124,58,237,0.5)' }}
            onClick={() => navigate('cert-detail', cert.id)}
            className="p-5 rounded-xl border border-[#0e1f35] bg-[#0d1423] cursor-pointer transition-all duration-200 flex gap-4 items-start"
          >
            <span className="text-3xl">{cert.icon}</span>
            <div className="min-w-0">
              <p className="font-semibold text-[#e2e0ff] text-sm leading-snug mb-1">{cert.name}</p>
              <p className="font-mono text-xs text-[#4b5563] mb-2 truncate">{cert.issuer}</p>
              <span className={`inline-block font-mono text-xs px-2 py-0.5 rounded border ${badge[cert.status]}`}>
                {badgeLabel[cert.status]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
