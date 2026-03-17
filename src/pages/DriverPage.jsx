import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const driversData = {
    russell: {
        number: "63",
        name: "George",
        lastname: "Russell",
        country: "🇬🇧 Reino Unido",
        role: "Piloto Principal",
        color: "#00D2BE",
        image: "/images/George_Russell.webp",
        born: "15 de Fevereiro, 1998",
        hometown: "King's Lynn, Inglaterra",
        debut: "2019",
        bio: "George Russell é um dos pilotos mais talentosos da sua geração. Após provar seu valor na Williams, foi contratado pela Mercedes em 2022. Em 2026, assume o papel de líder absoluto da equipe.",
        stats: [
            { label: "Vitórias", value: "6" },
            { label: "Pódios", value: "25" },
            { label: "Poles", value: "8" },
            { label: "Pontos", value: "+1000" },
        ]
    },
    antonelli: {
        number: "12",
        name: "Kimi",
        lastname: "Antonelli",
        country: "🇮🇹 Itália",
        role: "Piloto Estreante",
        color: "#ffffff",
        image: "/images/Kimi_Antonelli-2.webp",
        born: "25 de Agosto, 2006",
        hometown: "Bolonha, Itália",
        debut: "2025",
        bio: "Um dos pilotos mais jovens a competir pela Mercedes na Fórmula 1. Kimi Antonelli chegou à F1 em 2025 com apenas 18 anos, mostrando um talento excepcional e maturidade surpreendente.",
        stats: [
            { label: "Vitórias", value: "0" },
            { label: "Pódios", value: "4" },
            { label: "Poles", value: "0" },
            { label: "Pontos", value: "168" },
        ]
    }
}

const DriverPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const driver = driversData[id]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useGSAP(() => {
        gsap.from(".driver-photo", {
            x: -100, opacity: 0, duration: 1, ease: "power3.out",
        })
        gsap.from(".driver-info", {
            x: 100, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out",
        })
        gsap.from(".stat-item", {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.4, ease: "power3.out",
        })
    }, [])

    if (!driver) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <p className="text-white text-2xl">Piloto não encontrado</p>
            </div>
        )
    }

    return (
        <div className="bg-black min-h-screen">

            <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-8 py-4 flex items-center justify-between">
                <button
                    onClick={() => navigate('/')}
                    className="text-white/60 hover:text-white flex items-center gap-2 transition-colors"
                >
                    ← Voltar
                </button>
                <span className="text-[#00D2BE] font-bold text-sm tracking-widest uppercase">
                    Mercedes-AMG F1
                </span>
            </div>

            <div className="relative h-screen flex items-end overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${driver.color}22 0%, black 60%)` }}
                />
                <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-bold select-none pointer-events-none"
                    style={{ fontSize: "400px", lineHeight: 1, color: driver.color, opacity: 0.05 }}
                >
                    {driver.number}
                </span>
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: driver.color }} />

                <div className="driver-photo absolute bottom-0 left-0 md:left-20 h-full flex items-end">
                    <img
                        src={driver.image}
                        alt={driver.name}
                        className="h-[90%] object-cover object-top md:object-contain md:object-bottom"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="driver-info relative z-10 w-full md:w-1/2 ml-auto p-10 md:p-20 pb-20 hidden md:block">
                    <p className="font-bold text-sm tracking-widest uppercase mb-2" style={{ color: driver.color }}>
                        {driver.role} · {driver.country}
                    </p>
                    <p className="text-white/50 font-bold text-3xl">{driver.name}</p>
                    <h1 className="text-white font-bold text-6xl md:text-8xl leading-none">{driver.lastname}</h1>
                    <p className="font-bold text-8xl md:text-9xl mt-2" style={{ color: driver.color, opacity: 0.4 }}>
                        #{driver.number}
                    </p>
                </div>
            </div>

            <div className="md:hidden px-8 pt-8 pb-4 bg-black">
                <p className="font-bold text-xs tracking-widest uppercase mb-2" style={{ color: driver.color }}>
                    {driver.role} · {driver.country}
                </p>
                <p className="text-white/50 font-bold text-xl">{driver.name}</p>
                <h1 className="text-white font-bold text-5xl leading-none">{driver.lastname}</h1>
                <p className="font-bold text-7xl mt-1" style={{ color: driver.color, opacity: 0.4 }}>
                    #{driver.number}
                </p>
            </div>

            <div className="container mx-auto px-5 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {driver.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="stat-item bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 text-center hover:border-[#00D2BE]/40 transition-colors"
                        >
                            <span className="font-bold text-3xl md:text-5xl block" style={{ color: driver.color }}>
                                {stat.value}
                            </span>
                            <span className="text-white/40 text-sm mt-2 block">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-white font-bold text-3xl mb-6">
                            Sobre o <span style={{ color: driver.color }}>Piloto</span>
                        </h2>
                        <p className="text-white/50 leading-relaxed text-lg">{driver.bio}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            { label: "Data de Nascimento", value: driver.born },
                            { label: "Cidade Natal", value: driver.hometown },
                            { label: "Estreia na F1", value: driver.debut },
                            { label: "Equipe", value: "Mercedes-AMG Petronas" },
                        ].map((info) => (
                            <div key={info.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-white/40 text-sm">{info.label}</span>
                                <span className="text-white font-bold">{info.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DriverPage