import { motion } from 'framer-motion'
import { ExternalLink, FileText, ShieldCheck } from 'lucide-react'

const projects = [
  {
    icon: '🤖',
    title: 'AI-Powered SOC Phishing Detection Dashboard',
    desc: 'Built and deployed a phishing triage application that combines explainable rule-based checks with a TF-IDF and Logistic Regression model. It analyses email content and returns a clear Low, Suspicious, or High Risk classification for SOC-style review.',
    outcome: 'Includes a recruiter demo, phishing-probability gauge, rule-versus-ML comparison, risk scoring, and downloadable CSV reports.',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'TF-IDF', 'SOC', 'Threat Detection', 'Cloud Deployment'],
    liveUrl: 'https://ai-soc-phishing-detector-3mgsv6jggmpcvfzbrpxdhu.streamlit.app/',
    status: 'LIVE',
  },
  {
    icon: '🕷️',
    title: 'Web App Exploitation — Path Traversal Labs',
    desc: 'Completed four progressive PortSwigger Web Security Academy labs using Burp Suite Proxy and Repeater. Tested basic traversal, absolute-path bypass, nested payloads against non-recursive filters, and double URL-encoding evasion.',
    outcome: 'Captured the vulnerable server-side behaviour and payload logic in a portfolio write-up that makes the testing process easy to review.',
    tags: ['Burp Suite', 'Path Traversal', 'Filter Bypass', 'URL Encoding', 'Web App Security', 'OWASP', 'Manual Exploitation'],
    writeupPage: true,
    status: 'LAB SERIES',
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity Analyst Job Simulations',
    desc: 'Completed employer-designed simulations from AIG and Deloitte Australia through Forage, working through ransomware response, threat classification, IAM, log analysis, vulnerability research, and stakeholder reporting scenarios.',
    outcome: 'Converted technical findings into concise, decision-ready recommendations while practising structured incident and risk documentation.',
    tags: ['MITRE ATT&CK', 'Incident Response', 'IAM', 'Log Analysis', 'Risk Reporting', 'Forage'],
    navigateTo: 'certs',
    status: 'COMPLETED',
  },
]

const statusStyle = {
  LIVE: 'text-green-400 border-green-500/30 bg-green-500/10',
  COMPLETED: 'text-green-400 border-green-500/30 bg-green-500/10',
  'LAB SERIES': 'text-amber-400 border-amber-500/30 bg-amber-500/10',
}

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
        className="text-4xl font-black text-[#e6edf3] mb-4"
      >
        Selected Security Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
        className="max-w-3xl text-sm text-[#8b949e] leading-relaxed mb-8"
      >
        Practical work across phishing detection, web application security, incident response, and technology risk — with clear evidence of what I built, tested, and learned.
      </motion.p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="p-6 rounded-xl border border-[#0e1f35] bg-[#0d1423] hover:border-blue-500/30 transition-all duration-200 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{proj.icon}</span>
              <span className={`font-mono text-xs px-2 py-1 rounded border ${statusStyle[proj.status]}`}>
                {proj.status}
              </span>
            </div>

            <h3 className="font-bold text-[#e6edf3] mb-3 text-lg leading-tight">{proj.title}</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed mb-3">{proj.desc}</p>
            <p className="text-sm text-[#b5c0cf] leading-relaxed mb-4 flex-1">
              <span className="font-mono text-xs text-blue-400">OUTCOME — </span>{proj.outcome}
            </p>

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
              {proj.navigateTo && (
                <button
                  onClick={() => navigate(proj.navigateTo)}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-500/30 hover:border-blue-400 text-blue-300 font-mono text-xs rounded transition-all">
                  <ShieldCheck size={13} /> VIEW CREDENTIALS
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
        <p className="font-mono text-xs text-[#4b5563] tracking-wider">BUILDING NEXT — SIEM INVESTIGATION LAB · PYTHON SECURITY AUTOMATION · CTF WRITEUPS</p>
      </motion.div>
    </div>
  )
}
