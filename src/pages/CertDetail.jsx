import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const certData = {
  'deloitte-cyber': {
    icon: '🔐',
    title: 'Deloitte Australia — Cyber Job Simulation',
    meta: 'DELOITTE AUSTRALIA · FORAGE PLATFORM · 30–60 MINS · INTRODUCTORY',
    status: 'completed',
    sectionLabel: 'TASKS COMPLETED',
    overview: "This simulation was built from real work done by Deloitte Australia's cyber team. It placed me in the role of a junior cybersecurity consultant working on a client engagement — a manufacturing company called Daikibo — investigating a potential data breach and performing security analysis.",
    tasks: [
      { num: '01', title: 'Breach Investigation — Log Analysis', desc: 'Analysed a web_requests.log file during the suspected attack window. Identified suspicious API requests at precise automated intervals. Traced activity to an internal user ID performing machine-like data scraping.' },
      { num: '02', title: 'VPN & Access Control Assessment', desc: 'Determined whether the breach could have originated externally without VPN access. Concluded the threat was an insider or compromised internal account.' },
      { num: '03', title: 'MITRE ATT&CK Threat Classification', desc: 'Classified identified attack patterns against the MITRE ATT&CK framework, mapping techniques, tactics, and procedures for stakeholder review.' },
      { num: '04', title: 'Stakeholder-Ready Reporting', desc: 'Produced a professional incident report including risk impact, indicators of compromise, and recommended remediation steps.' },
    ],
    skills: ['Log Analysis', 'MITRE ATT&CK', 'Incident Response', 'IAM', 'Threat Classification', 'Blue Team', 'Stakeholder Reporting', 'Insider Threat Detection'],
  },
  'deloitte-data': {
    icon: '📊',
    title: 'Deloitte Australia — Data Analytics Job Simulation',
    meta: 'DELOITTE AUSTRALIA · FORAGE PLATFORM · 1–2 HOURS · INTERMEDIATE',
    status: 'completed',
    sectionLabel: 'TASKS COMPLETED',
    overview: "Placed in Deloitte's forensic data analytics team, working on factory telemetry analysis and gender pay equality classification — built from Deloitte's actual client delivery methodology.",
    tasks: [
      { num: '01', title: 'Machine Downtime Visualisation — Tableau Dashboard', desc: 'Imported and processed Daikibo factory telemetry data (JSON) in Tableau. Built interactive dashboards comparing downtime across factories — identifying Daikibo Berlin as the highest-efficiency site.' },
      { num: '02', title: 'Gender Pay Equality Classification — Excel', desc: 'Generated classification logic to categorise pay equality levels across the organisation, producing actionable insights for stakeholder reporting.' },
    ],
    skills: ['Tableau', 'Excel', 'Data Classification', 'JSON Processing', 'Data Visualisation', 'Forensic Analytics', 'Governance Reporting'],
  },
  'aig': {
    icon: '🛡️',
    title: 'AIG — Shields Up: Cybersecurity Job Simulation',
    meta: 'AIG · FORAGE PLATFORM · INTRODUCTORY LEVEL',
    status: 'completed',
    sectionLabel: 'TASKS COMPLETED',
    overview: "Placed in the role of a cybersecurity analyst at AIG, responding to a simulated ransomware incident and supporting the security team through threat analysis and stakeholder communication — reflecting AIG's actual internal processes.",
    tasks: [
      { num: '01', title: 'Ransomware Vulnerability Research', desc: 'Investigated a zero-day vulnerability exploited in a ransomware attack. Researched the CVE, assessed impact severity, and produced a summary for the security team using the NIST framework.' },
      { num: '02', title: 'Technical Email — Bypassing Ransomware', desc: 'Wrote a clear, professional email to an affected business unit explaining how to brute-force a decryption key using Python, translating complex technical detail into actionable guidance for a non-technical audience.' },
    ],
    skills: ['Vulnerability Research', 'CVE Analysis', 'Incident Response', 'NIST Framework', 'Ransomware', 'Python Scripting', 'Stakeholder Communication', 'Technical Writing'],
  },
  'thm-presec': {
    icon: '🛡️',
    title: 'TryHackMe — Pre Security Certificate',
    meta: 'TRYHACKME · VALID OCT 2025 – OCT 2028 · 15 ROOMS · ~40 HOURS',
    status: 'completed',
    sectionLabel: 'TASKS COMPLETED',
    overview: 'A structured learning path covering the foundational knowledge required before pursuing offensive or defensive security specialisations.',
    tasks: [
      { num: '01', title: 'Cyber Security Introduction', desc: 'Real-world breach scenarios, attack surfaces, and how hackers think.' },
      { num: '02', title: 'Network Fundamentals (5 rooms)', desc: 'IP, MAC, LAN topologies, ARP, DHCP, subnetting, OSI model, TCP/IP, packet analysis.' },
      { num: '03', title: 'How The Web Works (4 rooms)', desc: 'DNS, HTTP/HTTPS, cookies, load balancers, CDNs, WAFs.' },
      { num: '04', title: 'Linux Fundamentals (3 rooms)', desc: 'CLI, file permissions, SSH, process management, cron jobs.' },
      { num: '05', title: 'Windows Fundamentals (2 rooms)', desc: 'Active Directory basics, registry, Task Manager, Windows Defender.' },
    ],
    skills: ['Networking', 'Linux CLI', 'DNS', 'HTTP/HTTPS', 'TCP/IP', 'OSI Model', 'Windows Security', 'Web Infrastructure'],
  },
  'python': {
    icon: '🐍',
    title: 'Python Essentials 2',
    meta: 'CISCO NETWORKING ACADEMY × OPENEDG PYTHON INSTITUTE · ~40 HOURS',
    status: 'completed',
    sectionLabel: 'MODULES COMPLETED',
    overview: 'Python Essentials 2 builds on foundational Python knowledge, covering object-oriented programming, exception handling, file I/O, and advanced string and collection operations — all directly applicable to scripting security tools and automating log analysis.',
    tasks: [
      { num: '01', title: 'Modules & Packages', desc: 'Importing, creating, and organising Python modules and packages. Working with the Python Standard Library and pip.' },
      { num: '02', title: 'Strings & String Methods', desc: 'Advanced string manipulation — slicing, formatting, encoding, and regex-ready processing applicable to log and payload parsing.' },
      { num: '03', title: 'Object-Oriented Programming', desc: 'Classes, objects, inheritance, polymorphism, encapsulation. Building structured, reusable security tooling.' },
      { num: '04', title: 'Exception Handling', desc: 'try/except/finally, custom exceptions, and writing resilient scripts that handle errors gracefully.' },
      { num: '05', title: 'File Processing & I/O', desc: 'Reading and writing files (text, binary), working with directories — directly applicable to log file parsing and report generation.' },
      { num: '06', title: 'Advanced Collections', desc: 'List comprehensions, generators, lambdas, map/filter — writing concise, efficient Python for data processing tasks.' },
    ],
    skills: ['Python OOP', 'Exception Handling', 'File I/O', 'Modules & Packages', 'String Processing', 'Generators', 'Scripting', 'Log Parsing', 'Automation'],
  },
  'thm-rooms': {
    icon: '🎯',
    title: 'TryHackMe — 80+ Rooms Completed',
    meta: 'TRYHACKME · ONGOING SELF-DIRECTED TRAINING',
    status: 'active',
    sectionLabel: 'AREAS COVERED',
    overview: 'An ongoing self-directed training programme covering a broad range of offensive and defensive security disciplines through hands-on labs and CTF-style challenges.',
    tasks: [
      { num: '▸', title: 'Network Security & Traffic Analysis', desc: 'Wireshark, Nmap, network enumeration, firewall bypass techniques.' },
      { num: '▸', title: 'Cloud & Operational Risk', desc: 'Cloud security fundamentals, misconfiguration risks, identity-based attacks.' },
      { num: '▸', title: 'Incident Tracking & Vulnerability Documentation', desc: 'Structured documentation, incident chronologies, evidence collection.' },
      { num: '▸', title: 'Web Application Security', desc: 'OWASP Top 10, SQL injection, XSS, Burp Suite.' },
      { num: '▸', title: 'CTF Challenges & Offensive Security', desc: 'Multi-step exploitation, privilege escalation, lateral movement.' },
    ],
    skills: ['Nmap', 'Wireshark', 'Burp Suite', 'Hashcat', 'Linux', 'Web App Security', 'Cloud Security', 'Incident Tracking', 'CTF', 'OSINT'],
  },
  'isc2': {
    icon: '⏳',
    title: 'ISC2 CC — Certified in Cybersecurity',
    meta: 'ISC2 — INTERNATIONAL INFORMATION SYSTEM SECURITY CERTIFICATION CONSORTIUM',
    status: 'progress',
    sectionLabel: 'TASKS COMPLETED',
    overview: 'Working towards the ISC2 Certified in Cybersecurity (CC) entry-level credential, covering five core security domains aligned with industry best practice.',
    tasks: [
      { num: '01', title: 'Security Principles', desc: 'CIA Triad, risk management fundamentals, security governance frameworks.' },
      { num: '02', title: 'Business Continuity, DR & Incident Response', desc: 'BC/DR planning, full incident response lifecycle.' },
      { num: '03', title: 'Access Controls Concepts', desc: 'Physical and logical access controls, IAM, authentication, least privilege.' },
      { num: '04', title: 'Network Security', desc: 'Network threats, OSI model, TCP/IP, firewall types, VPNs, wireless security.' },
      { num: '05', title: 'Security Operations', desc: 'System hardening, patch management, configuration management.' },
    ],
    skills: ['Risk Management', 'IAM', 'Incident Response', 'Business Continuity', 'Network Security', 'Security Governance', 'Access Controls'],
  },
  'portswigger': {
    icon: '🕷️',
    title: 'PortSwigger Web Security Academy',
    meta: 'PORTSWIGGER · WEB APPLICATION EXPLOITATION LABS · IN PROGRESS — APR 2026',
    status: 'progress',
    sectionLabel: 'TASKS COMPLETED',
    overview: "PortSwigger Web Security Academy is the industry-standard free platform for learning web application hacking, built by the creators of Burp Suite. Labs simulate real-world vulnerabilities and require manual exploitation using Burp Suite's Proxy, Repeater, and HTTP History tools. Currently progressing through the Path Traversal module.",
    tasks: [
      { num: '01', title: 'File Path Traversal — Simple Case', desc: 'Exploited a basic directory traversal vulnerability by injecting ../ sequences into a filename parameter to read arbitrary server files (e.g. /etc/passwd) outside the web root.' },
      { num: '02', title: 'Traversal Sequences Blocked — Absolute Path Bypass', desc: "Bypassed a filter that stripped traversal sequences by supplying an absolute file path directly (e.g. /etc/passwd), exploiting the application's failure to validate absolute paths." },
      { num: '03', title: 'Traversal Sequences Stripped Non-Recursively', desc: 'Defeated a non-recursive stripping filter using nested traversal payloads (e.g. ....//....//  ) that reconstruct a valid ../ sequence after sanitisation is applied once.' },
      { num: '04', title: 'Traversal Sequences Stripped with Superfluous URL-Decode', desc: 'Bypassed a URL-decoding filter by double-encoding traversal characters (e.g. %252e%252e%252f), exploiting the application performing URL-decoding after the security check.' },
    ],
    skills: ['Burp Suite', 'HTTP Repeater', 'Proxy / HTTP History', 'Path Traversal', 'Absolute Path Bypass', 'Non-Recursive Bypass', 'URL Encoding', 'Double Encoding', 'Manual Payload Crafting', 'Filter Evasion'],
  },
}

const badge = {
  completed: 'text-green-400 border-green-500/30 bg-green-500/10',
  active:    'text-green-400 border-green-500/30 bg-green-500/10',
  progress:  'text-amber-400 border-amber-500/30 bg-amber-500/10',
}
const badgeLabel = { completed: '✓ COMPLETED', active: '✓ ACTIVE', progress: '⟳ IN PROGRESS' }

export default function CertDetail({ certId, navigate }) {
  const cert = certData[certId]

  if (!cert) return (
    <div className="max-w-4xl mx-auto px-6 py-28 text-center">
      <p className="text-[#64748b] font-mono">Cert not found.</p>
      <button onClick={() => navigate('certs')} className="mt-4 text-blue-400 hover:text-blue-300 font-mono text-sm">← Back to Certifications</button>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-20 py-28">
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        onClick={() => navigate('certs')}
        className="flex items-center gap-2 font-mono text-xs text-[#64748b] hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft size={14} /> BACK TO CERTIFICATIONS
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-6 mb-10"
      >
        <span className="text-5xl">{cert.icon}</span>
        <div>
          <h1 className="text-3xl font-black text-[#e5e7eb] mb-1">{cert.title}</h1>
          <p className="font-mono text-xs text-[#64748b] mb-3">{cert.meta}</p>
          <span className={`font-mono text-xs px-2 py-1 rounded border ${badge[cert.status]}`}>
            {badgeLabel[cert.status]}
          </span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="mb-8 p-5 rounded-xl border border-[#1f2937] bg-[#111827]"
      >
        <h3 className="font-mono text-xs text-blue-400 tracking-wider mb-3">// OVERVIEW</h3>
        <p className="text-[#8b949e] leading-relaxed">{cert.overview}</p>
      </motion.div>

      {/* Tasks */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="font-mono text-xs text-blue-400 tracking-wider mb-4">// {cert.sectionLabel}</h3>
        <div className="space-y-3">
          {cert.tasks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}
              className="flex gap-4 p-4 rounded-xl border border-[#1f2937] bg-[#111827] hover:border-blue-500/20 transition-colors"
            >
              <span className="font-mono text-sm text-blue-400 w-8 shrink-0">{task.num}</span>
              <div>
                <h4 className="font-semibold text-[#e5e7eb] mb-1">{task.title}</h4>
                <p className="text-sm text-[#8b949e]">{task.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="p-5 rounded-xl border border-[#1f2937] bg-[#111827]"
      >
        <h3 className="font-mono text-xs text-blue-400 tracking-wider mb-3">// SKILLS DEMONSTRATED</h3>
        <div className="flex flex-wrap gap-2">
          {cert.skills.map(skill => (
            <span key={skill} className="px-3 py-1 font-mono text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
