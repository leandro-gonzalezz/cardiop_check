import { useState } from 'react'
import InstagramFeed from './InstagramFeed'
import InstagramFeedManual from './InstagramFeedManual'
import InstagramFeedSimple from './InstagramFeedSimple'

/**
 * Componente selector de Instagram Feed
 * 
 * Este componente te permite elegir entre TRES implementaciones:
 * 1. 'api' - Usa la API de Instagram (requiere token, se actualiza automáticamente)
 * 2. 'manual' - Usa URLs manuales de Instagram (simple, sin API, actualizas cuando quieras)
 * 3. 'demo' - Diseño de demostración con gradientes (funciona sin configuración)
 * 
 * Para cambiar entre opciones, modifica la constante FEED_MODE
 */

export default function InstagramFeedSelector() {
    // 🔧 CONFIGURACIÓN: Cambia esto para elegir qué versión usar
    // 'api'    = Usa la API de Instagram (requiere token en .env, se actualiza automáticamente)
    // 'manual' = Usa URLs manuales(copias y pegas URLs de tus posts, muy simple)
    // 'demo'   = Diseño de demostración (gradientes coloridos, no requiere nada)
    const FEED_MODE = 'manual'  // 👈 Cambia esto: 'api', 'manual', o 'demo'

    // Detectar si las variables de entorno están configuradas
    const hasApiConfig = import.meta.env.VITE_INSTAGRAM_TOKEN &&
        import.meta.env.VITE_INSTAGRAM_USER_ID

    // Estado para mostrar/ocultar el panel de configuración
    const [showConfigPanel, setShowConfigPanel] = useState(false)

    // Si se eligió la API pero no está configurada, mostrar advertencia
    if (FEED_MODE === 'api' && !hasApiConfig) {
        return (
            <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {/* Advertencia de configuración */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        ⚙️ Configuración de Instagram API Pendiente
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Has seleccionado usar la API de Instagram, pero aún no has configurado las credenciales.
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">📋 Pasos para configurar:</h4>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Crea un archivo <code className="bg-gray-200 px-2 py-1 rounded">.env</code> en la raíz del proyecto</li>
                                            <li>Copia el contenido de <code className="bg-gray-200 px-2 py-1 rounded">.env.example</code></li>
                                            <li>Sigue las instrucciones en <code className="bg-gray-200 px-2 py-1 rounded">INSTAGRAM_SETUP.md</code></li>
                                            <li>Obtén tu token y user ID de Facebook Developers</li>
                                            <li>Pega los valores en el archivo <code className="bg-gray-200 px-2 py-1 rounded">.env</code></li>
                                            <li>Reinicia el servidor de desarrollo</li>
                                        </ol>
                                    </div>

                                    <button
                                        onClick={() => setShowConfigPanel(!showConfigPanel)}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        {showConfigPanel ? 'Ocultar' : 'Ver'} Instrucciones Detalladas
                                        <svg className={`w-5 h-5 transition-transform ${showConfigPanel ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {showConfigPanel && (
                                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                            <h5 className="font-semibold text-blue-900 mb-2">🔑 Obtener credenciales:</h5>
                                            <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                                                <li>Ve a <a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Facebook Developers</a></li>
                                                <li>Crea una nueva app (tipo "Consumidor")</li>
                                                <li>Agrega "Instagram Basic Display"</li>
                                                <li>Configura Instagram Testers</li>
                                                <li>Genera el token de acceso</li>
                                                <li>Copia el token y el user ID</li>
                                            </ol>
                                            <p className="mt-3 text-sm text-blue-700">
                                                📖 Para instrucciones completas, abre el archivo <code className="bg-blue-100 px-2 py-1 rounded">INSTAGRAM_SETUP.md</code>
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h5 className="font-semibold text-green-900 mb-2">💡 Alternativas más simples:</h5>
                                        <p className="text-green-800 text-sm mb-2">
                                            Si quieres algo más fácil, puedes usar:
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 text-green-700 text-sm">
                                            <li><strong>Modo Manual:</strong> Cambia <code className="bg-green-100 px-2 py-1 rounded">FEED_MODE = 'manual'</code> (solo copias URLs)</li>
                                            <li><strong>Modo Demo:</strong> Cambia <code className="bg-green-100 px-2 py-1 rounded">FEED_MODE = 'demo'</code> (funciona ya)</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Renderizar el componente seleccionado según el modo
    switch (FEED_MODE) {
        case 'api':
            return <InstagramFeed />
        case 'manual':
            return <InstagramFeedManual />
        case 'demo':
        default:
            return <InstagramFeedSimple />
    }
}
