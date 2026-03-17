const races = [
    { round: "01", name: "Austrália", circuit: "Albert Park", date: "08 Mar", status: "concluída", position: "1-2" },
    { round: "02", name: "China", circuit: "Shanghai", date: "15 Mar", status: "concluída", position: "1-2" },
    { round: "03", name: "Japão", circuit: "Suzuka", date: "29 Mar", status: "próxima", position: null },
    { round: "04", name: "Bahrain", circuit: "Sakhir", date: "12 Abr", status: "futura", position: null },
    { round: "05", name: "Arábia Saudita", circuit: "Jeddah", date: "19 Abr", status: "futura", position: null },
    { round: "06", name: "Miami", circuit: "Hard Rock Stadium", date: "03 Mai", status: "futura", position: null },
]

const Races = () => {
    return (
        <section id="corridas" className="py-32 bg-black">
            <div className="container mx-auto px-5">

                <div className="text-center mb-20">
                    <p className="text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">
                        Temporada 2026
                    </p>
                    <h2 className="text-white font-bold text-4xl md:text-6xl">
                        Calendário de <span className="text-[#00D2BE]">Corridas</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-3">
                    {races.map((race) => (
                        <div
                            key={race.round}
                            className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300
                ${race.status === "próxima"
                                    ? "bg-[#00D2BE]/10 border-[#00D2BE]/50"
                                    : race.status === "concluída"
                                        ? "bg-[#0a0a0a] border-white/5 opacity-70"
                                        : "bg-[#0a0a0a] border-white/10 hover:border-[#00D2BE]/30"
                                }`}
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-white/20 font-bold text-2xl w-8">
                                    {race.round}
                                </span>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-white font-bold text-lg">
                                            {race.name}
                                        </h3>
                                        {race.status === "próxima" && (
                                            <span className="text-[#00D2BE] text-xs font-bold bg-[#00D2BE]/20 px-2 py-1 rounded-full">
                                                PRÓXIMA
                                            </span>
                                        )}
                                        {race.status === "concluída" && (
                                            <span className="text-white/30 text-xs bg-white/5 px-2 py-1 rounded-full">
                                                CONCLUÍDA
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-white/40 text-sm">{race.circuit}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-white/40 text-sm">{race.date}</span>

                                {race.position === "1-2" ? (
                                    <div className="flex flex-col items-center">
                                        <span className="text-yellow-400 font-bold text-lg">🏆 1º - 2º</span>
                                        <span className="text-yellow-400/60 text-xs">Dobradinha!</span>
                                    </div>
                                ) : race.position ? (
                                    <span className="text-[#00D2BE] font-bold text-lg">
                                        P{race.position}
                                    </span>
                                ) : (
                                    <span className="text-white/20 text-sm">—</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Races