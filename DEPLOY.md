# 🚀 Despliegue en Vercel

Tu portfolio está listo para desplegarse en Vercel. Sigue estos pasos:

## Opción 1: Despliegue Automático desde GitHub

1. Ve a [vercel.com](https://vercel.com) e inicia sesión (o crea una cuenta)
2. Click en **"Add New..." → "Project"**
3. Importa tu repositorio: `edben110/Protfolio-Next`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configuración recomendada:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.next` (automático)
   - **Install Command:** `npm install` (automático)
6. Click en **"Deploy"**
7. ¡Listo! Tu sitio estará en línea en ~2 minutos

## Opción 2: Despliegue desde CLI

```bash
# Instala Vercel CLI globalmente
npm i -g vercel

# En la carpeta del proyecto
cd portfolio-nextjs

# Despliega
vercel

# Para producción
vercel --prod
```

## Variables de Entorno (Si las necesitas)

Si en el futuro agregas variables de entorno, configúralas en:
- Panel de Vercel → Settings → Environment Variables

## URLs del Proyecto

- **Repositorio GitHub:** https://github.com/edben110/Protfolio-Next
- **Vercel:** Se generará automáticamente después del despliegue

## Actualizaciones Futuras

Cada vez que hagas `git push` a la rama `main`, Vercel desplegará automáticamente los cambios.

---

✨ Tu portfolio incluye:
- ✅ Next.js 15 con App Router
- ✅ Tailwind CSS
- ✅ TypeScript
- ✅ Efecto holográfico en la foto de perfil
- ✅ Efecto Matrix Rain
- ✅ Diseño completamente responsivo
- ✅ Optimizado para SEO
- ✅ Colores originales de logos tecnológicos
