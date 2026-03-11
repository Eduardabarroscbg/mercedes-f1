const partners = [
    { id: 1, name: "Petronas", category: "Parceiro Principal", description: "Fornecedor oficial de combustível e lubrificantes da equipe desde 2010.", color: "#00D2BE" },
    { id: 2, name: "AMD", category: "Parceiro Tecnológico", description: "Processadores de alta performance para simulações e análise de dados.", color: "#ED1C24" },
    { id: 3, name: "IWC", category: "Parceiro de Luxo", description: "Relojoaria suíça de precisão. Assim como a Mercedes, obcecada com detalhes.", color: "#C9A96E" },
    { id: 4, name: "Qualcomm", category: "Parceiro Tecnológico", description: "Tecnologia de conectividade e processamento de dados em tempo real.", color: "#3253DC" },
    { id: 5, name: "INEOS", category: "Parceiro Estratégico", description: "Grupo industrial global e co-proprietário da equipe Mercedes F1.", color: "#00A3E0" },
    { id: 6, name: "Nubank", category: "Parceiro Financeiro", description: "Fintech brasileira líder na América Latina, apoiando a inovação da Mercedes na F1.", color: "#820AD1" },
]

const Partners = () => {
    return (
        <section id="parceiros" className="py-32 bg-[#050505]">
            <div className="container mx-auto px-5">

                <div className="text-center mb-20">
                    <p className="text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">
                        Quem nos apoia
                    </p>
                    <h2 className="text-white font-bold text-4xl md:text-6xl">
                        Nossos <span className="text-[#00D2BE]">Parceiros</span>
                    </h2>
                    <p className="text-white/40 mt-4 max-w-xl mx-auto">
                        Grandes marcas globais que acreditam na excelência da Mercedes-AMG Petronas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-black border border-white/10 rounded-2xl p-8 hover:border-[#00D2BE]/40 transition-all duration-300 group flex flex-col gap-4"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-2xl" style={{ color: partner.color }}>
                                    {partner.name}
                                </span>
                                <span className="text-white/20 text-xs bg-white/5 px-3 py-1 rounded-full">
                                    {partner.category}
                                </span>
                            </div>

                            <p className="text-white/40 text-sm leading-relaxed">
                                {partner.description}
                            </p>

                            <div
                                className="h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                                style={{ backgroundColor: partner.color }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Partners