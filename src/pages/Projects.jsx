import { motion } from 'framer-motion'
import { ExternalLink, FileText, Github, ShieldCheck } from 'lucide-react'

const featuredProjects = [
  {
    mark: 'GQ',
    title: 'GeneriQ — UK Medicine Price Comparison',
    desc: 'A full-stack medicine search and price-comparison platform covering 38,000+ UK medicines, generic alternatives, NHS-versus-retail savings, watchlists, basket comparison, price alerts, and barcode-assisted search.',
    outcome: 'Reworked a slow product-collection flow, limited the PostgreSQL connection pool, merged duplicate pharmacy data, and corrected ingredient extraction to improve performance and data quality.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Railway', 'Data Pipelines'],
    repoUrl: 'https://github.com/daredevil587/generiq',
    status: 'IN DEVELOPMENT',
  },
  {
    mark: 'AI',
    title: 'AI SOC Phishing Detector',
    desc: 'A Python phishing-triage application that checks sender details, urgent or financial language, suspicious links, and spoofing indicators, then combines explainable rules with a machine-learning score.',
    outcome: 'Produces a 0–100 risk score, classification, analyst-readable reasons, and structured security reports for repeatable SOC-style review.',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'TF-IDF', 'IMAP', 'SOC Automation'],
    repoUrl: 'https://github.com/daredevil587/ai-soc-phishing-detector',
    liveUrl: 'https://ai-soc-phishing-detector-3mgsv6jggmpcvfzbrpxdhu.streamlit.app/',
    status: 'LIVE',
  },
  {
    mark: 'DP',
    title: 'DocPrivacy Tools',
    desc: 'A privacy-first suite of browser-based PDF and image utilities for compression, conversion, merging, editing, and unlocking documents. Files stay in the user’s browser.',
    outcome: 'Built a reusable Astro and React tool framework around pdf-lib and pdfjs-dist, solving a real document-processing need without uploading sensitive files to a server.',
    tags: ['Astro', 'TypeScript', 'React', 'pdf-lib', 'PDF.js', 'Client-side Privacy'],
    repoUrl: 'https://github.com/daredevil587/web-document-tools',
    liveUrl: 'https://daredevil587.github.io/web-document-tools/',
    status: 'LIVE',
  },
  {
    mark: 'GRC',
    title: 'NexaCloud GRC Risk Automation',
    desc: 'A Python risk register that maps ten cloud and security risks to NIST SP 800-53 Rev. 5 controls and applies ISO 27001-style likelihood and impact scoring.',
    outcome: 'Prioritises critical-to-low risks, sorts the highest exposure first, and exports decision-ready CSV and colour-coded Excel reports for remediation tracking.',
    tags: ['Python', 'NIST SP 800-53', 'ISO 27001', 'OWASP Top 10', 'Risk Scoring', 'Excel'],
    repoUrl: 'https://github.com/daredevil587/nexacloud-grc-project',
    status: 'COMPLETED',
  },
  {
    mark: 'DFS',
    title: 'Maze Escape',
    desc: 'An adaptive browser game with procedurally generated mazes, hazards, five levels, performance-based difficulty, training modes, and accessibility options.',
    outcome: 'Implemented DFS/backtracking generation, wall and hazard collision logic, shortest-path visualisation, local score storage, touch controls, and detailed game-state management.',
    tags: ['JavaScript', 'Canvas', 'DFS', 'Backtracking', 'Algorithms', 'Accessibility'],
    repoUrl: 'https://github.com/daredevil587/Maze-Escape',
    liveUrl: 'https://daredevil587.github.io/Maze-Escape/',
    status: 'LIVE',
  },
  {
    mark: 'HM',
    title: 'Hey Marta',
    desc: 'A responsive, browser-based personal music player with local file import, playlist search, listening history, voice commands, text-to-speech feedback, mood selection, and audio controls.',
    outcome: 'Combined the Web Audio, Speech Recognition, Speech Synthesis, and browser storage APIs in a single mobile-friendly application with no backend dependency.',
    tags: ['JavaScript', 'Web Audio API', 'Voice UI', 'IndexedDB', 'Responsive Design'],
    repoUrl: 'https://github.com/daredev587/hey-marta',
    liveUrl: 'https://daredevil587.github.io/hey-marta/',
    status: 'LIVE',
  },
]

