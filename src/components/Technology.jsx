const techs = [
    {
        id: 1,
        title: "Motor Híbrido",
        description: "O motor V6 turbo híbrido de 1.6L gera mais de 1000cv combinados com a unidade elétrica MGU-H.",
        icon: "⚙️",
    },
    {
        id: 2,
        title: "Aerodinâmica",
        description: "Cada milímetro do carro foi projetado em túnel de vento para maximizar downforce e minimizar arrasto.",
        icon: "💨",
    },
    {
        id: 3,
        title: "DRS",
        description: "O sistema de redução de arrasto abre o aileron traseiro nas retas, aumentando a velocidade em até 20km/h.",
        icon: "🔧",
    },
    {
        id: 4,
        title: "Telemetria",
        description: "Mais de 300 sensores enviam dados em tempo real para a garagem. Cada décimo de segundo importa.",
        icon: "📡",
    },
    {
        id: 5,
        title: "Pneus",
        description: "A estratégia de pneus pode decidir corridas inteiras. Cada grau de temperatura muda tudo.",
        icon: "🏎️",
    },
    {
        id: 6,
        title: "Energia",
        description: "O sistema ERS recupera energia na frenagem e a reutiliza nas acelerações, dando potência extra.",
        icon: "⚡",
    },
]

const Technology = () => {
    return (
        <section id="tecnologia" className="py-32 bg-black">
            <div className="container mx-auto px-5">

                <div className="text-center mb-20">
                    <p className="text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">
                        Engenharia de Ponta
                    </p>
                    <h2 className="text-white font-bold text-4xl md:text-6xl">
                        A tecnologia por
                        <br />
                        <span className="text-[#00D2BE]">trás da vitória.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techs.map((tech) => (
                        <div
                            key={tech.id}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-[#00D2BE]/50 transition-all duration-300 group"
                        >
                            <span className="text-4xl">{tech.icon}</span>
                            <h3 className="text-white font-bold text-xl mt-4 group-hover:text-[#00D2BE] transition-colors duration-300">
                                {tech.title}
                            </h3>
                            <p className="text-white/50 mt-3 leading-relaxed">
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Technology