import { motion } from 'framer-motion'

const info = [
  { label: 'LOCATION', value: 'London, United Kingdom' },
  { label: 'DEGREE', value: 'BSc (Hons) Cyber Security · UEL · 2027' },
  { label: 'AVAILABILITY', value: 'Open to opportunities' },
  { label: 'TRYHACKME', value: '80+ Rooms Completed' },
  { label: 'EMAIL', value: 'yadavuttam587@gmail.com' },
  { label: 'PHONE', value: '07771 844 582' },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2"
      >
        // ABOUT ME
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e6edf3] mb-10"
      >
        Who I Am
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="space-y-4 text-[#8b949e] leading-relaxed"
        >
          <p>I'm a BSc (Hons) Cyber Security undergraduate at the University of East London, graduating in 2027. My studies cover network security, ethical hacking, secure software development, operating systems, risk management, and compliance frameworks.</p>
          <p>I build practical security projects, including a deployed AI-powered phishing detection dashboard that combines rule-based analysis with machine learning for SOC-style email triage.</p>
          <p>I've completed employer-designed simulations with Deloitte Australia and AIG covering MITRE ATT&CK threat classification, IAM access control, log analysis, ransomware vulnerability research, and stakeholder-ready reporting.</p>
          <p>On TryHackMe I've completed 80+ rooms covering cloud and operational risk, incident tracking, network security, and structured vulnerability documentation — each sharpening my analytical instincts.</p>
          <p>I'm actively working through PortSwigger Web Security Academy labs, focusing on web application exploitation. I've solved multiple file path traversal labs using Burp Suite — including absolute path bypass, non-recursive stripping bypass, and URL-encoding evasion.</p>
          <p>Alongside my studies, I work in high-pressure hospitality environments where I have strengthened my communication, prioritisation, reliability, and ability to stay calm when demands change quickly.</p>
          <p>I'm open to SOC, cyber risk, cloud security, and technology risk opportunities in London where I can contribute, keep learning, and grow into a dependable security professional.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {info.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-[#0e1f35] bg-[#0d1423] hover:border-blue-500/30 transition-colors"
            >
              <span className="font-mono text-xs text-blue-400 tracking-widest w-28 shrink-0 mt-0.5">{item.label}</span>
              <span className="text-[#e6edf3] text-sm">{item.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
