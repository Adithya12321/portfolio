import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, MapPinned, Phone, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'


const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData.entries());

        // Basic validation
        if (!values.name || !values.email || !values.subject || !values.message) {
            toast.error("Please fill in all fields.");
            return;
        }

        setIsSubmitting(true);

        // Use environment variables for EmailJS credentials
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                toast.success("Message sent successfully! I'll get back to you soon.");
                formRef.current?.reset();
            }, (error) => {
                console.error(error);
                toast.error("Failed to send message. Please try again later.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id='contact'>
            <div className='min-h-screen py-[5%] bg-background text-foreground'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-primary">Get In Touch</h2>

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
                            <p className=" mb-8 leading-relaxed text-muted-foreground">
                                I'm currently available for freelance work and full-time positions.
                                If you have a project that you want to get started, think you need my help
                                with something or just fancy saying hey, then get in touch.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center">
                                        <MapPinned className='text-primary' />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-medium">Location</h4>
                                        <p className="text-muted-foreground">India</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center">
                                        <Mail className='text-primary' />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-muted-foreground">adithyavenkatesh00@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center">
                                        <Phone className='text-primary' />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-medium">Phone</h4>
                                        <p className="text-muted-foreground">8247207533</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex space-x-4">
                                <a href="https://github.com/Adithya12321" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors duration-300">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/adithya-venkatesh-pithani-5bb4602aa/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors duration-300">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                    <input type="text" id="subject" name="subject" className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Project Inquiry" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Your message here..."></textarea>
                                </div>

                                <div>
                                    <Button type="submit" className='w-full bg-primary text-primary-foreground hover:bg-primary/90' disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
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