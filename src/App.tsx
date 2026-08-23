import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import FeaturedProjects from './pages/FeaturedProjects'
import HeroSection from './pages/HeroSection'
import Credentials from './components/Credentials'

import { useScrollSpy } from './hooks/useScrollSpy'

import Skills from './components/Skills'
import Experience from './components/Experience'
import { Toaster } from 'sonner'
import { PROFILE } from './lib/profile'

function App() {
  const activeSection = useScrollSpy(['home', 'about', 'experience', 'projects', 'contact'], 100);

  return (
    <div className='bg-background min-h-screen text-foreground font-[Inter]'>
      <Toaster position="top-center" richColors />
      <Navbar activeSection={activeSection} />

      {/* landmark: the page previously had no <main>, so there was nothing to skip to */}
      <main id="content">
        <HeroSection />
        <Skills />
        <About />
        <Experience />
        <Credentials />
        <FeaturedProjects />
        <Contact />
      </main>

      <footer className='border-t border-border/30 py-8 text-center text-sm text-muted-foreground'>
        <p>
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.role}
        </p>
        <p className='mt-2'>
          <a href={PROFILE.github} target='_blank' rel='noopener noreferrer' className='hover:text-brand transition-colors inline-block py-2 px-1'>GitHub</a>
          <span className='mx-2' aria-hidden='true'>·</span>
          <a href={PROFILE.linkedin} target='_blank' rel='noopener noreferrer' className='hover:text-brand transition-colors inline-block py-2 px-1'>LinkedIn</a>
          <span className='mx-2' aria-hidden='true'>·</span>
          <a href={`mailto:${PROFILE.email}`} className='hover:text-brand transition-colors inline-block py-2 px-1'>Email</a>
        </p>
      </footer>
    </div>
  )
}

export default App
