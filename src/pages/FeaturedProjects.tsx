
import { TypingText } from '@/components/animate-ui/text/typing';
import { Button } from '@/components/ui/button';


const FeaturedProjects = () => {
  
  

  return (
    <section id="projects">
      <div className="w-full h-screen p-20">
        <Button> Click me</Button>
        <TypingText text="Hello world!" className='text-white' loop={true} />
      </div>
    </section>
  )
}

export default FeaturedProjects