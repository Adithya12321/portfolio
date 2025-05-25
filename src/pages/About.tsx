
const About = () => {
  return (
    <section id='about' className=''>
    <div className='px-[15%] py-[10%] w-full h-screen text-[#E2E8F0] bg-[#1A202C] '>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-[#63B3ED]">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                {/* <div className="md:w-1/3 mb-8 md:mb-0">
                    <div className="rounded-lg overflow-hidden shadow-lg w-full h-full">
                        <BubbleBackground className='opacity-30 -z-1' interactive={true} colors={{ first: '18,113,255', second: '18,113,255', third: '18,113,255', fourth: '18,113,255', fifth: '18,113,255', sixth: '18,113,255', }} />
                    </div>
                </div> */}
                <div className="md:w-2/3 md:pl-12">
                    <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                    <p className=" dark:text-gray-300 mb-6 leading-relaxed">
                        I'm a frontend developer focused on building clean, responsive, and scalable web applications using React,
                        TypeScript, and modern UI frameworks. I enjoy turning real-world problems into user-friendly solutions, with
                        an emphasis on performance and maintainability.
                    </p>
                    <p className=" dark:text-gray-300 mb-6 leading-relaxed">
                        With a background in QA and automation testing, I bring a quality-first mindset to development. This allows
                        me to write robust code, anticipate edge cases, and ensure smooth, issue-free deployments — combining
                        development efficiency with long-term stability.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                            <span>Hyderabas, India</span>
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
                {/* <div className="md:w-1/3 mb-8 md:mb-0">
                    <div className="rounded-lg overflow-hidden shadow-lg w-full h-full">
                        <BubbleBackground className='opacity-30 -z-1' interactive={true} colors={{ first: '18,113,255', second: '18,113,255', third: '18,113,255', fourth: '18,113,255', fifth: '18,113,255', sixth: '18,113,255', }} />
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </section>
  )
}

export default About