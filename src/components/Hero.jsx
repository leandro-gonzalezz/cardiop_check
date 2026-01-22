export default function Hero() {
    return (
        <section id="inicio" className="pt-20 pb-12 lg:py-20 bg-gradient-to-br from-white to-blue-50 min-h-screen flex items-center">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Contenido principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="max-w-lg lg:max-w-none">
                            <div className="mb-4 lg:mb-6">
                                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                                    Centro Cardiovascular Especializado
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 lg:mb-6 leading-tight">
                                CardioCheck
                            </h1>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-6 lg:mb-8 font-medium leading-relaxed">
                                Cuidamos tu corazón, cuidamos tu vida
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-10">
                                Diagnóstico cardiovascular avanzado con tecnología de última generación.
                                Nuestro equipo de especialistas te brinda la atención personalizada que mereces.
                            </p>

                            {/* Botones de acción */}
                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                                <button
                                    onClick={() => {
                                        const phoneNumber = "5491161137591"
                                        const message = "Hola, me gustaría agendar un turno en CardioCheck"
                                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                                        window.open(whatsappUrl, '_blank')
                                    }}
                                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Agendá tu Turno
                                </button>
                                <a
                                    href="#servicios"
                                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
                                >
                                    Ver Servicios
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-full">
                            <img
                                src="/assets/quienessomos.png"
                                alt="CardioCheck - Cuidado médico especializado"
                                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                            />
                            {/* Elementos decorativos */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Estadísticas */}
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
                        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">300+</div>
                            <p className="text-gray-600 font-medium">Pacientes Atendidos</p>
                        </div>
                        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">10+</div>
                            <p className="text-gray-600 font-medium">Años de Experiencia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
