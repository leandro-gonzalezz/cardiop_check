# CardioCheck - Landing Page

Landing page profesional para CardioCheck, Centro de Diagnóstico y Prevención Cardiovascular en Formosa, Argentina.

## 🚀 Stack Tecnológico

- **React 18** - Biblioteca de UI moderna y eficiente
- **Vite** - Build tool ultrarrápido para desarrollo
- **Tailwind CSS** - Framework de CSS utility-first
- **React Router** - Navegación del lado del cliente
- **ESLint** - Linter para mantener código limpio

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/[usuario]/cardio_check.git
cd cardio_check
```

2. Instalar dependencias:
```bash
npm install
```

## 🏃‍♂️ Desarrollo

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3001`

## 🏗️ Build para Producción

Crear build optimizado:
```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 👀 Preview del Build

Para previsualizar el build de producción localmente:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
cardiocheck-fsa/
├── public/              # Archivos estáticos (imágenes, favicon, etc.)
│   └── assets/          # Imágenes y recursos
├── src/
│   ├── components/      # Componentes React reutilizables
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   └── Home.jsx
│   ├── utils/           # Utilidades y helpers
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales con Tailwind
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind CSS
├── postcss.config.js    # Configuración de PostCSS
└── package.json         # Dependencias y scripts

```

## 🎨 Características

- ✅ Diseño responsive y mobile-first
- ✅ Optimización SEO con meta tags y structured data
- ✅ Integración con WhatsApp para contacto directo
- ✅ Animaciones suaves y transiciones
- ✅ Componentes modulares y reutilizables
- ✅ Tailwind CSS para estilos consistentes
- ✅ Build optimizado para producción
- ✅ Hot Module Replacement (HMR) en desarrollo

## 📱 Secciones

1. **Header** - Navegación sticky con menú responsive
2. **Hero** - Sección principal con CTA
3. **Quiénes Somos** - Información sobre el centro médico
4. **Servicios** - Listado de servicios cardiovasculares
5. **Contacto** - Información de contacto y ubicación
6. **Footer** - Enlaces y redes sociales

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm run preview` - Previsualiza el build
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea código con Prettier

## 🌐 Deployment

### Netlify

1. Conectar repositorio en Netlify
2. Configurar build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático en cada push

### Vercel

```bash
npm i -g vercel
vercel
```

### Hosting tradicional

1. Ejecutar `npm run build`
2. Subir contenido de la carpeta `dist/` al servidor

## 📞 Contacto

- **Ubicación**: Mitre N° 55, Ciudad de Formosa, Argentina
- **Teléfono**: 03705-050247 / 3705 053936
- **Instagram**: [@cardiocheckfsa](https://www.instagram.com/cardiocheckfsa/)

## 📄 Licencia

MIT © CardioCheck Development Team

---

Desarrollado con ❤️ por El Templo - Diseños Webs