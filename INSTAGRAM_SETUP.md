# 📸 Guía de Configuración del Feed de Instagram

## Resumen

El sitio **cardiodiagnosticoba.com.ar** utiliza un widget integrado de Instagram que se conecta automáticamente a su perfil. Para implementar lo mismo en CardioCheck, tenemos **3 opciones**:

---

## ✅ Opción 1: Instagram Basic Display API (RECOMENDADA - Gratis)

Esta es la opción más profesional y la que te da más control. Es **100% gratuita** y oficial de Facebook/Instagram.

### Pasos para configurar:

#### 1. Crear una App en Facebook Developers

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Inicia sesión con tu cuenta de Facebook
3. Haz clic en **"Mis Apps"** → **"Crear App"**
4. Selecciona **"Consumidor"** como tipo de app
5. Completa los datos:
   - **Nombre de la app**: "CardioCheck Instagram Feed"
   - **Email de contacto**: tu email
6. Haz clic en **"Crear App"**

#### 2. Configurar Instagram Basic Display

1. En el panel de tu app, busca **"Instagram Basic Display"**
2. Haz clic en **"Configurar"**
3. En **"User Token Generator"**, haz clic en **"Add or Remove Instagram Testers"**
4. Agrega tu cuenta de Instagram (@cardiocheckfsa)
5. Ve a tu Instagram → Configuración → Apps y sitios web → Invitaciones de probadores
6. Acepta la invitación

#### 3. Obtener el Token de Acceso

1. Vuelve a **Instagram Basic Display** en tu app de Facebook
2. En **"User Token Generator"**, haz clic en **"Generate Token"**
3. Autoriza la aplicación
4. **Copia el token de acceso** (es un texto largo)
5. **Copia tu User ID** (número que aparece junto al token)

#### 4. Configurar las Variables de Entorno

1. Crea un archivo `.env` en la raíz del proyecto (si no existe):

```bash
# Instagram API Configuration
VITE_INSTAGRAM_TOKEN=tu_token_de_acceso_aqui
VITE_INSTAGRAM_USER_ID=tu_user_id_aqui
```

2. Asegúrate de que `.env` esté en tu `.gitignore` para no subir las credenciales

#### 5. Usar el Componente

En tu página principal (`src/pages/Home.jsx`), importa y usa el componente:

```jsx
import InstagramFeed from '../components/InstagramFeed'

function Home() {
    return (
        <>
            {/* ... otros componentes ... */}
            <InstagramFeed />
            {/* ... */}
        </>
    )
}
```

### ⚠️ Importante:

- El token de acceso **expira cada 60 días**
- Puedes renovarlo automáticamente con un script o manualmente
- Para producción, considera usar **Long-Lived Tokens** (duran 60 días en lugar de 1 hora)

---

## 🎨 Opción 2: Widget de Terceros (MÁS FÁCIL)

Si prefieres algo más simple sin configurar APIs:

### A. SnapWidget (Gratuito con marca de agua)

1. Ve a [SnapWidget.com](https://snapwidget.com/)
2. Selecciona **"Instagram Widget"**
3. Conecta tu cuenta de Instagram
4. Personaliza el diseño
5. Copia el código HTML/JavaScript
6. Pégalo en tu componente

**Ventajas:**
- ✅ Configuración en 5 minutos
- ✅ No requiere programación
- ✅ Actualización automática

**Desventajas:**
- ❌ Marca de agua de SnapWidget
- ❌ Menos personalización
- ❌ Depende de un servicio externo

### B. Elfsight (Plan gratuito limitado)

1. Ve a [Elfsight.com](https://elfsight.com/instagram-feed-instashow/)
2. Crea una cuenta gratuita
3. Conecta tu Instagram
4. Personaliza el widget
5. Copia el código de embed

**Ventajas:**
- ✅ Muy fácil de usar
- ✅ Diseño profesional
- ✅ Muchas opciones de personalización

**Desventajas:**
- ❌ Plan gratuito muy limitado (50 vistas/mes)
- ❌ Marca de agua en plan gratuito
- ❌ Requiere suscripción para funcionalidad completa ($5.99/mes)

---

## 🔧 Opción 3: Embed Nativo de Instagram (LIMITADO)

Solo para mostrar posts individuales, no un feed completo.

1. Ve al post de Instagram que quieres mostrar
2. Haz clic en los **3 puntos** → **"Insertar"**
3. Copia el código
4. Pégalo en tu HTML

**Ventajas:**
- ✅ Oficial de Instagram
- ✅ Sin configuración

**Desventajas:**
- ❌ Solo posts individuales
- ❌ No es un feed automático
- ❌ Debes actualizar manualmente cada post

---

## 🎯 Recomendación Final

**Para CardioCheck, te recomiendo la Opción 1 (Instagram Basic Display API)** porque:

1. ✅ Es **100% gratuita** y oficial
2. ✅ **Sin marcas de agua** ni limitaciones
3. ✅ **Control total** del diseño
4. ✅ **Actualización automática** cuando publicas en Instagram
5. ✅ **Profesional** y escalable

El único "inconveniente" es que el token expira cada 60 días, pero puedes configurar un recordatorio o automatizar la renovación.

---

## 📝 Próximos Pasos

1. Sigue los pasos de la **Opción 1** para obtener tu token
2. Agrega las variables de entorno en `.env`
3. Importa el componente `InstagramFeed` en tu página
4. ¡Listo! Tu feed de Instagram estará funcionando

---

## 🆘 Soporte

Si tienes problemas con la configuración:

1. Verifica que el token y el User ID sean correctos
2. Asegúrate de que tu cuenta de Instagram sea pública
3. Revisa la consola del navegador para ver errores
4. Consulta la [documentación oficial de Instagram Basic Display](https://developers.facebook.com/docs/instagram-basic-display-api)

---

## 🔄 Renovación del Token (Cada 60 días)

Para renovar el token cuando expire:

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Selecciona tu app
3. Ve a **Instagram Basic Display**
4. En **"User Token Generator"**, haz clic en **"Generate Token"** nuevamente
5. Copia el nuevo token
6. Actualiza el archivo `.env` con el nuevo token

**Tip:** Configura un recordatorio en tu calendario para renovar el token cada 50 días.
