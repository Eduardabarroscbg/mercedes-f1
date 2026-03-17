import { useNavigate } from 'react-router-dom'

const drivers = [
    {
        id: "russell",
        number: "63",
        name: "George",
        lastname: "Russell",
        country: "🇬🇧 Reino Unido",
        role: "Piloto Principal",
        color: "#00D2BE",
        image: "/images/George_Russell.webp",
    },
    {
        id: "antonelli",
        number: "12",
        name: "Kimi",
        lastname: "Antonelli",
        country: "🇮🇹 Itália",
        role: "Piloto Estreante",
        color: "#ffffff",
        image: "/images/Kimi_Antonelli-2.webp",
    },
]

const Drivers = () => {
    const navigate = useNavigate()

    return (
        <section id="pilotos" className="py-32 bg-black">
            <div className="container mx-auto px-5">

                <div className="text-center mb-20">
                    <p className="text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">Grid 2026</p>
                    <h2 className="text-white font-bold text-4xl md:text-6xl">
                        Nossos <span className="text-[#00D2BE]">Pilotos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {drivers.map((driver) => (
                        <div
                            key={driver.id}
                            onClick={() => navigate(`/piloto/${driver.id}`)}
                            className="relative overflow-hidden group cursor-pointer h-[480px] md:h-[600px]"
                        >
                            <div
                                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                                style={{ background: `linear-gradient(135deg, ${driver.color}44 0%, transparent 60%)` }}
                            />
                            <img
                                src={driver.image}
                                alt={driver.name}
                                className="absolute inset-0 w-full h-full object-cover object-center md:object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <span
                                className="absolute top-8 right-8 font-bold select-none"
                                style={{ fontSize: "160px", lineHeight: 1, color: driver.color, opacity: 0.15 }}
                            >
                                {driver.number}
                            </span>
                            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: driver.color }} />

                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                                <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: driver.color }}>
                                    {driver.role} · {driver.country}
                                </p>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-white/60 font-bold text-2xl">{driver.name}</p>
                                        <h3 className="text-white font-bold text-4xl md:text-6xl leading-none">{driver.lastname}</h3>
                                    </div>
                                    <span className="font-bold text-5xl md:text-6xl" style={{ color: driver.color, opacity: 0.6 }}>
                                        #{driver.number}
                                    </span>
                                </div>
                                <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="px-6 py-2 rounded-full text-sm font-bold border" style={{ borderColor: driver.color, color: driver.color }}>
                                        Ver Perfil →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Drivers