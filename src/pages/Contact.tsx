import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MapPinned, Phone } from 'lucide-react'

const Contact = () => {

  return (
    <section id='contact'>
    <div className='h-screen py-[5%] bg-[#1A202C] text-[#E2E8F0]'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-[#63B3ED]">Get In Touch</h2>
            
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-6"></h3>
                    <p className=" mb-8 leading-relaxed">
                        I'm currently available for freelance work and full-time positions. 
                        If you have a project that you want to get started, think you need my help 
                        with something or just fancy saying hey, then get in touch.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full  flex items-center justify-center">
                                <MapPinned className=' '/>
                            </div>
                            <div className="ml-4">
                                <h4 className="font-medium">Location</h4>
                                <p className="">India</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full  flex items-center justify-center">
                                <Mail />
                            </div>
                            <div className="ml-4">
                                <h4 className="font-medium">Email</h4>
                                <p className="">adithyavenkatesh00@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full  flex items-center justify-center">
                                <Phone />
                            </div>
                            <div className="ml-4">
                                <h4 className="font-medium">Phone</h4>
                                <p className="">8247207533</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex space-x-4">
                        <a href="https://github.com/Adithya12321" className="h-10 w-10 rounded-full flex items-center justify-center  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/in/adithya-venkatesh-pithani-5bb4602aa/" className="h-10 w-10 rounded-full  flex items-center justify-center  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <Linkedin />
                        </a>
                        {/* <a href="#" className="h-10 w-10 rounded-full  flex items-center justify-center  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <Twitter />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full  flex items-center justify-center  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <Instagram />
                        </a> */}
                    </div>
                </div>
                
                <div className="md:w-1/2">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium ">Subject</label>
                            <input type="text" id="subject" name="subject" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium ">Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        
                        <div>
                            <Button variant="outline" className='mr-2 w-full bg-[#63B3ED] !text-[#1A202C]'>Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact