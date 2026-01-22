import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleWhatsAppClick = () => {
        const phoneNumber = "5491161137591" // Reemplazar con el número real
        const message = "Hola, me gustaría agendar un turno en CardioCheck"
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo y nombre */}
                    <div className="logo-container">
                        <img
                            src="/assets/logo.jpg"
                            alt="CardioCheck Logo"
                            className="logo-image"
                        />
                        <div className="hidden sm:block">
                            <h1 className="logo-text">CardioCheck</h1>
                            <p className="logo-subtitle">Centro Cardiovascular</p>
                        </div>
                    </div>

                    {/* Navegación Desktop */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#inicio" className="nav-link">
                            Inicio
                        </a>
                        <a href="#quienes-somos" className="nav-link">
                            Quiénes Somos
                        </a>
                        <a href="#servicios" className="nav-link">
                            Servicios
                        </a>
                        <a href="#contacto" className="nav-link">
                            Contacto
                        </a>
                    </nav>

                    {/* Botón WhatsApp y Menú móvil */}
                    <div className="flex items-center gap-4">
                        {/* Botón WhatsApp */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="whatsapp-btn bg-gradient-to-br from-[#25D366] to-[#20C757] text-white px-4 py-2 rounded-xl font-semibold text-sm hover:-translate-y-0.5 transition-all"
                        >
                            <span className="text-sm">Pedí tu Turno</span>
                        </button>

                        {/* Botón menú móvil */}
                        <button
                            onClick={toggleMenu}
                            className="block md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4">
                        <nav className="flex flex-col space-y-4">
                            <a href="#inicio" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                Inicio
                            </a>
                            <a href="#quienes-somos" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                Quiénes Somos
                            </a>
                            <a href="#servicios" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                Servicios
                            </a>
                            <a href="#contacto" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                Contacto
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
