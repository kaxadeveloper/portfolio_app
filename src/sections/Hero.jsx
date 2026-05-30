export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
            </div>
        </section>
    )
}