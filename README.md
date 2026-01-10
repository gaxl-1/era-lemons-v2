# 🍋 ERA LEMONS - Sitio Web Oficial

[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Sitio web oficial de la comunidad gaming **ERA LEMONS**. Una plataforma moderna y dinámica para conectar a nuestra comunidad de jugadores de Minecraft, Roblox, Among Us, y Clash Royale.

## ✨ Características

- 🎮 **Sección de Juegos**: Minecraft, Roblox, Among Us, Clash Royale
- 👥 **Staff Completo**: 9 miembros del equipo con roles y avatares
- 📅 **Calendario de Eventos**: Sistema de timeline para eventos próximos
- 🏆 **Muro de la Fama**: Galería de los mejores momentos de la comunidad
- 📸 **Galería de Eventos**: 8+ fotos de eventos pasados
- 💬 **Widget de Discord**: Stats en vivo del servidor
- 🌐 **Totalmente en Español**: Contenido localizado para nuestra comunidad
- 📱 **Responsive**: Diseño optimizado para móvil, tablet y desktop
- ⚡ **Optimizado**: Lazy loading, imágenes en WebP, animaciones fluidas

## 🚀 Tech Stack

- **Framework**: React 18.3 + Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Animaciones**: Framer Motion 11.3
- **Routing**: React Router DOM 7.11
- **Icons**: React Icons 5.5
- **Optimización**: WebP images, code splitting, lazy loading

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gaxl-1/era-lemons-v2.git
cd era-lemons-v2

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo en http://localhost:5173
- `npm run build` - Crea build de producción en `/dist`
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecuta ESLint

## 🗂️ Estructura del Proyecto

```
era-lemons-v2/
├── public/
│   └── assets/          # Imágenes optimizadas (WebP)
│       ├── events/      # Fotos de eventos (8 imágenes)
│       ├── games/       # Icons y backgrounds de juegos
│       └── logo.webp    # Logo principal
├── src/
│   ├── components/      # 10 componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── GamesSection.jsx
│   │   ├── FameWall.jsx
│   │   ├── EventCalendar.jsx
│   │   ├── Staff.jsx
│   │   ├── Gallery.jsx
│   │   ├── Footer.jsx
│   │   └── DiscordWidget.jsx
│   ├── layouts/
│   │   └── Layout.jsx   # Layout con particle background
│   ├── App.jsx          # Router principal
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globales + Tailwind
├── tailwind.config.js   # Tema personalizado
└── vite.config.js
```

## 🎨 Tema Visual

- **Paleta**: Dark mode con acentos morado/cyan (Gaming Nebula)
- **Gradientes**: Texto animado, botones glassmorphism
- **Animaciones**: Spring physics, scroll-triggered reveals
- **Tipografía**: Sistema de fuentes optimizado

## 🌐 Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Hero + Juegos + Muro de Fama |
| `/about` | About | Historia y valores de la comunidad |
| `/staff` | Staff | Equipo de 9 miembros |
| `/calendar` | EventCalendar | Próximos eventos |
| `/events` | Gallery | 8 fotos de eventos pasados |
| `/games` | GamesSection | Juegos destacados |
| `/fame` | FameWall | Muro de la fama (4 destacados) |

## 🔗 Links Importantes

- **Discord**: [discord.gg/Jy5n6Nd6](https://discord.gg/Jy5n6Nd6)
- **TikTok**: [@lmns154](https://www.tiktok.com/@lmns154?_r=1&_t=ZS-92mQQvjgSum)
- **GitHub**: [gaxl-1/era-lemons-v2](https://github.com/gaxl-1/era-lemons-v2)

## 👥 Staff

- 👑 **Owners**: Eneeros, Alexis
- 💻 **Support & Developer**: GaelDev
- 🛡️ **Support Manager**: TCH
- 💰 **Founder Money**: Lenin
- 🔥 **Administrador**: Luis
- 🤝 **Helper Staff**: Edwin
- 🌟 **Colaborador**: Ale
- 🎬 **Editor Maker**: Fer

## 📅 Eventos Próximos

- 🎮 **Evento Roblox** - Sábado 10 ENE, 8 PM MX
- 🏗️ **Nuevo Servidor Minecraft** - Survival Vanilla (Java + Bedrock) - Próximamente

## 🚀 Deployment

El sitio está configurado para deploy automático en **Vercel**:

1. Conecta el repo de GitHub a Vercel
2. Configura el proyecto como **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy automático en cada push a `main`

## 🛠️ Optimizaciones Implementadas

- ✅ Lazy loading de rutas con React.lazy()
- ✅ 18 imágenes convertidas a WebP (~40-60% más ligeras)
- ✅ Code splitting automático por Vite
- ✅ Animaciones optimizadas con Framer Motion
- ✅ Discord Widget con caching de 60s
- ✅ Particle background con memoización

## 📝 Changelog

### V2.0 (Enero 2026)
- ✨ Rebuild completo con React + Vite
- 🎨 Nuevo diseño gaming con animaciones premium
- 📱 Multi-página con React Router
- 🌐 100% traducido al español
- 👥 Staff actualizado (9 miembros)
- 📅 Sistema de eventos dinámico
- 🏆 Muro de la fama con fotos reales
- ⚡ Optimización total (WebP, lazy loading)
- 🔗 Links de redes sociales actualizados

## 📄 Licencia

MIT © 2026 ERA LEMONS

## 🤝 Contribuciones

Este es el sitio oficial de la comunidad ERA LEMONS. Para sugerencias o reportes de bugs, contacta al staff en Discord.

---

**Hecho con 💜 por GaelDev para la comunidad ERA LEMONS** 🍋
