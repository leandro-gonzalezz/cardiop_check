# 🎨 Guía Rápida: Widget de Instagram con SnapWidget

## ✅ Lo que acabas de ver

Acabas de implementar la **Opción 3** - un feed de Instagram simulado con diseño profesional que:

- ✅ **Funciona inmediatamente** - No requiere configuración
- ✅ **Se ve profesional** - Diseño con gradientes y efectos hover
- ✅ **Es responsive** - Se adapta a móvil y desktop
- ✅ **Tiene enlaces a Instagram** - Todos los posts llevan a tu perfil

## 🔄 Cómo reemplazarlo con tus publicaciones REALES de Instagram

### Opción A: SnapWidget (Gratis con marca de agua)

#### Paso 1: Crear el Widget

1. Ve a **[SnapWidget.com](https://snapwidget.com/)**
2. Haz clic en **"Create Widget"**
3. Selecciona **"Instagram Widget"**
4. Conecta tu cuenta de Instagram **@cardiocheckfsa**
5. Configura el widget:
   - **Layout**: Grid
   - **Columns**: 3 (desktop) / 1 (mobile)
   - **Number of posts**: 9
   - **Spacing**: 24px
   - **Border radius**: 12px

#### Paso 2: Copiar el Código

Después de configurar, SnapWidget te dará un código como este:

```html
<!-- SnapWidget -->
<iframe src="https://snapwidget.com/embed/XXXXXX" 
        class="snapwidget-widget" 
        allowtransparency="true" 
        frameborder="0" 
        scrolling="no" 
        style="border:none; overflow:hidden; width:100%; ">
</iframe>
```

#### Paso 3: Actualizar el Componente

Abre `src/components/InstagramFeedSimple.jsx` y reemplaza el `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">` completo con:

```jsx
{/* Widget de SnapWidget */}
<div className="snapwidget-container">
    <iframe 
        src="https://snapwidget.com/embed/XXXXXX" 
        className="w-full border-0 rounded-xl"
        style={{ minHeight: '600px' }}
        allowTransparency="true" 
        frameBorder="0" 
        scrolling="no"
    />
</div>
```

### Opción B: Elfsight (Más profesional - $5.99/mes)

#### Paso 1: Crear Cuenta

1. Ve a **[Elfsight.com](https://elfsight.com/instagram-feed-instashow/)**
2. Crea una cuenta (prueba gratis de 7 días)
3. Haz clic en **"Create Widget"**

#### Paso 2: Configurar

1. Conecta tu Instagram **@cardiocheckfsa**
2. Personaliza:
   - **Layout**: Grid
   - **Columns**: 3
   - **Posts to show**: 9
   - **Hover effect**: Zoom + Caption
   - **Colors**: Personaliza según tu marca

#### Paso 3: Obtener el Código

Elfsight te dará un código como:

```html
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"></div>
```

#### Paso 4: Actualizar el Componente

En `src/components/InstagramFeedSimple.jsx`:

1. Agrega el script en el `useEffect`:

```jsx
useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://apps.elfsight.com/p/platform.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
        if (script.parentNode) {
            script.parentNode.removeChild(script)
        }
    }
}, [])
```

2. Reemplaza el grid con:

```jsx
<div className="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"></div>
```

### Opción C: Mantener el Diseño Actual (Recomendado para empezar)

Si quieres mantener el diseño actual pero con tus imágenes reales:

1. Toma screenshots de tus 9 últimas publicaciones de Instagram
2. Guárdalas en `public/instagram/` como `post1.jpg`, `post2.jpg`, etc.
3. Actualiza el componente para usar esas imágenes:

```jsx
const instagramPosts = [
    { id: 1, image: '/instagram/post1.jpg', link: 'URL_DEL_POST_1' },
    { id: 2, image: '/instagram/post2.jpg', link: 'URL_DEL_POST_2' },
    // ... etc
]

// En el JSX:
{instagramPosts.map((post) => (
    <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer">
        <img src={post.image} alt="Instagram post" />
    </a>
))}
```

## 📊 Comparación de Opciones

| Característica | Diseño Actual | SnapWidget | Elfsight |
|---------------|---------------|------------|----------|
| **Costo** | Gratis | Gratis | $5.99/mes |
| **Actualización** | Manual | Automática | Automática |
| **Marca de agua** | No | Sí | No (plan pago) |
| **Personalización** | Total | Media | Alta |
| **Tiempo setup** | 0 min | 10 min | 15 min |

## 🎯 Mi Recomendación

**Para empezar:** Mantén el diseño actual (ya está funcionando y se ve bien)

**Cuando tengas tiempo:** Configura SnapWidget (gratis y automático)

**Si quieres lo mejor:** Invierte en Elfsight ($5.99/mes) - vale la pena

## 🚀 Próximos Pasos

1. **Ahora mismo:** Abre tu navegador en `http://localhost:5173` y ve cómo se ve
2. **Esta semana:** Decide si quieres usar SnapWidget o Elfsight
3. **Cuando estés listo:** Sigue los pasos de arriba para conectar tu Instagram real

## 💡 Consejos

- El diseño actual es **profesional** y funciona bien como placeholder
- Puedes **actualizar las imágenes manualmente** cada mes si quieres
- SnapWidget es **perfecto para empezar** - gratis y fácil
- Elfsight es **la mejor opción** si quieres algo premium sin complicaciones

---

¿Necesitas ayuda? Revisa el archivo `INSTAGRAM_SETUP.md` para más detalles sobre la API de Instagram.
