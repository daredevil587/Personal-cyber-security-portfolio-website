import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const professionalExperience = [
  {
    date: 'APR 2026 — PRESENT',
    title: 'Team Member',
    org: 'Wingstop Restaurants Inc. · London Area, United Kingdom',
    current: true,
    points: [
      'Deliver accurate, timely service in a high-volume environment while maintaining quality and safety standards.',
      'Coordinate across service stations and communicate clearly with colleagues during peak periods.',
      'Prioritise concurrent tasks, respond calmly to changing demands, and resolve customer issues professionally.',
    ],
  },
  {
    date: 'APR 2025 — APR 2026',
    title: 'Crew Member',
    org: 'Sides · London Area, United Kingdom',
    points: [
      'Maintained accuracy across 60–80+ daily orders in a fast-paced customer environment.',
      'Identified process improvements that contributed to a 10–15% reduction in average wait times.',
      'Balanced 20 weekly working hours with full-time cybersecurity study and independent technical training.',
      'Worked within a diverse 8–12 person team, strengthening communication, reliability, and cross-functional coordination.',
    ],
  },
]

const education = [
  {
    date: 'JAN 2025 — MAY 2027',
    title: 'BSc (Hons) Cyber Security',
    org: 'University of East London',
    points: [
      'Expected graduation: May 2027.',
      'Core modules include Network Security, Ethical Hacking, Operating Systems, Secure Software Development, Risk Management, and Compliance Frameworks.',
      'Developing practical skills in Python, SQL, Linux administration, cloud security, security governance, data analysis, and Power BI.',
      'Supplementing university work through TryHackMe and PortSwigger Web Security Academy labs.',
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

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

      <div className="space-y-8 pl-12">
        {items.map((item, i) => (
          <motion.div
            key={`${item.org}-${item.date}`}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <div className={`absolute -left-12 top-1.5 w-3 h-3 rounded-full border-2 ${item.current ? 'bg-blue-400 border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]' : 'bg-[#0d1423] border-blue-500/40'}`} />

            <div className="p-5 rounded-xl border border-[#0e1f35] bg-[#0d1423] hover:border-blue-500/30 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-[#e6edf3]">{item.title}</h3>
                <span className="font-mono text-xs text-blue-400 shrink-0">{item.date}</span>
              </div>
              <p className="font-mono text-xs text-[#6e7681] mb-3">{item.org}</p>
              {item.current && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400 mb-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> CURRENT
                </span>
              )}
              <ul className="space-y-2">
                {item.points.map(point => (
                  <li key={point} className="text-sm text-[#8b949e] flex gap-2 leading-relaxed">
                    <span className="text-blue-500 mt-1 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

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
        className="text-4xl font-black text-[#e6edf3] mb-4"
      >
        Experience & Education
      </motion.h2>

      <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl text-sm leading-relaxed text-[#8b949e]">A record of professional responsibility, academic development, and the practical skills I bring to an entry-level security team.</p>
        <a href="https://www.linkedin.com/in/uttam-yadav-a38200237/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-4 py-2 font-mono text-xs text-blue-300 transition-all hover:border-blue-400 hover:bg-blue-500/10">
          VIEW LINKEDIN <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <section className="mb-14" aria-labelledby="professional-experience-heading">
        <h3 id="professional-experience-heading" className="font-mono text-xs tracking-widest text-[#6e7681] mb-6">01 / PROFESSIONAL EXPERIENCE</h3>
        <Timeline items={professionalExperience} />
      </section>

      <section aria-labelledby="education-heading">
        <h3 id="education-heading" className="font-mono text-xs tracking-widest text-[#6e7681] mb-6">02 / EDUCATION</h3>
        <Timeline items={education} />
      </section>
    </div>
  )
}
