import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'

/**
 * nRev.ai systems are described at capability and outcome level only - no internal
 * architecture, repo names or screenshots.
 */
const projects = [
  {
    name: 'Autonomous Test-Healing System',
    company: 'nRev.ai',
    skills: ['TypeScript', 'Playwright', 'AI Agents', 'GitHub Actions'],
    description:
      'Automation that repairs itself. It runs the suite, judges whether each failure is a real defect or flakiness, and when a UI or locator change is the cause, dispatches AI agents to fix it and open a pull request. The output is a reviewable fix, not a failure report.',
    isPrivate: true,
  },
  {
    name: 'AI Bug-Reporting Pipeline',
    company: 'nRev.ai',
    skills: ['TypeScript', 'AI Agents', 'Playwright MCP'],
    description:
      'A reporting layer that captures network activity and root-cause analysis at the moment of failure and files it straight into a ticket, cutting the triage round-trip between QA and developers.',
    isPrivate: true,
  },
  {
    name: 'Node Test Architecture',
    company: 'nRev.ai',
    imgPath: './gtm-engineer-card.webp',
    skills: ['TypeScript', 'Playwright', 'Automation', 'React'],
    description:
      'A createNodeTest() factory that collapsed the boilerplate needed to cover 50+ workflow node types, making same-day automation for newly shipped features practical. Contributed to a 40% reduction in total suite runtime alongside parallelisation work.',
    isPrivate: true,
  },
  {
    name: 'HotScan360',
    company: 'CGI',
    imgPath: './fitechImage.webp',
    skills: ['Selenium', 'SQL', 'JIRA', 'Manual Testing'],
    description:
      'Quality assurance for an anti-money-laundering platform used by major global banks for financial crime monitoring and big-data fraud analysis. Personally surfaced roughly 40% of all bugs the team found during release cycles.',
    isPrivate: true,
  },
  {
    name: 'FocusFlowTimer',
    company: 'Personal',
    imgPath: './focusFlowTimer.webp',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    description:
      'A personal productivity tool built with modern React patterns, offering customisable work/break intervals, audio notifications, and a clean glassmorphic UI. Open sourced.',
    gitHubLink: 'https://github.com/Adithya12321/FocusFlowTimer',
    liveDemoLink: 'https://focus-flow-timer-spg2y14d6-adithyas-projects-6b3fc28c.vercel.app',
  },
]

const FeaturedProjects = () => {
  return (
    <section id='projects'>
      <div className='px-6 sm:px-[10%] lg:px-[15%] py-24 w-full bg-background text-foreground'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 gradient-text text-brand'>Featured Projects</h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Enterprise work is described by capability and outcome. The internals stay with the employer.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((p) => (
            <div key={p.name} className='h-full'>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

        <div className='flex justify-center pt-12'>
          <a href='https://github.com/Adithya12321?tab=repositories' target='_blank' rel='noopener noreferrer'>
            <Button className='bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8'>View More Projects</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
