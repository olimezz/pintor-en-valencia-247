# Pintor en Valencia 24/7 — Nueva Versión Web Mobile-First

Rediseño moderno, limpio y **100 % mobile-first** en español para **[pintorenvalencia247.es](https://pintorenvalencia247.es)**, inspirado cromáticamente en el monograma **"PV" arcoíris** sobre una base arquitectónica luminosa.

## Estructura del Proyecto

- `index.html` — Estructura semántica HTML5 en español con las 7 secciones obligatorias (*Inicio, Servicios, Galería, Precios, Reseñas, Nosotros y Contacto*), metadatos SEO, Open Graph y datos estructurados `HousePainter` (Schema.org).
- `css/styles.css` — Sistema de diseño mobile-first, paleta arcoíris equilibrada, accesibilidad táctil (`>= 48px`), comparador Antes/Después, galería filtrable, lightbox y barra inferior rápida en móvil.
- `js/app.js` — Navegación móvil, resaltado automático de sección activa, comparador interactivo en el Hero, galería dinámica con filtros y modal accesible, configurador rápido de presupuesto y validación en tiempo real del formulario.
- `assets/logo-pv.svg` — Componente vectorial limpio y escalable del monograma **"PV"** en estética arcoíris.

## Datos Reales Integrados desde `pintorenvalencia247.es`

- **Teléfono principal (llamadas 24/7):** `+34 643 55 44 85`
- **WhatsApp presupuestos 24/7:** `+34 643 67 31 69`
- **Correo electrónico:** `info@pintorenvalencia247.es`
- **Servicios reales:** Alisado y eliminación de gotelé (con luz transversal o alisado directo sobre gotelé duro), pintura plástica y esmaltes al agua, papel pintado, tratamiento de humedades por condensación (masilla antihumedad, esmaltes especiales, picado y escayola), pintura de ventanas/verjas/metales, particulares (pisos, chalets, viviendas nuevas, alquileres, parkings, comunidades) y empresas (locales, restaurantes, oficinas, naves, alquiler turístico, colegios).
- **Proyectos documentados incluidos en la galería:** Piso de 90 m² (alisado + esmalte al agua), modernización de vivienda de alquiler de 100 m², humedades por condensación en habitación de 12 m², alisado directo en habitación sobre gotelé duro y saneamiento con picado y escayola.

## Guía Rápida para Completar Marcadores Pendientes

Busca `[COMPLETAR` en `index.html` y `js/app.js` para sustituir los datos no expuestos públicamente como texto plano en la web de referencia:
1. **Logotipo original rasterizado (opcional):** Descomenta el `<img class="brand-logo-original">` en `index.html` si deseas sustituir el SVG vectorial `PV` por el fichero PNG/JPG original del servidor.
2. **Fotografías reales de proyectos:** Rellena la propiedad `realPhotoUrl` de cada objeto en `GALLERY_PROJECTS` (`js/app.js`).
3. **Tarifas numéricas orientativas:** Sustituye los marcadores en la sección `#precios` (`index.html`) si deseas publicar importes en `€` o `€/m²`.
4. **Reseñas literales y enlace a Google Business:** Sustituye los marcadores en la sección `#resenas` (`index.html`).

## Cómo Previsualizar

Puedes abrir `index.html` directamente en cualquier navegador moderno o levantar un servidor estático local:

```bash
cd /Users/Mac/.gemini/antigravity/scratch/pintor-en-valencia-247
python3 -m http.server 8080
```
Luego abre `http://localhost:8080` en tu navegador.
