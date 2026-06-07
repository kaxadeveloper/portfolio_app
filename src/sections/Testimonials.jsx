const testimonials = [
    {
        quote:
            "Working with CodingMaster was an outstanding experience. He consistently delivered high-quality, scalable solutions and transformed complex requirements into clean, user-friendly applications.",
        author: "David Mitchell",
        role: "Project Manager",
        avatar: "/avatars/avatar1.png",
    },
    {
        quote:
            "CodingMaster's expertise in React, Next.js, and modern JavaScript development helped our team build faster and maintain cleaner code. His attention to detail and problem-solving skills stood out.",
        author: "Sarah Johnson",
        role: "Senior Frontend Developer",
        avatar: "/avatars/avatar2.png",
    },
    {
        quote:
            "From planning to deployment, CodingMaster demonstrated professionalism and technical excellence. He communicates effectively and always looks for the best solution for both users and the business.",
        author: "Michael Carter",
        role: "Tech Lead",
        avatar: "/avatars/avatar3.png",
    },
    {
        quote:
            "CodingMaster combines strong technical skills with a great understanding of user experience. His ability to build performant, maintainable web applications makes him a valuable developer on any team.",
        author: "Emily Rodriguez",
        role: "Product Designer",
        avatar: "/avatars/avatar4.avif",
    },
];

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10"
            >
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What People Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Kind words from{" "}
                        <span className="font-serif italic font-normal text-white">
                            amazing people.
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    )
};