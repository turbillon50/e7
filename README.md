# E7 Pictures — PWA

> **Forma parte de E7 Pictures.** Plataforma/comunidad cinematográfica donde el público participa
> en el desarrollo, producción y distribución de cine. Estética _Auteur_ (A24 · Apple · MasterClass):
> midnight, grafito y champagne gold.

Convertido desde una entrega visual de **Google Stitch** (HTML estático + Tailwind CDN) a una
**PWA profesional con Next.js 15 (App Router) + TypeScript + Tailwind**, lista para producción en
Vercel.

La entrega original de Stitch se conserva como referencia de diseño en
[`design/stitch-reference`](./design/stitch-reference).

---

## Stack

- **Next.js 15** (App Router, RSC) + **React 19** + **TypeScript**
- **Tailwind CSS 3** con los design tokens exactos de Stitch (`tailwind.config.ts`)
- **PWA**: `manifest.webmanifest`, service worker offline-first, iconos maskable, meta `apple-web-app`
- **Fuentes**: Libre Caslon Text (serif) + Manrope (sans) vía `next/font`; iconos Material Symbols
- **QR**: `qrcode` para la verificación del certificado

## Empezar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
npm run lint
```

## Rutas / Pantallas

| Ruta | Pantalla |
| --- | --- |
| `/` | Landing cinematográfica (hero, Why E7, Journey, CTA) |
| `/participate` | Niveles de participación ($16/$50/$100 + Auteur custom), resumen y checkout mock |
| `/productions` | Tracker de producciones (Development → Premiere) + stats |
| `/productions/[slug]` | Detalle de producción (SSG) |
| `/community` | Newsroom + comunidad de accionistas y niveles de reconocimiento |
| `/account` | Dashboard: resumen, bóveda de documentos, actividad, eventos |
| `/account/certificate` | Certificado oficial con verificación por QR |
| `/login`, `/register` | Auth visual (lista para Clerk) |
| `/admin` | Panel interno (producciones, KPIs) — `noindex` |
| `/offline` | Fallback offline del service worker |

Incluye estados de **loading**, **error** y **404** con la identidad de marca.

## Arquitectura

```
src/
  app/            # rutas (App Router), manifest, robots, sitemap
  components/
    layout/       # TopNav, BottomNav, Footer, AppShell
    ui/           # Button, CinematicImage, Icon, EmptyState, SectionHeading…
    participate/  # selector de niveles (client)
    productions/  # timeline tracker
    account/      # QR del certificado (client)
    auth/         # scaffold de autenticación
  lib/
    site.ts         # marca y navegación
    data.ts         # datos demo (la "costura" para el backend real)
    integrations.ts # flags y config de Clerk/Neon/Resend/Mercado Pago/Stripe
    utils.ts
```

Todo corre sobre **datos mock** (`lib/data.ts`) con la forma de tablas/endpoints reales, de modo
que conectar un backend es un reemplazo directo.

## Integraciones preparadas

Configuradas como _seams_ en `src/lib/integrations.ts` y documentadas en [`.env.example`](./.env.example):

- **Clerk** — autenticación (`/login`, `/register` ya apuntan al flujo)
- **Neon (PostgreSQL)** — base de datos
- **Resend** — correos (recibos, certificados)
- **Mercado Pago** — pagos en MXN (primario)
- **Stripe** — pagos internacionales (opcional)
- **QR** — ya funcional en el cliente para el certificado

> No se incluyen llaves reales. Copia `.env.example` a `.env.local` y completa los valores.

## Deploy en Vercel

El proyecto es Next.js estándar; Vercel lo detecta automáticamente.

1. Importa el repo en Vercel (Framework preset: **Next.js**, Root directory: `/`).
2. Build command `next build` e Install command `npm install` (defaults).
3. Añade las variables de entorno de `.env.example` que vayas a usar.
4. Deploy.

No se requiere `vercel.json` ni `output` especial. La app es mobile-first e instalable como PWA.
