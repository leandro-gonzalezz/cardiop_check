/**
 * Feed de Instagram - Versión Manual con URLs
 * 
 * Esta es la opción más simple y práctica:
 * - No requiere API ni tokens
 * - No expira
 * - Solo necesitas las URLs públicas de tus posts
 * - Actualizas manualmente cuando quieras
 * 
 * CÓMO OBTENER LAS URLs:
 * 1. Ve a tu post en Instagram (web o app)
 * 2. Haz clic en los 3 puntos → "Copiar enlace"
 * 3. Para la imagen: clic derecho → "Copiar dirección de imagen"
 *    O usa el formato: https://www.instagram.com/p/CODIGO_DEL_POST/
 */

export default function InstagramFeedManual() {
    // 🔧 CONFIGURACIÓN: Imágenes del post de Instagram
    // Cada entrada representa una imagen del carrusel del post
    // img_index=1 es la primera imagen, img_index=2 la segunda, etc.
    const instagramPosts = [
        {
            id: 1,
            postUrl: 'https://www.instagram.com/p/DR8PvijDTPx/?img_index=1',
            // Para mostrar la imagen, necesitamos usar el embed o una imagen local
            // Opción 1: Usar el embed de Instagram (recomendado)
            embedUrl: 'https://www.instagram.com/p/DR8PvijDTPx/embed/captioned',
            // Opción 2: Guardar la imagen localmente y usar la ruta local
            imageUrl: '/images/instagram/cardiocheck-post-1.jpg',
            caption: 'Insuficiencia cardíaca: señales y prevención',
            type: 'image'
        },
        {
            id: 2,
            postUrl: 'https://www.instagram.com/p/DR8PvijDTPx/?img_index=2',
            embedUrl: 'https://www.instagram.com/p/DR8PvijDTPx/embed/captioned',
            imageUrl: '/images/instagram/cardiocheck-post-2.jpg',
            caption: 'Cuidados cardiovasculares',
            type: 'image'
        },
        {
            id: 3,
            postUrl: 'https://www.instagram.com/p/DR8PvijDTPx/?img_index=3',
            embedUrl: 'https://www.instagram.com/p/DR8PvijDTPx/embed/captioned',
            imageUrl: '/images/instagram/cardiocheck-post-3.jpg',
            caption: 'Prevención y diagnóstico temprano',
            type: 'image'
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                {/* Header de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        Síguenos en Instagram
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Descubre nuestras últimas novedades y consejos de salud cardiovascular
                    </p>
                    <a
                        href="https://www.instagram.com/cardiocheckfsa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                    >
                        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @cardiocheckfsa
                    </a>
                </div>

                {/* Grid de Instagram */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            {instagramPosts.map((post) => (
                                <a
                                    key={post.id}
                                    href={post.postUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Imagen del post */}
                                    <img
                                        src={post.imageUrl}
                                        alt={post.caption || `Instagram post ${post.id}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />

                                    {/* Overlay con gradiente y caption */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            {/* Icono de Instagram */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                                <span className="text-white text-xs font-semibold">Ver en Instagram</span>
                                            </div>

                                            {/* Caption */}
                                            {post.caption && (
                                                <p className="text-white text-sm line-clamp-2 leading-tight">
                                                    {post.caption}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Indicador de video */}
                                    {post.type === 'video' && (
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                                            <svg
                                                className="w-5 h-5 text-pink-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Badge de "Nuevo" (opcional) */}
                                    {post.id <= 3 && (
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            Nuevo
                                        </div>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <a
                        href="https://www.instagram.com/cardiocheckfsa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Ver más en Instagram
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
