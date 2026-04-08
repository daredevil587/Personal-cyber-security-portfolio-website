import { motion } from 'framer-motion'
import { ExternalLink, FileText } from 'lucide-react'

const projects = [
  {
    icon: '🤖',
    title: 'AI-Powered SOC Phishing Detection Dashboard',
    desc: 'Built a real-time phishing detection system combining rule-based threat logic with a TF-IDF + Logistic Regression ML model. Analyses email content, calculates risk scores, and outputs SOC-style threat classification (Low / Suspicious / High Risk). Features a recruiter demo mode, phishing probability gauge, rule vs ML score comparison, and downloadable CSV reports — deployed via Streamlit.',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'TF-IDF', 'SOC', 'Threat Detection', 'Cloud Deployment'],
    liveUrl: 'https://ai-soc-phishing-detector-3mgsv6jggmpcvfzbrpxdhu.streamlit.app/',
    status: 'LIVE',
  },
  {
    icon: '🕷️',
    title: 'Web App Exploitation — Path Traversal Labs',
    desc: 'Solved 4 progressive file path traversal labs on PortSwigger Web Security Academy using Burp Suite Proxy and Repeater. Techniques covered: basic ../  traversal, absolute path bypass, non-recursive stripping bypass (nested payloads), and double URL-encoding evasion. Each lab required understanding how the server-side filter fails before crafting the correct bypass payload.',
    tags: ['Burp Suite', 'Path Traversal', 'Filter Bypass', 'URL Encoding', 'Web App Security', 'OWASP', 'Manual Exploitation'],
    writeupPage: true,
    status: 'IN PROGRESS',
  },
]

export default function Projects({ navigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2"
      >
        // PROJECTS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e6edf3] mb-10"
      >
        My Projects
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="p-6 rounded-xl border border-[#0e1f35] bg-[#0d1423] hover:border-blue-500/30 transition-all duration-200 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{proj.icon}</span>
              <span className={`font-mono text-xs px-2 py-1 rounded border ${proj.status === 'LIVE' ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-amber-400 border-amber-500/30 bg-amber-500/10'}`}>
                {proj.status}
              </span>
            </div>

            <h3 className="font-bold text-[#e6edf3] mb-3 text-lg leading-tight">{proj.title}</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed mb-4 flex-1">{proj.desc}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {proj.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {proj.liveUrl && (
                <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs rounded transition-all">
                  <ExternalLink size={13} /> LIVE DEMO
                </a>
              )}
              {proj.writeupPage && (
                <button
                  onClick={() => navigate('cert-detail', 'portswigger')}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-500/30 hover:border-blue-400 text-blue-300 font-mono text-xs rounded transition-all">
                  <FileText size={13} /> WRITEUP
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-10 p-5 rounded-xl border border-dashed border-[#0e1f35] text-center"
      >
        <p className="font-mono text-xs text-[#4b5563] tracking-wider">MORE PROJECTS COMING — CTF WRITEUPS · SIEM LAB · PYTHON SECURITY TOOLS</p>
      </motion.div>
    </div>
  )
}