const labProjects = [
  {
    mark: 'WIN',
    title: 'Windows Server Infrastructure Lab',
    desc: 'Built a Windows Server and client environment in VMware with internal and external network interfaces, DNS, DHCP, user accounts, permissions, and domain connectivity.',
    outcome: 'Troubleshot IP addressing, name resolution, client joining, and access issues using a structured infrastructure-support workflow.',
    tags: ['Windows Server 2019/2022', 'Active Directory', 'DNS', 'DHCP', 'TCP/IP', 'VMware'],
    status: 'LAB',
  },
  {
    mark: 'SIEM',
    title: 'Security Monitoring & Network Operations',
    desc: 'Investigated security events with Splunk, analysed event fields and timelines, and examined packet captures using Wireshark and Tshark.',
    outcome: 'Created Snort detection rules for SSH and ICMP activity and documented findings using incident-triage and Five Ws reporting principles.',
    tags: ['Splunk', 'SIEM', 'SPL', 'Wireshark', 'Tshark', 'Snort'],
    status: 'LAB',
  },
  {
    mark: 'VA',
    title: 'Vulnerability Assessment',
    desc: 'Performed host discovery and vulnerability scanning with Nmap and OpenVAS, then reviewed the evidence behind scanner findings.',
    outcome: 'Assessed severity and practical impact before documenting remediation priorities instead of relying on automated ratings alone.',
    tags: ['Nmap', 'OpenVAS', 'Vulnerability Management', 'Risk Prioritisation', 'Reporting'],
    status: 'LAB',
  },
  {
    mark: 'WEB',
    title: 'Web App Exploitation — Path Traversal',
    desc: 'Completed four progressive PortSwigger labs using Burp Suite Proxy and Repeater, covering basic traversal, absolute-path bypass, nested payloads, and double URL-encoding evasion.',
    outcome: 'Documented each vulnerable behaviour, payload decision, and filter-bypass technique in a recruiter-readable technical write-up.',
    tags: ['Burp Suite', 'Path Traversal', 'Filter Bypass', 'URL Encoding', 'OWASP'],
    writeupPage: true,
    status: 'LAB SERIES',
  },
  {
    mark: 'SQL',
    title: 'Payment Management Database',
    desc: 'Designed a payment-management application using Microsoft SQL Server, relational data modelling, SQL queries, and VB.NET application integration.',
    outcome: 'Connected a structured relational database to an application workflow while applying data validation and query design fundamentals.',
    tags: ['Microsoft SQL Server', 'SQL', 'VB.NET', 'Relational Design', 'Database Integration'],
    status: 'ACADEMIC',
  },
  {
    mark: 'SH',
    title: 'Linux User Administration',
    desc: 'Created a menu-driven Bash utility for routine Linux user-management and administration tasks.',
    outcome: 'Turned repeatable command-line operations into a clearer automation workflow with input handling and administrator-focused actions.',
    tags: ['Linux', 'Bash', 'User Administration', 'Automation', 'CLI'],
    status: 'ACADEMIC',
  },
]

const statusStyle = {
  LIVE: 'text-green-400 border-green-500/30 bg-green-500/10',
  COMPLETED: 'text-green-400 border-green-500/30 bg-green-500/10',
  'IN DEVELOPMENT': 'text-amber-300 border-amber-500/30 bg-amber-500/10',
  LAB: 'text-violet-300 border-violet-500/30 bg-violet-500/10',
  'LAB SERIES': 'text-violet-300 border-violet-500/30 bg-violet-500/10',
  ACADEMIC: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
}

