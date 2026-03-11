import { useState, useEffect } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNav = (e, id) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header
            className={`w-screen fixed top-0 left-0 z-50 flex items-center justify-center transition-all duration-300 min-h-[7vh] border-b border-white/10 ${scrolled
                ? "bg-black/95 backdrop-blur-md"
                : "bg-black/60 backdrop-blur-sm"
                }`}
        >
            <nav className="container mx-auto flex items-center justify-between px-5">

                <div className="flex items-center gap-3">
                    <img
                        src="/images/Mercedes-logo.png"
                        alt="Mercedes"
                        className="h-10 w-10 object-contain"
                    />

                    <span className="text-white font-bold text-sm tracking-wider">
                    </span>
                </div>

                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, id }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => handleNav(e, id)}
                                className="text-white/70 text-sm hover:text-[#00D2BE] transition-colors duration-300"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="bg-[#00D2BE] text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors duration-300">
                    Ingressos
                </button>

            </nav>
        </header>
    )
}

export default Navbar