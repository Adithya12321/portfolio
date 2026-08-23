import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { PROFILE, yearsOfExperience } from '@/lib/profile'

const stats = [
  { value: '0', label: 'Critical bugs in public launch' },
  { value: `${yearsOfExperience()}+`, label: 'Years experience' },
  { value: '40%', label: 'Faster automation suite' },
]

const HeroSection = () => {
  const handelClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id='home'>
      <div className='px-6 sm:px-[10%] lg:px-[15%] py-24 lg:py-[10%] w-full min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-background to-background'>
        {/* stacks on phones - previously stayed two-column and squeezed the intro to ~190px */}
        <div className='w-full h-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8'>
          <div className='flex-1 flex flex-col justify-center w-full'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight'>
              Hi, I'm <span className='text-brand dark:drop-shadow-[0_0_15px_var(--brand)]'>Adithya</span>
            </h1>
            <p className='text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground'>
              {PROFILE.role} <span className='text-brand/70'>·</span> {PROFILE.tagline}
            </p>
            <p className='text-base md:text-lg mb-8 max-w-xl text-muted-foreground leading-relaxed'>
              Sole QA owner through a high-stakes public launch, with zero critical bugs reaching
              production. I build test systems that fix themselves: autonomous healing agents,
              AI-driven root-cause analysis, and suites that run 40% faster.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8' onClick={() => handelClick('contact')}>
                Hire Me
              </Button>
              <Button variant='outline' className='border-brand text-brand hover:bg-brand/10 h-11 px-8' onClick={() => handelClick('projects')}>
                View Projects
              </Button>
              <a href={PROFILE.resume} download>
                <Button variant='ghost' className='h-11 px-6 text-muted-foreground hover:text-brand gap-2'>
                  <Download size={18} aria-hidden='true' /> Résumé
                </Button>
              </a>
            </div>

            <dl className='mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-border/50 pt-8 max-w-xl'>
              {stats.map((s) => (
                <div key={s.label} className='flex flex-col'>
                  <dt className='sr-only'>{s.label}</dt>
                  <dd className='contents'>
                    <span className='text-2xl sm:text-3xl font-bold text-brand'>{s.value}</span>
                    <span className='text-xs sm:text-sm text-muted-foreground leading-snug mt-1'>{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='flex-1 flex justify-center items-center lg:px-[10%] drop-shadow-[0_0_50px_rgba(99,179,237,0.18)] dark:drop-shadow-[0_0_50px_rgba(99,179,237,0.4)]'>
            <img
              src='/profilePicture.webp'
              alt='Adithya Venkatesh, SDET'
              width={900}
              height={600}
              fetchPriority='high'
              className='rounded-4xl w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