function ProjectGrid({ projects, navigate }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map(proj => (
        <motion.article
          key={proj.title}
          whileHover={{ y: -3 }}
          className="min-w-0 overflow-hidden p-6 rounded-xl border border-[#1f2937] bg-[#111827] hover:border-blue-500/30 transition-all duration-200 flex flex-col"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <span className="inline-flex min-w-12 h-12 items-center justify-center rounded-lg border border-blue-500/25 bg-blue-500/10 px-2 font-mono text-sm font-black text-blue-300">
              {proj.mark}
            </span>
            <span className={`font-mono text-[10px] px-2 py-1 rounded border ${statusStyle[proj.status]}`}>
              {proj.status}
            </span>
          </div>

          <h3 className="font-bold text-[#e5e7eb] mb-3 text-lg leading-tight">{proj.title}</h3>
          <p className="break-words text-sm text-[#8b949e] leading-relaxed mb-3">{proj.desc}</p>
          <p className="break-words text-sm text-[#b5c0cf] leading-relaxed mb-4 flex-1">
            <span className="font-mono text-xs text-blue-400">EVIDENCE — </span>{proj.outcome}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {proj.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {proj.liveUrl && (
              <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs rounded transition-all">
                <ExternalLink size={13} /> LIVE DEMO
              </a>
            )}
            {proj.repoUrl && (
              <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 border border-blue-500/30 hover:border-blue-400 text-blue-300 font-mono text-xs rounded transition-all">
                <Github size={13} /> SOURCE
              </a>
            )}
            {proj.writeupPage && (
              <button onClick={() => navigate('cert-detail', 'portswigger')}
                className="flex items-center gap-2 px-3 py-2 border border-blue-500/30 hover:border-blue-400 text-blue-300 font-mono text-xs rounded transition-all">
                <FileText size={13} /> WRITE-UP
              </button>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export default function Projects({ navigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        className="font-mono text-xs text-blue-400 tracking-widest mb-2">
        // PROJECTS
      </motion.p>
      <motion.h2
        className="text-3xl sm:text-4xl font-black text-[#e5e7eb] mb-4">
        Projects With Proof
      </motion.h2>
      <motion.p
        className="max-w-3xl text-sm text-[#8b949e] leading-relaxed mb-12">
        Practical engineering, security, data, and infrastructure work. Public builds link directly to working demos and source repositories; lab projects explain the environment, investigation, and outcome.
      </motion.p>

      <section className="mb-16" aria-labelledby="featured-projects-heading">
        <div className="mb-6">
          <p className="font-mono text-xs tracking-widest text-blue-400 mb-2">01 / FEATURED BUILDS</p>
          <h3 id="featured-projects-heading" className="text-xl sm:text-2xl font-black text-[#e5e7eb]">Public GitHub Projects</h3>
        </div>
        <ProjectGrid projects={featuredProjects} navigate={navigate} />
      </section>

      <section aria-labelledby="lab-projects-heading">
        <div className="mb-6">
          <p className="font-mono text-xs tracking-widest text-blue-400 mb-2">02 / TECHNICAL LABS</p>
          <h3 id="lab-projects-heading" className="text-xl sm:text-2xl font-black text-[#e5e7eb]">Security, Infrastructure & Database Work</h3>
        </div>
        <ProjectGrid projects={labProjects} navigate={navigate} />
      </section>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-12 p-5 rounded-xl border border-dashed border-[#1f2937] text-center">
        <p className="mb-3 text-sm text-[#8b949e]">Employer-designed cyber simulations and supporting credentials are documented separately.</p>
        <button onClick={() => navigate('certs')}
          className="inline-flex items-center gap-2 font-mono text-xs text-blue-300 hover:text-blue-200 transition-colors">
          <ShieldCheck size={14} /> VIEW CERTIFICATIONS & SIMULATIONS
        </button>
      </motion.div>
    </div>
  )
}
