import { Award, GraduationCap } from 'lucide-react'

const awards = [
    { title: 'Silver Award', org: 'CGI', reason: 'Streamlining JIRA project structures and improving team workflow efficiency.' },
    { title: 'Bronze Award', org: 'CGI', reason: 'Handling complex, high-impact test cases beyond expected productivity levels.' },
]

const education = [
    { degree: 'B.Tech, Electronics & Communication Engineering', school: 'IIIT Tiruchirappalli', period: '2019 - 2023' },
]

const Credentials = () => {
    return (
        <section id='credentials' className='py-24 bg-background text-foreground'>
            <div className='max-w-4xl mx-auto px-6 sm:px-8 grid gap-12 md:grid-cols-2'>
                <div>
                    <h2 className='flex items-center gap-2 text-2xl font-bold mb-6 text-brand'>
                        <Award size={22} aria-hidden='true' /> Recognition
                    </h2>
                    <ul className='space-y-5'>
                        {awards.map((a) => (
                            <li key={a.title}>
                                <p className='font-semibold'>{a.title} <span className='text-muted-foreground font-normal'>· {a.org}</span></p>
                                <p className='text-sm text-muted-foreground leading-relaxed mt-1'>{a.reason}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className='flex items-center gap-2 text-2xl font-bold mb-6 text-brand'>
                        <GraduationCap size={22} aria-hidden='true' /> Education
                    </h2>
                    <ul className='space-y-5'>
                        {education.map((e) => (
                            <li key={e.school}>
                                <p className='font-semibold'>{e.degree}</p>
                                <p className='text-sm text-muted-foreground mt-1'>{e.school} · {e.period}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Credentials
