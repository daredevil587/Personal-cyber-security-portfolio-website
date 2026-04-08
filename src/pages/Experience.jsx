import { motion } from 'framer-motion'

const timeline = [
  {
    date: 'APR 2026 — PRESENT',
    title: 'Team Member',
    org: 'Wingstop · London Area, United Kingdom',
    current: true,
    points: [
      'Delivering fast-paced service in a high-volume environment, maintaining accuracy and speed under pressure — skills directly applicable to SOC alerting environments.',
      'Working as part of a close-knit team across multiple service stations, developing strong coordination and communication habits.',
      'Managing time effectively across concurrent demands, building the task-prioritisation discipline required in security operations.',
    ],
  },
  {
    date: 'APR 2025 — APR 2026',
    title: 'Crew Member',
    org: 'Sides · London Area, United Kingdom',
    points: [
      'Maintained accuracy across 60–80+ daily orders in a high-pressure environment, demonstrating the attention to detail required for consolidating multi-stakeholder governance materials.',
      'Identified process inefficiencies contributing to a 10–15% reduction in average wait times — reflecting an analytical, improvement-focused mindset.',
      'Managed 20 weekly working hours alongside full-time cybersecurity studies and independent security training.',
      'Coordinated within a diverse 8–12 person team, developing interpersonal and communication skills for cross-functional collaboration.',
    ],
  },
  {
    date: 'JAN 2025 — MAY 2027',
    title: 'BSc Cyber Security / Computer Forensics & Counterterrorism',
    org: 'University of East London',
    points: [
      'Core modules covering network security, digital forensics, risk management, and cyber law.',
      'Hands-on labs in ethical hacking, OSINT, vulnerability assessment, and incident response.',
      'Active self-directed security research via TryHackMe (80+ rooms) and PortSwigger Web Security Academy.',
    ],
  },
  {
    date: 'APR 2021 — JUN 2023',
    title: '+2, Computer Science',
    org: 'National Infotech Secondary School',
    points: ['Foundation in programming, networking fundamentals, and information systems.'],
  },
  {
    date: 'EARLIER',
    title: 'Secondary Education',
    org: 'Shree Maisthan MA. VI School, Birgunj',
    points: ['Completed secondary education, building foundational academic skills.'],
  },
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2"
      >
        // EXPERIENCE & EDUCATION
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e2e0ff] mb-12"
      >
        My Journey
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

        <div className="space-y-10 pl-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.05 }}
              className="relative"
            >
              {/* Dot */}
              <div className={`absolute -left-12 top-1.5 w-3 h-3 rounded-full border-2 ${item.current ? 'bg-blue-400 border-blue-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]' : 'bg-[#0d1423] border-blue-500/40'}`} />

              <div className="p-5 rounded-xl border border-[#0e1f35] bg-[#0d1423] hover:border-blue-500/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-[#e2e0ff]">{item.title}</h3>
                  <span className="font-mono text-xs text-blue-400 shrink-0">{item.date}</span>
                </div>
                <p className="font-mono text-xs text-[#4b5563] mb-3">{item.org}</p>
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400 mb-3">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> CURRENT
                  </span>
                )}
                <ul className="space-y-1.5">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-sm text-[#8b949e] flex gap-2">
                      <span className="text-blue-500 mt-1 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
