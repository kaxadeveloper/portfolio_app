import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a passionate Full-Stack JavaScript Developer with over three years of professional experience building modern, scalable, and user-focused web applications. My expertise spans JavaScript, TypeScript, React.js, Next.js, and Node.js, allowing me to develop both intuitive front-end interfaces and robust back-end solutions. I enjoy transforming complex ideas into clean, efficient, and maintainable code that delivers real value to users and businesses.
                            </p>
                            <p>
                                Throughout my career, I have worked on a variety of projects ranging from responsive websites and interactive dashboards to full-stack applications. I focus on writing high-quality code, following best practices, and creating seamless user experiences. My experience with modern development tools, component-based architectures, API integrations, and performance optimization enables me to build applications that are fast, reliable, and easy to scale.
                            </p>
                            <p>
                                I am continuously learning and staying up to date with the latest technologies and industry trends. I enjoy solving challenging problems, collaborating with teams, and contributing to projects that make a meaningful impact. Whether working independently or as part of a development team, I am committed to delivering high-quality solutions and continuously improving my skills as a software engineer.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to transform ideas into powerful digital products that are fast, intuitive, and meaningful—creating experiences that delight users, drive business value, and stand the test of time through clean, maintainable code."
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}