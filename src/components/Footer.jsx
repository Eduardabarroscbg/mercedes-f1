import { footerLinks, socialLinks, navLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-16">
            <div className="container mx-auto px-5">

                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

                    <div className="max-w-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/Mercedes-logo.png"
                                alt="Mercedes"
                                className="h-10 w-10 object-contain"
                            />

                            <span className="text-white font-bold text-sm tracking-wider">
                                Mercedes-AMG F1
                            </span>
                        </div>

                        <p className="text-white/40 text-sm leading-relaxed">
                            Mercedes-AMG Petronas Formula One Team.
                            Construindo o futuro da Fórmula 1 desde 2010.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">

                        {/* Navegação */}
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                                Navegação
                            </h4>

                            <ul className="flex flex-col gap-2">
                                {navLinks.map(({ label, id }) => (
                                    <li key={id}>
                                        <a
                                            href={`#${id}`}
                                            className="text-white/40 text-sm hover:text-[#00D2BE] transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Redes sociais */}
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                                Redes Sociais
                            </h4>

                            <ul className="flex flex-col gap-2">
                                {socialLinks.map(({ label, link }) => (
                                    <li key={label}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/40 text-sm hover:text-[#00D2BE] transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-white/30 text-sm">
                        © 2026 Mercedes-AMG Petronas F1 Team. Todos os direitos reservados.
                    </p>

                    <ul className="flex gap-6">
                        {footerLinks.map(({ label, link }) => (
                            <li key={label}>
                                <a
                                    href={link}
                                    className="text-white/30 text-sm hover:text-[#00D2BE] transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </footer>
    )
}

export default Footer