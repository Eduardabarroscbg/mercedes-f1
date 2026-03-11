import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const stats = [
    { value: "340", unit: "km/h", label: "Velocidade Máxima" },
    { value: "1.8", unit: "s", label: "0 a 100 km/h" },
    { value: "1000", unit: "cv", label: "Potência Total" },
    { value: "798", unit: "kg", label: "Peso Mínimo" },
]

const Performance = () => {
    useGSAP(() => {
        gsap.from(".stat-card", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#performance",
                start: "top center",
            },
        })

        gsap.from(".perf-title", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#performance",
                start: "top center",
            },
        })
    }, [])

    return (
        <section id="performance" className="py-32 flex flex-col items-center gap-20 bg-black">

            <div className="text-center px-5">
                <p className="perf-title text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">
                    Especificações Técnicas
                </p>
                <h2 className="perf-title text-white font-bold text-4xl md:text-6xl">
                    Números que
                    <br />
                    <span className="text-[#00D2BE]">impressionam.</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto px-5">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="stat-card bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:border-[#00D2BE]/50 transition-colors duration-300"
                    >
                        <span className="text-[#00D2BE] font-bold text-5xl md:text-6xl">
                            {stat.value}
                        </span>
                        <span className="text-white font-bold text-2xl">
                            {stat.unit}
                        </span>
                        <span className="text-white/50 text-sm mt-3 text-center">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Performance