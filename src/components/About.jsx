export default function About() {
    return (
        <section id="quienes-somos" className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Título de sección */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
                        Quiénes Somos
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Conoce más sobre nuestro compromiso con la salud cardiovascular
                    </p>
                </div>

                {/* Contenido principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
                    <div className="relative">
                        <div className="relative mx-auto max-w-md lg:max-w-full">
                            <img
                                src="/assets/quienessomos.png"
                                alt="CardioCheck - Equipo médico especializado"
                                className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-square lg:aspect-auto lg:h-96"
                            />
                            {/* Decoración de fondo */}
                            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-primary to-accent opacity-10 rounded-3xl -z-10"></div>
                        </div>
                    </div>

                    <div>
                        <div className="max-w-lg lg:max-w-none">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-6 lg:mb-8">
                                Especialistas en Salud Cardiovascular
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 lg:mb-8">
                                En <strong className="text-primary">CardioCheck</strong> combinamos la experiencia médica
                                con tecnología de vanguardia para ofrecer diagnósticos precisos y tratamientos personalizados.
                                Nuestro compromiso es cuidar tu corazón en cada etapa de tu vida.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 lg:mb-8">
                                Nos especializamos en <strong className="text-primary">medicina preventiva</strong>,
                                diagnóstico temprano y seguimiento integral de la salud cardiovascular.
                                Cada paciente recibe atención personalizada adaptada a sus necesidades específicas.
                            </p>

                            {/* Características destacadas */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Equipo médico especializado y certificado</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Tecnología diagnóstica de última generación</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Atención personalizada y humanizada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Valores de la empresa */}
                <div className="text-center mb-12 lg:mb-16">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6">
                        Nuestros Valores
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Los principios que guían nuestro compromiso con tu salud
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    <div className="text-center p-8 lg:p-10 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                        <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 lg:mb-8 flex items-center justify-center shadow-lg overflow-hidden p-3">
                            <img
                                src="/assets/empatia.png"
                                alt="empatía"
                                className="w-20 h-full object-contain"
                            />
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-primary">Empatía</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Comprendemos tus preocupaciones y te acompañamos en cada paso del proceso,
                            brindándote el apoyo emocional que necesitas
                        </p>
                    </div>

                    <div className="text-center p-8 lg:p-10 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                        <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 lg:mb-8 flex items-center justify-center shadow-lg overflow-hidden p-3">
                            <img
                                src="/assets/experiencia.png"
                                alt="Experiencia médica"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-primary">Excelencia</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Mantenemos los más altos estándares de calidad en cada consulta,
                            utilizando protocolos médicos actualizados y evidencia científica
                        </p>
                    </div>

                    <div className="text-center p-8 lg:p-10 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                        <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-6 lg:mb-8 flex items-center justify-center shadow-lg overflow-hidden p-3">
                            <img
                                src="/assets/compromiso.png"
                                alt="Compromiso médico"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-primary">Compromiso</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Nos dedicamos completamente a tu bienestar cardiovascular con
                            seguimiento continuo y atención integral para toda tu familia
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
