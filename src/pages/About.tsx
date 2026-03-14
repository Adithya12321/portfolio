
const About = () => {
    return (
        <section id='about' className=''>
            <div className='px-[15%] py-[10%] w-full min-h-screen text-foreground bg-background '>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-[#63B3ED]">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-2/3 md:pl-12">
                            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                             <p className=" dark:text-gray-300 mb-6 leading-relaxed">
                                 I am a Software Engineer with over 2.5 years of experience specializing in leveraging AI-assisted development workflows to accelerate test scaling.
                                 Currently, I work at <strong>nRev.ai</strong>, building scalable E2E test architectures and contributing significantly to frontend development.
                             </p>
                             <p className=" dark:text-gray-300 mb-6 leading-relaxed">
                                 Previously, I worked at <strong>CGI</strong> as a QA Engineer for 2+ years, where I handled critical Anti-Money Laundering (AML)
                                 applications like <strong>HotScan360</strong> for major global banks. My recent work includes contributing 100+ production commits
                                 to complex Next.js applications and debugging state flow issues in Zustand and React Flow.
                             </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                                    <span>Hyderabad, India</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-blue-500 mr-2"></i>
                                    <span>adithyavenkatesh00@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-blue-500 mr-2"></i>
                                    <span>8247207533</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About