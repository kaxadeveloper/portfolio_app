const projects = [
    {
        title: "Fintech Dashboard",
        description:
            "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "/projects/project1.webp",
        tags: ["React", "Tailwind", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce solution with inventory management and payment methods.",
        image: "/projects/project2.jpeg",
        tags: ["React", "tailwindcss", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "AI Writing Assistant",
        description:
            "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "/projects/project3.jpg",
        tags: ["React", "tailwindcss", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "Project Management Tool",
        description:
            "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "/projects/project4.webp",
        tags: ["React", "tailwindcss", "NodeJS"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span>Featured Work</span>
                    <h2>
                        Projects that
                        <span> make an impact.</span>
                    </h2>
                </div>
            </div>
        </section>
    );
};