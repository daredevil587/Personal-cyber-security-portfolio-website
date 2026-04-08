import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Target, Download } from 'lucide-react'

const links = [
  { icon: Mail, label: 'EMAIL', value: 'yadavuttam587@gmail.com', href: 'mailto:yadavuttam587@gmail.com' },
  { icon: Phone, label: 'PHONE', value: '07771 844 582', href: 'tel:07771844582' },
  { icon: Linkedin, label: 'LINKEDIN', value: 'linkedin.com/in/uttam-yadava38200237', href: 'https://www.linkedin.com/in/uttam-yadava38200237' },
  { icon: Target, label: 'TRYHACKME', value: '80+ Rooms Completed · Active Profile', href: 'https://tryhackme.com/p/yadavuttam5788' },
]

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2"
      >
        // CONTACT
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e2e0ff] mb-4"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="text-[#8b949e] mb-10 max-w-xl"
      >
        I'm actively looking for Cyber Risk Internships, SOC Analyst roles, Cloud Security Placements, and Technology Risk Graduate Programmes. Available from July 2026. Based in London, UK.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(124,58,237,0.5)' }}
            className="flex items-center gap-4 p-5 rounded-xl border border-[#0e1f35] bg-[#0d1423] transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <link.icon size={18} />
            </div>
            <div>
              <p className="font-mono text-xs text-[#4b5563] tracking-wider">{link.label}</p>
              <p className="text-sm text-[#e2e0ff]">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="./cv.html"
        target="_blank"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm tracking-wider rounded-xl transition-all duration-200 border border-blue-400/30"
      >
        <Download size={16} /> DOWNLOAD CV (PDF)
      </motion.a>
    </div>
  )
}
