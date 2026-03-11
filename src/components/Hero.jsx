import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
    useGSAP(() => {
        gsap.from(".hero-tag", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
        gsap.from(".hero-title", { y: 100, opacity: 0, duration: 1.5, delay: 0.2, ease: "power3.out" })
        gsap.from(".hero-subtitle", { y: 50, opacity: 0, duration: 1.5, delay: 0.4, ease: "power3.out" })
        gsap.from(".hero-btn", { y: 30, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" })
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="equipe" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001a18] to-black" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

            <div className="relative z-10 text-center px-5">
                <p className="hero-tag text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-6">
                    Fórmula 1 — Temporada 2026
                </p>
                <h1 className="hero-title text-white font-bold text-6xl md:text-8xl leading-tight">
                    Mercedes-AMG
                    <br />
                    <span className="text-[#00D2BE]">Petronas</span>
                </h1>
                <p className="hero-subtitle text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto">
                    Construída para vencer. Projetada para o futuro.
                </p>

                <div className="hero-btn flex items-center justify-center gap-4 mt-10">
                    <button
                        onClick={() => scrollTo("car-viewer")}
                        className="bg-[#00D2BE] text-black font-bold px-8 py-3 rounded-full text-lg hover:bg-white transition-colors duration-300"
                    >
                        Explorar o Carro
                    </button>
                    <button
                        onClick={() => scrollTo("dashboard")}
                        className="border border-white/30 text-white font-bold px-8 py-3 rounded-full text-lg hover:border-[#00D2BE] hover:text-[#00D2BE] transition-colors duration-300"
                    >
                        Ver Campeonato
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero