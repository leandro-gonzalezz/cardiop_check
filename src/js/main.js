// CardioCheck - JavaScript Principal
document.addEventListener('DOMContentLoaded', function() {
    console.log('CardioCheck - Sitio Web Cargado');
    
    // Navegación suave
    initSmoothScrolling();
    
    // Menú mobile (cuando se implemente)
    initMobileMenu();
    
    // Animaciones al scroll (opcional)
    initScrollAnimations();
});

/**
 * Navegación suave entre secciones
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Menú mobile (para implementar cuando se añada el diseño responsive)
 */
function initMobileMenu() {
    // TODO: Implementar menú hamburguesa para móviles
    console.log('Mobile menu initialized');
}

/**
 * Animaciones al hacer scroll (opcional)
 */
function initScrollAnimations() {
    // Observador para animaciones al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observar secciones para animaciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Funciones de utilidad
 */
const CardioCheck = {
    // Función para manejar formularios de contacto (cuando se implementen)
    handleContactForm: function(formData) {
        console.log('Procesando formulario de contacto:', formData);
        // TODO: Implementar envío de formulario
    },
    
    // Función para agendar citas (cuando se implemente)
    scheduleAppointment: function() {
        console.log('Iniciando proceso de agenda de citas');
        // TODO: Implementar sistema de citas
    },
    
    // Función para mostrar información de servicios
    showServiceInfo: function(serviceType) {
        console.log(`Mostrando información de: ${serviceType}`);
        // TODO: Implementar modal o popup con detalles
    }
};

// Hacer disponible globalmente
window.CardioCheck = CardioCheck;