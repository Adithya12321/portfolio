import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'

const FeaturedProjects = () => {
  const bgColour = "bg-[#1A202C]"
  const textColour = "text-[#E2E8F0]"
  // const accentColour = "[#63B3ED]"
  // const secondary = "[#2D3748]"
  let text = "View More Projects"

  return (
    <section id='projects'>
    <div className={`px-[15%] py-[5%] h-screen w-full ${bgColour} ${textColour} `}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-[#63B3ED]">Featured Projects</h2>
      <div className='flex gap-x-10 h-auto'>
        <div className='border rounded-xl flex-1 hover:-translate-y-1 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]'>
          <ProjectCard name='FocusFlowTimer' imgPath='./focusFlowTimer.png' skills={["React", "TypeScript", "Tailwindcss"]} description="This Pomodoro Timer application is designed to help users manage their time effectively by alternating between work and break sessions. The timer is built using modern web technologies like React and Tailwind CSS, ensuring a smooth and responsive user experience." gitHubLink = "https://github.com/Adithya12321/FocusFlowTimer" liveDemoLink = "https://focus-flow-timer-spg2y14d6-adithyas-projects-6b3fc28c.vercel.app" />
        </div>
        <div className='border rounded-xl flex-1 hover:-translate-y-1 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]'>
          <ProjectCard name='publicHolidays' imgPath='./publicHoliday.png' skills={["React", "API"]} description="The app allows you to select a country and view its public holidays for the year 2025, using data from the Open Holidays API. It demonstrates the use of React hooks, API integration, and dynamic UI updates." gitHubLink = "https://github.com/Adithya12321/Public-holidays-app" liveDemoLink = "https://public-holidays-app.vercel.app/" />
        </div>
        <div className='border rounded-xl flex-1 hover:-translate-y-1 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]'>
          <ProjectCard name='randomQuoteGenerator' imgPath='./randomQuoteGenerator.png' skills={["React", "API"]} description="The Random Quote Generator is an interactive web page that displays inspirational quotes fetched from an external API.The page is designed with a clean and responsive layout, ensuring a seamless user experience." gitHubLink = "https://github.com/Adithya12321/random-quotes-generator" liveDemoLink = "https://random-quotes-generator-eta.vercel.app/" />
        </div>
      </div>
      <div className='flex justify-center py-[5%]'>
        <a href="https://github.com/Adithya12321?tab=repositories"><Button variant="outline" className='mr-2 bg-[#63B3ED] !text-[#1A202C]'>{text}</Button></a>
      </div>     
    </div>
    </section>
  )
}

export default FeaturedProjects