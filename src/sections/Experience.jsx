const experiences = [
    {
        period: "2024 - Present",
        role: "Full-Stack JavaScript Developer",
        company: "Freelance",
        description:
            "Building modern web applications for clients using React, Next.js, TypeScript, and Node.js. Developing responsive user interfaces, REST APIs, and scalable backend services while focusing on performance and user experience.",
        technologies: "React, Next.js, TypeScript, Node.js, Express, MongoDB",
        current: true,
    },
    {
        period: "2023 - 2024",
        role: "React.js Developer",
        company: "Tech Solutions",
        description:
            "Developed and maintained dynamic web applications, implemented reusable UI components, integrated REST APIs, and collaborated with designers and backend developers to deliver high-quality products.",
        technologies: "React.js, JavaScript, Redux, Tailwind CSS, REST API",
        current: false,
    },
    {
        period: "2022 - 2023",
        role: "Frontend Developer",
        company: "Digital Agency",
        description:
            "Created responsive websites and interactive user interfaces while optimizing application performance and ensuring cross-browser compatibility. Worked closely with clients to deliver custom solutions.",
        technologies: "HTML, CSS, JavaScript, React.js, Bootstrap",
        current: false,
    },
    {
        period: "2021 - 2022",
        role: "Junior Web Developer",
        company: "Self-Employed",
        description:
            "Started my professional journey by building personal and client projects, mastering modern JavaScript development, and gaining hands-on experience with frontend and backend technologies.",
        technologies: "JavaScript, React.js, Node.js, Express, Git",
        current: false,
    },
];

export const Experience = () => {
    return (
        <section
            id="experience"
            className="py-32 relative overflow-hidden"
        >
            <div
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
                    >
                        Experience that <span> speaks volumes.</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}