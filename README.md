# Portfolio · Miguel Ángel Mengs

Web estática hecha con [Astro](https://astro.build). Sin JavaScript en el navegador, rápida y fácil de mantener.

## Arrancar en local

Necesitas Node 22 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:4321.

## Dónde se edita cada cosa

| Qué | Dónde |
| --- | --- |
| Casos de estudio | `src/content/work/*.md` (Markdown normal) |
| Nombre, email, LinkedIn, disponibilidad, Experience | `src/site.ts` |
| Home (hero, How I work, About) | `src/pages/index.astro` |
| Plantilla de caso | `src/pages/work/[slug].astro` |
| Colores, fuentes, espaciado | `tokens/tokens.json` y luego `npm run tokens` |

### Casos

Cada caso es un `.md`. El número del principio del nombre del archivo solo ordena; la URL sale del resto (`01-one-system-three-brands.md` → `/work/one-system-three-brands/`). Para ocultar uno sin borrarlo, pon `draft: true` en la cabecera.

Las imágenes pendientes están marcadas como `<div class="placeholder">[…]</div>`. Para poner la real, guarda la imagen en `public/work/` y sustituye el bloque por:

```html
<img src="/work/nombre-imagen.png" alt="Descripción de la imagen" />
```

### Tokens

`tokens/tokens.json` tiene dos capas: primitivos y semánticos, con modo claro y oscuro. `npm run tokens` genera `src/styles/tokens.css`. Nunca edites ese CSS a mano.

El modo oscuro ya está definido. Para activarlo, añade `data-theme="dark"` a la etiqueta `<html>` en `src/layouts/Base.astro`.

## Publicar en Vercel

1. Crea un repositorio en GitHub y sube esta carpeta (sin `node_modules` ni `dist`).
2. Entra en [vercel.com](https://vercel.com) con tu cuenta de GitHub y pulsa **Add New → Project**.
3. Importa el repositorio. Vercel detecta Astro solo: no toques nada y pulsa **Deploy**.
4. Para tu dominio: en el proyecto, **Settings → Domains**, añádelo y sigue las instrucciones de DNS.
5. Cambia `site` en `astro.config.mjs` por tu dominio final.

Cada vez que hagas push a GitHub, Vercel publica la nueva versión.

## Pendiente antes de publicar

- [ ] Sustituir los placeholders por imágenes reales (sin datos ni nombres internos).
- [ ] Dominio en `astro.config.mjs`.
- [ ] LinkedIn en `src/site.ts`.
- [ ] Revisar el rol del caso 1 ("Design system lead designer").
- [ ] Cerrar los pendientes de los casos (motivos de decisiones, estado de AGC, etc.).
