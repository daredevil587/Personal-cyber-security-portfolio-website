import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import CertDetail from './pages/CertDetail'

export default function App() {
  const [page, setPage] = useState('home')
  const [certId, setCertId] = useState(null)

  const navigate = (p, cert = null) => {
    setPage(p)
    setCertId(cert)
    window.scrollTo(0, 0)
  }

  const pages = {
    home: <Home navigate={navigate} />,
    about: <About navigate={navigate} />,
    skills: <Skills />,
    experience: <Experience />,
    projects: <Projects navigate={navigate} />,
    certs: <Certifications navigate={navigate} />,
    contact: <Contact />,
    'cert-detail': <CertDetail certId={certId} navigate={navigate} />,
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] relative">
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
      <Nav page={page} navigate={navigate} />
      <main className="relative z-10">
        {pages[page] || pages.home}
      </main>
    </div>
  )
}
