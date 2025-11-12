# Guía de Estilo - CardioCheck

Esta guía define las reglas y convenciones del proyecto `cardio_check` (landing page)
para mantener consistencia visual y técnica. Está pensada para implementarse con
Next.js y Tailwind CSS, y para ser totalmente responsive (mobile-first).

## Paleta de colores

Colores principales extraídos del diseño proporcionado:

| Variable | Uso | Hex |
|---|---:|:---:|
| `--primary-blue` | Fondo / elementos principales | #1E5F8B |
| `--accent-green` | CTA / botones secundarios | #B8E063 |
| `--white` | Texto sobre azul / fondos claros | #FFFFFF |
| `--dark` | Texto principal | #2C2C2C |
| `--light-blue` | Variaciones / hover | #4A90B8 |

Regla: Preferir las clases de Tailwind para colores (`bg-[color]`, `text-[color]`) y mantener las variables CSS para colores semánticos y uso en componentes personalizados.

## Tipografía

- Fuente: Sans-serif moderna (por ejemplo `Inter`, `Poppins` o `Roboto`).
- Tamaños: usar `rem` y las utilidades de Tailwind (`text-base`, `text-xl`, etc.).
- Jerarquía: H1 (hero) grande y centrado en mobile; H2 secciones; H3 títulos de tarjetas.

## Espaciado y layout

- Mobile-first: diseñar para móviles y escalar con breakpoints `sm`, `md`, `lg`, `xl`.
- Breakpoints (Tailwind defaults):
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## Componentes y clases recomendadas

- Use componentes React en `components/` para `Header`, `Hero`, `Services`, `About`, `Contact`, `Footer`.
- Naming: usar PascalCase para componentes (`Hero`, `ServiceCard`).
- Estilos: preferir clases utilitarias de Tailwind sobre CSS personalizado; usar `@apply` para patrones comunes.

## Accesibilidad

- Contraste: mantener contraste suficiente (WCAG AA) en botones y textos importantes.
- Navegación por teclado: asegurar `:focus` visible en enlaces y botones.
- `alt` en imágenes y `aria-*` cuando aplique.

## Convenciones Next.js + Tailwind

- Estructura de archivos básica:

```
pages/
components/
styles/globals.css
public/assets/
```

- Usar `pages/_app.js` para importar `globals.css`.
- Mantener rutas limpias y accesibles; usar `next/link` para navegación interna.

## Reglas de commit y ramas

- Rama principal: `main`.
- Ramas de features: `feature/descripcion-corta`.
- Commits: usar mensajes en inglés breve o español según equipo. Formato sugerido:
  - `feat: add hero component`
  - `fix: correct responsiveness on mobile`

## Formato de código

- Usar Prettier y ESLint (configurar en etapas siguientes).
- Line endings: `LF`.

## Recursos y ejemplos

- Paleta y componentes están en `styles/globals.css` y `tailwind.config.js`.

---

Última actualización: Noviembre 2025
