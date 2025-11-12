const services = [
  {
    title: "Diagnósticos Especializados",
    image: "/assets/diagnosticoesp.png",
    description: "Tecnología avanzada para diagnósticos precisos y confiables.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
    items: [
      "Electrocardiogramas (ECG)",
      "Ecocardiogramas Doppler",
      "Pruebas de esfuerzo",
      "Holter 24/48 horas",
      "Monitoreo ambulatorio (MAPA)",
      "Estudios Doppler vascular"
    ],
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-primary"
  },
  {
    title: "Prevención Cardiovascular",
    image: "/assets/prevencion.png",
    description: "Programas personalizados para cuidar tu corazón a largo plazo.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
      </svg>
    ),
    items: [
      "Evaluaciones de riesgo cardiovascular",
      "Programas de prevención personalizada",
      "Control integral de factores de riesgo",
      "Asesoramiento en estilo de vida saludable",
      "Planes nutricionales especializados",
      "Programas de ejercicio supervisado"
    ],
    color: "from-green-50 to-green-100",
    iconBg: "bg-accent"
  },
  {
    title: "Atención Integral",
    image: "/assets/antencionintegral.png",
    description: "Cuidado completo con seguimiento personalizado para cada paciente.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    items: [
      "Consultas cardiológicas especializadas",
      "Interpretación experta de estudios",
      "Planes de tratamiento personalizados",
      "Seguimiento continuo del paciente",
      "Segunda opinión médica",
      "Coordinación con otros especialistas"
    ],
    color: "from-amber-50 to-amber-100",
    iconBg: "bg-lightblue"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos un amplio rango de servicios especializados en cardiología, 
            combinando tecnología de vanguardia con la experiencia de nuestros profesionales 
            para brindarte la mejor atención cardiovascular.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden`}
            >
              {/* Imagen del servicio */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`w-14 h-14 ${service.iconBg} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark leading-tight mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}