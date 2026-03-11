import { useState, useEffect } from 'react'

const teamColors = {
    "Mercedes": "#00D2BE",
    "Red Bull": "#3671C6",
    "Ferrari": "#E8002D",
    "McLaren": "#FF8000",
    "Aston Martin": "#229971",
    "Alpine F1 Team": "#FF87BC",
    "Williams": "#64C4FF",
    "RB F1 Team": "#6692FF",
    "Kick Sauber": "#52E252",
    "Haas F1 Team": "#B6BABD",
}

const Dashboard = () => {
    const [drivers, setDrivers] = useState([])
    const [constructors, setConstructors] = useState([])
    const [loading, setLoading] = useState(true)
    const [tab, setTab] = useState("drivers")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [driversRes, constructorsRes] = await Promise.all([
                    fetch("https://api.jolpi.ca/ergast/f1/2026/driverstandings/"),
                    fetch("https://api.jolpi.ca/ergast/f1/2026/constructorstandings/"),
                ])
                const driversData = await driversRes.json()
                const constructorsData = await constructorsRes.json()

                setDrivers(driversData.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [])
                setConstructors(constructorsData.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [])
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const isEmpty = tab === "drivers" ? drivers.length === 0 : constructors.length === 0

    return (
        <section id="dashboard" className="py-32 bg-[#050505]">
            <div className="container mx-auto px-5">

                <div className="text-center mb-16">
                    <p className="text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">
                        Dados em Tempo Real
                    </p>
                    <h2 className="text-white font-bold text-4xl md:text-6xl">
                        Campeonato <span className="text-[#00D2BE]">2026</span>
                    </h2>
                    <p className="text-white/40 mt-4 text-sm">
                        Atualizado automaticamente após cada corrida
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => setTab("drivers")}
                        className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${tab === "drivers"
                                ? "bg-[#00D2BE] text-black"
                                : "border border-white/20 text-white/50 hover:border-[#00D2BE] hover:text-[#00D2BE]"
                            }`}
                    >
                        Pilotos
                    </button>
                    <button
                        onClick={() => setTab("constructors")}
                        className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${tab === "constructors"
                                ? "bg-[#00D2BE] text-black"
                                : "border border-white/20 text-white/50 hover:border-[#00D2BE] hover:text-[#00D2BE]"
                            }`}
                    >
                        Construtores
                    </button>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block w-8 h-8 border-2 border-[#00D2BE] border-t-transparent rounded-full animate-spin" />
                        <p className="text-white/40 mt-4">Carregando dados...</p>
                    </div>
                ) : isEmpty ? (
                    <div className="text-center py-20 max-w-lg mx-auto">
                        <div className="text-6xl mb-6">🏁</div>
                        <h3 className="text-white font-bold text-2xl mb-3">
                            Dados ainda não disponíveis
                        </h3>
                        <p className="text-white/40 leading-relaxed">
                            A temporada 2026 está em seus primeiros dias. Os dados de classificação serão atualizados automaticamente assim que a API processar os resultados das corridas.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00D2BE] animate-pulse" />
                            <span className="text-[#00D2BE] text-sm font-bold">Aguardando dados da API</span>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto flex flex-col gap-3">

                        {tab === "drivers" && drivers.map((item, index) => {
                            const color = teamColors[item.Constructors[0]?.name] || "#ffffff"
                            const isFirst = index === 0
                            return (
                                <div
                                    key={item.Driver.driverId}
                                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 hover:border-[#00D2BE]/40 ${isFirst ? "bg-[#00D2BE]/10 border-[#00D2BE]/40" : "bg-[#0a0a0a] border-white/10"
                                        }`}
                                >
                                    <div className="flex items-center gap-5">
                                        <span className={`font-bold text-2xl w-8 text-center ${isFirst ? "text-[#00D2BE]" : "text-white/20"}`}>
                                            {item.position}
                                        </span>
                                        <div className="w-1 h-10 rounded-full" style={{ backgroundColor: color }} />
                                        <div>
                                            <p className="text-white font-bold text-lg">
                                                {item.Driver.givenName} {item.Driver.familyName}
                                                {(item.Driver.driverId === "russell" || item.Driver.driverId === "antonelli") && (
                                                    <span className="ml-2 text-[#00D2BE] text-xs bg-[#00D2BE]/20 px-2 py-0.5 rounded-full">AMG</span>
                                                )}
                                            </p>
                                            <p className="text-white/40 text-sm">{item.Constructors[0]?.name}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-bold text-xl">{item.points}</p>
                                        <p className="text-white/40 text-xs">pontos</p>
                                    </div>
                                </div>
                            )
                        })}

                        {tab === "constructors" && constructors.map((item, index) => {
                            const color = teamColors[item.Constructor.name] || "#ffffff"
                            const isFirst = index === 0
                            const isMercedes = item.Constructor.constructorId === "mercedes"
                            return (
                                <div
                                    key={item.Constructor.constructorId}
                                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 hover:border-[#00D2BE]/40 ${isMercedes ? "bg-[#00D2BE]/10 border-[#00D2BE]/40" :
                                            isFirst ? "bg-white/5 border-white/20" : "bg-[#0a0a0a] border-white/10"
                                        }`}
                                >
                                    <div className="flex items-center gap-5">
                                        <span className={`font-bold text-2xl w-8 text-center ${isFirst ? "text-white" : "text-white/20"}`}>
                                            {item.position}
                                        </span>
                                        <div className="w-1 h-10 rounded-full" style={{ backgroundColor: color }} />
                                        <div>
                                            <p className="text-white font-bold text-lg">
                                                {item.Constructor.name}
                                                {isMercedes && (
                                                    <span className="ml-2 text-[#00D2BE] text-xs bg-[#00D2BE]/20 px-2 py-0.5 rounded-full">Nossa Equipe</span>
                                                )}
                                            </p>
                                            <p className="text-white/40 text-sm">{item.Constructor.nationality}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-bold text-xl">{item.points}</p>
                                        <p className="text-white/40 text-xs">pontos</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                )}

            </div>
        </section>
    )
}

export default Dashboard