export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo y descripción */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/assets/logo.jpg"
                                alt="CardioCheck Logo"
                                className="h-10 w-auto rounded-lg"
                            />
                            <span className="font-bold text-xl">CardioCheck</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Centro especializado en diagnóstico y prevención cardiovascular.
                            Cuidamos tu corazón con tecnología y dedicación.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="col-span-1">
                        <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#inicio" className="text-white hover:text-accent transition-colors no-underline">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#quienes-somos" className="text-white hover:text-accent transition-colors no-underline">
                                    Quiénes Somos
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="text-white hover:text-accent transition-colors no-underline">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-white hover:text-accent transition-colors no-underline">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto y redes */}
                    <div className="col-span-1">
                        <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
                        <div className="space-y-3">
                            <a
                                href="https://www.instagram.com/cardiocheckfsa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg no-underline"
                            >
                                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:from-pink-600 group-hover:to-purple-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <span className="text-white font-semibold group-hover:text-accent transition-colors">@cardiocheckfsa</span>
                            </a>

                            <div className="text-gray-300 text-sm">
                                <p>Mitre N° 55 - Ciudad de Formosa</p>
                                <p>Tel: 03705-050247 / 3705 053936</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria y copyright */}
                <div className="border-t border-gray-600 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-300 text-sm">
                            © {currentYear} El Templo - Diseños Webs. Todos los derechos reservados.
                        </p>
                        <p className="text-accent font-medium text-sm">
                            Diagnóstico • Prevención • Cardiovascular • Formosa
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
