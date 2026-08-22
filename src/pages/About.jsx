import { motion } from 'framer-motion'

const info = [
  { label: 'LOCATION', value: 'London, United Kingdom' },
  { label: 'DEGREE', value: 'BSc (Hons) Cyber Security and Networks · UEL · Jul 2027' },
  { label: 'FOCUS', value: 'Security Operations · Infrastructure · Cloud Security' },
  { label: 'PROJECTS', value: '6 public GitHub builds · 4 live demos' },
  { label: 'TRYHACKME', value: '80+ Rooms Completed' },
  { label: 'AVAILABILITY', value: 'Open to graduate and entry-level opportunities' },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-28">
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-mono text-xs text-blue-400 tracking-widest mb-2">
        // ABOUT ME
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-4xl font-black text-[#e6edf3] mb-10">
        Who I Am
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-[#8b949e] leading-relaxed"
        >
          <p>
            I’m a final-year BSc (Hons) Cyber Security and Networks student at the University of East London, graduating in July 2027. My work spans Windows and Linux administration, networking, security monitoring, vulnerability assessment, databases, cloud security, and technical troubleshooting.
          </p>
          <p>
            I learn by building. My public projects include an AI-assisted SOC phishing detector, a NIST-mapped GRC risk register, the GeneriQ medicine data platform, privacy-first browser document tools, an adaptive maze game, and a voice-controlled music player.
          </p>
          <p>
            My lab work covers Splunk investigations, PCAP analysis, Snort detection rules, Nmap and OpenVAS assessment, Burp Suite testing, Windows Server infrastructure, Active Directory, DNS, DHCP, SQL, and Linux user automation.
          </p>
          <p>
            I received the Award of Excellence in the Idea Pitching Track at the UEL Computing Society AI Build-a-Thon for originality, problem-solving, and technology communication. I have also been recognised as Employee of the Month at Wingstop.
          </p>
          <p>
            Alongside university, hospitality work has strengthened my prioritisation, reliability, teamwork, and ability to communicate clearly under pressure. I’m targeting graduate and entry-level roles across cybersecurity, security operations, infrastructure, cloud, and technical engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {info.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
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
