

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import FeaturedProjects from './pages/FeaturedProjects'
import HeroSection from './pages/HeroSection'

function App() {
  

  return (
    <div className='bg-[#121212 ] '>
      <div><Navbar /></div>
      <div ><HeroSection /></div>
      <div ><About /></div>
      <div ><FeaturedProjects /></div>
      {/* <div ><SkillsAndTools /></div> */}
      <div ><Contact /></div>
    </div>
  )
}

export default App
