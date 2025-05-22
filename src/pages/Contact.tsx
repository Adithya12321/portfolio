import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen py-[5%]'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
            
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        I'm currently available for freelance work and full-time positions. 
                        If you have a project that you want to get started, think you need my help 
                        with something or just fancy saying hey, then get in touch.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <i className="fas fa-map-marker-alt text-blue-500"></i>
                            </div>
                            <div className="ml-4">
                                <h4 className="font-medium">Location</h4>
                                <p className="text-gray-600 dark:text-gray-300">San Francisco, California</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <i className="fas fa-envelope text-blue-500"></i>
                            </div>
                            <div className="ml-4">
                                <h4 className="font-medium">Email</h4>
                                <p className="text-gray-600 dark:text-gray-300">alex@example.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <i className="fas fa-phone text-blue-500"></i>
                            </div>
                            <div className="ml-4">
                                <h4 className="font-medium">Phone</h4>
                                <p className="text-gray-600 dark:text-gray-300">(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex space-x-4">
                        <a href="#" className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div className="md:w-1/2">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" name="subject" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        
                        <div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact