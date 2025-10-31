const HeroSection = () => {
    return(
        <section className="w-full h-60 md:h-80 lg:h-[500px] relative overflow-hidden z-0">
            <img
                src="./pHbot-hero.jpg"
                alt="teste"
                className="w-full h-full object-cover pointer-events-none select-none"
            />
            <div className="absolute inset-0 " />
        </section>
    )
}

export default HeroSection;