import { motion } from 'framer-motion'
import { Award, ExternalLink, Lightbulb, Star } from 'lucide-react'

const professionalExperience = [
  {
    date: 'APR 2026 — PRESENT',
    title: 'Team Member',
    org: 'Wingstop Restaurants Inc. · London Area, United Kingdom',
    current: true,
    points: [
      'Work effectively in a high-volume environment, prioritising multiple requests and resolving operational issues under time pressure.',
      'Communicate clearly with colleagues and customers while maintaining accuracy, quality, and safety procedures.',
      'Recognised as Employee of the Month for reliability, teamwork, and performance.',
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

const awards = [
  {
    date: 'APR 2026',
    title: 'Award of Excellence — Idea Pitching Track',
    org: 'UEL Computing Society AI Build-a-Thon',
    icon: Lightbulb,
    points: [
      'Recognised for originality, problem-solving, and the quality of the technology concept presented.',
      'Developed and presented AI-assisted mock-ups and wireframes, then communicated the idea clearly to judges.',
    ],
  },
  {
    date: 'RECOGNITION',
    title: 'Employee of the Month',
    org: 'Wingstop Restaurants Inc.',
    icon: Star,
    points: [
      'Recognised for dependable performance, teamwork, and maintaining standards in a high-pressure service environment.',
    ],
  },
]

const education = [
  {
    date: 'JAN 2025 — JUL 2027',
    title: 'BSc (Hons) Cyber Security and Networks',
    org: 'University of East London',
    points: [
      'Final-year undergraduate; expected graduation: July 2027.',
      'Relevant study includes Cybersecurity, Systems Administration, Data Communications & Networks, Database Systems, Software Development, and Enterprise Architecture & Cloud Computing.',
      'Advanced study includes Cybersecurity & Networks, Business Continuity & Planning, Information Systems Strategy & Management, and Project Management.',
      'Developing practical skills across Windows and Linux administration, networking, Python and PowerShell automation, SQL, security monitoring, vulnerability assessment, cloud security, and governance.',
    ],
  },
  {
    date: 'APR 2021 — JUN 2023',
    title: '+2, Computer Science',
    org: 'National Infotech Secondary School',
    points: ['Built a foundation in programming, mathematics, networking fundamentals, and information systems.'],
  },
  {
    date: 'EARLIER',
    title: 'Secondary Education',
    org: 'Shree Maisthan MA. VI School, Birgunj',
    points: ['Completed secondary education and developed core academic skills.'],
  },
]

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />
      <div className="space-y-8 pl-12">
        {items.map(item => (
          <motion.div
            key={`${item.org}-${item.date}`}
            className="relative"
          >
            <div className={`absolute -left-12 top-1.5 w-3 h-3 rounded-full border-2 ${item.current ? 'bg-blue-400 border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]' : 'bg-[#111827] border-blue-500/40'}`} />
            <div className="p-5 rounded-xl border border-[#1f2937] bg-[#111827] hover:border-blue-500/30 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-[#e5e7eb]">{item.title}</h3>
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

function AwardsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {awards.map(award => {
        const Icon = award.icon
        return (
          <motion.article
            key={award.title}
            className="p-5 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-[#111827]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/25 bg-amber-500/10 text-amber-300">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-amber-300">{award.date}</span>
            </div>
            <h4 className="font-bold text-[#e5e7eb] mb-1">{award.title}</h4>
            <p className="font-mono text-xs text-[#8b949e] mb-3">{award.org}</p>
            <ul className="space-y-2">
              {award.points.map(point => (
                <li key={point} className="text-sm text-[#8b949e] flex gap-2 leading-relaxed">
                  <Award size={13} className="mt-1 shrink-0 text-amber-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        )
      })}
    </div>
  )
}

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        className="font-mono text-xs text-blue-400 tracking-widest mb-2">
        // EXPERIENCE, AWARDS & EDUCATION
      </motion.p>
      <motion.h2
        className="text-3xl sm:text-4xl font-black text-[#e5e7eb] mb-4">
        Experience & Recognition
      </motion.h2>

      <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl text-sm leading-relaxed text-[#8b949e]">
          Professional responsibility, external recognition, and academic development—evidence that I can solve problems, communicate clearly, and perform reliably.
        </p>
        <a href="https://www.linkedin.com/in/uttam-yadav-a38200237/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 px-4 py-2 font-mono text-xs text-blue-300 transition-all hover:border-blue-400 hover:bg-blue-500/10">
          VIEW LINKEDIN <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <section className="mb-14" aria-labelledby="professional-experience-heading">
        <h3 id="professional-experience-heading" className="font-mono text-xs tracking-widest text-[#6e7681] mb-6">01 / PROFESSIONAL EXPERIENCE</h3>
        <Timeline items={professionalExperience} />
      </section>

      <section className="mb-14" aria-labelledby="awards-heading">
        <h3 id="awards-heading" className="font-mono text-xs tracking-widest text-[#6e7681] mb-6">02 / AWARDS & HACKATHONS</h3>
        <AwardsGrid />
      </section>

      <section aria-labelledby="education-heading">
        <h3 id="education-heading" className="font-mono text-xs tracking-widest text-[#6e7681] mb-6">03 / EDUCATION</h3>
        <Timeline items={education} />
      </section>
    </div>
  )
}
