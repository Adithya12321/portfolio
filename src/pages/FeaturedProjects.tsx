import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'

const FeaturedProjects = () => {
  let text = "View More Projects"

  return (
    <section id='projects'>
      <div className={`px-[15%] py-[5%] min-h-screen w-full bg-background text-foreground `}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-[#63B3ED]">Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='h-full'>
            <ProjectCard
              name='HotScan360 (CGI)'
              imgPath='./fitechImage.webp'
              skills={["Java", "Selenium", "SQL", "Jenkins"]}
              description="Designed and executed automated test suites for HotScan360, a high-volume Anti-Money Laundering (AML) system used by major global banks. Ensured high precision in transaction monitoring and reduced regression testing time by 40%."
              isPrivate={true}
            />
          </div>
          <div className='h-full'>
            <ProjectCard
              name='Node Test Architecture (NurtureV)'
              imgPath='./gtm-engineer-card.webp'
              skills={["TypeScript", "Playwright", "Automation", "React"]}
              description="Architected a scalable E2E test framework using a createNodeTest() factory to automate 50+ diverse workflow nodes. Significantly reduced boilerplate and accelerated test scaling for complex AI-driven workflows."
              isPrivate={true}
            />
          </div>
          <div className='h-full'>
            <ProjectCard
              name='FocusFlowTimer'
              imgPath='./focusFlowTimer.png'
              skills={["React", "TypeScript", "Tailwind CSS"]}
              description="A personal productivity tool built with modern React patterns. Features include customizable work/break intervals, audio notifications, and a clean glassmorphic UI. Open sourced on GitHub."
              gitHubLink="https://github.com/Adithya12321/FocusFlowTimer"
              liveDemoLink="https://focus-flow-timer-spg2y14d6-adithyas-projects-6b3fc28c.vercel.app"
            />
          </div>
        </div>
        <div className='flex justify-center py-[5%]'>
          <a href="https://github.com/Adithya12321?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button className='bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8'>{text}</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects