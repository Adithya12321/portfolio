

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import FeaturedProjects from './pages/FeaturedProjects'
import HeroSection from './pages/HeroSection'

import { useScrollSpy } from './hooks/useScrollSpy'

import Skills from './components/Skills'
import Experience from './components/Experience'
import { Toaster } from 'sonner'

function App() {
  const activeSection = useScrollSpy(['home', 'about', 'experience', 'projects', 'contact'], 100);

  return (
    <div className='bg-background min-h-screen text-foreground font-[Inter]'>
      <Toaster position="top-center" richColors />
      <div><Navbar activeSection={activeSection} /></div>
      <div ><HeroSection /></div>
      <div ><Skills /></div>
      <div ><About /></div>
      <div ><Experience /></div>
      <div ><FeaturedProjects /></div>
      {/* <div ><SkillsAndTools /></div> */}
      <div ><Contact /></div>
    </div>
  )
}

export default App
