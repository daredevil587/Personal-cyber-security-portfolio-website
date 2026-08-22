import { motion } from 'framer-motion'

const skillCards = [
  {
    mark: 'OS',
    title: 'OPERATING SYSTEMS & INFRASTRUCTURE',
    tags: ['Windows 10/11', 'Windows Server 2019/2022', 'Linux', 'Ubuntu', 'Kali Linux', 'Active Directory', 'VMware', 'Docker Fundamentals'],
  },
  {
    mark: 'NET',
    title: 'NETWORKING',
    tags: ['TCP/IP', 'DNS', 'DHCP', 'Routing', 'Switching', 'VLANs', 'VLSM', 'Firewalls', 'VPN Concepts', 'Cisco Packet Tracer'],
  },
  {
    mark: 'SOC',
    title: 'SECURITY OPERATIONS',
    tags: ['Splunk / SIEM', 'Basic SPL', 'Alert Triage', 'Event-log Analysis', 'EDR Concepts', 'Incident Response', 'Phishing Analysis', 'MITRE ATT&CK'],
  },
  {
    mark: 'SEC',
    title: 'SECURITY TESTING & ANALYSIS',
    tags: ['Wireshark', 'Tshark', 'Snort', 'Nmap', 'OpenVAS', 'Burp Suite', 'Vulnerability Assessment', 'OWASP Top 10'],
  },
  {
    mark: 'DEV',
    title: 'PROGRAMMING & AUTOMATION',
    tags: ['Python', 'PowerShell', 'Bash', 'JavaScript', 'TypeScript', 'Java Fundamentals', 'REST / API Concepts'],
  },
  {
    mark: 'DB',
    title: 'DATABASES & WEB DEVELOPMENT',
    tags: ['Microsoft SQL Server', 'SQL', 'PostgreSQL', 'Next.js', 'React', 'Astro', 'Node.js', 'Git / GitHub'],
  },
  {
    mark: 'CLD',
    title: 'CLOUD & GOVERNANCE',
    tags: ['AWS Fundamentals', 'Railway', 'Cloudflare Deployment', 'Cloud Security', 'NIST SP 800-53', 'Risk Assessment', 'GRC Concepts', 'Security Controls'],
  },
  {
    mark: 'PRO',
    title: 'PROFESSIONAL SKILLS',
    tags: ['Structured Troubleshooting', 'Analytical Thinking', 'Technical Documentation', 'Teamwork', 'Prioritisation', 'Customer Communication', 'Ownership', 'Reliability'],
  },
]

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2">
        // TECHNICAL SKILLS
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e5e7eb] mb-4">
        Technical Toolkit
      </motion.h2>
      <p className="max-w-3xl text-sm text-[#8b949e] leading-relaxed mb-10">
        A practical skills bank built through university labs, independent projects, security platforms, and deployed applications.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3, borderColor: 'rgba(59,130,246,0.45)' }}
            className="p-5 rounded-xl border border-[#1f2937] bg-[#111827] transition-all duration-200"
          >
            <div className="mb-4 inline-flex min-w-11 h-11 items-center justify-center rounded-lg border border-blue-500/25 bg-blue-500/10 px-2 font-mono text-xs font-black text-blue-300">
              {card.mark}
            </div>
            <h3 className="font-mono text-xs tracking-wider text-blue-400 mb-3">{card.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
