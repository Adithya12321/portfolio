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
              name='AML Transaction Validator'
              imgPath='./fitechImage.webp'
              skills={["Java", "Selenium", "SQL", "Jenkins"]}
              description="Designed and executed automated test suites for a high-volume Anti-Money Laundering (AML) system used by major global banks. Ensured 99.9% data accuracy in transaction monitoring and reduced regression testing time by 40%."
              isPrivate={true}
            />
          </div>
          <div className='h-full'>
            <ProjectCard
              name='GTM Workflow Automation'
              imgPath='./gtm-engineer-card.webp'
              skills={["TypeScript", "RevOps", "Automation", "Node.js"]}
              description="Developing core automation workflows for a B2B Go-To-Market platform. Created complex data pipelines to synchronize customer data across CRM, Marketing, and Sales tools, capable of processing thouands of records per minute."
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