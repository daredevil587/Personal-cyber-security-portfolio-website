import { motion } from 'framer-motion'

const skillCards = [
  {
    icon: '🛡️',
    title: 'SECURITY OPERATIONS',
    tags: ['SIEM', 'MITRE ATT&CK', 'Incident Response', 'Log Analysis', 'IAM', 'Threat Detection'],
  },
  {
    icon: '🔍',
    title: 'PENETRATION TESTING',
    tags: ['Burp Suite', 'Nmap', 'Wireshark', 'Hashcat', 'Linux CLI', 'OSINT', 'Path Traversal', 'URL Encoding Bypass', 'HTTP Manipulation'],
  },
  {
    icon: '🕷️',
    title: 'WEB APP SECURITY',
    tags: ['OWASP Top 10', 'File Path Traversal', 'Absolute Path Bypass', 'Non-Recursive Bypass', 'Double URL-Encoding', 'Manual Payload Crafting', 'Filter Evasion'],
  },
  {
    icon: '💻',
    title: 'PROGRAMMING & DATA',
    tags: ['Python', 'SQL', 'Power BI', 'Excel', 'Bash', 'Scripting'],
  },
  {
    icon: '☁️',
    title: 'CLOUD & GOVERNANCE',
    tags: ['Cloud Security', 'Risk Management', 'Governance', 'Compliance', 'Stakeholder Reporting'],
  },
  {
    icon: '🔐',
    title: 'NETWORK SECURITY',
    tags: ['TCP/IP', 'OSI Model', 'DNS', 'Firewalls', 'VPN', 'Packet Analysis'],
  },
  {
    icon: '🤝',
    title: 'SOFT SKILLS',
    tags: ['Stakeholder Comms', 'Team Collaboration', 'Attention to Detail', 'Time Management', 'Analytical Thinking'],
  },
]

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2"
      >
        // TECHNICAL SKILLS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e2e0ff] mb-10"
      >
        Technical Arsenal
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(124,58,237,0.5)' }}
            className="p-5 rounded-xl border border-[#0e1f35] bg-[#0d1423] transition-all duration-200 group"
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <h3 className="font-mono text-xs tracking-wider text-blue-400 mb-3">{card.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
