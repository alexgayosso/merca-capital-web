# Merca Capital - Website v3.0 (FINAL)

Landing page institucional premium para Merca Capital.

## 🎨 Identidad Visual

**Paleta de Colores:**
- **Navy Deep:** `#000B29` — Fondo principal premium
- **Cobre/Dorado:** `#C08A3E` — Acentos de lujo
- **Cream:** `#F5F3EF` — Secciones claras

**Logos en `/public`:**
- `Original_Logo.png` — Logo principal (header)
- `Transparent_Logo_Blanco.png` — Logo claro (footer oscuro)

## ✅ Fixes Técnicos Aplicados

1. ✅ `'use client';` al inicio
2. ✅ Tipado estricto con `ContentStructure` completo (incluye `footer`)
3. ✅ Rutas de imágenes correctas (`/Original_Logo.png`, `/Transparent_Logo_Blanco.png`)
4. ✅ Iconos usan `React.ReactNode` (no `JSX.Element`)
5. ✅ CSS-in-JS integrado (no dependencias externas)
6. ✅ Bilingüe ES/EN con switch funcional

## 🚀 Quick Start

```bash
# Instalar
npm install

# Desarrollo
npm run dev

# Build (verificar que no hay errores)
npm run build

# Deploy
vercel --prod
```

## 📁 Estructura

```
mercacapital-final/
├── public/
│   ├── Original_Logo.png
│   └── Transparent_Logo_Blanco.png
├── src/app/
│   ├── page.tsx       # Landing completa
│   ├── layout.tsx     # Metadata SEO
│   └── globals.css    # Estilos base
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## 📊 Track Record Incluido

- **15+ años** de operación
- **52,000+ m²** desarrollados
- **90%** ocupación promedio
- **5** mercados construidos
- **300+** comerciantes activos

## ⚙️ Formspree

Reemplazar `YOUR_FORMSPREE_ID` en `page.tsx`:

```typescript
fetch('https://formspree.io/f/TU_ID_REAL', {...})
```

## 📧 Contacto

- hola@mercacapital.com
- +52 871 204 0725
