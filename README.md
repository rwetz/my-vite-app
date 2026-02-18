# Personal Website

A modern, animated personal website built with React and Vite, featuring interactive WebGL backgrounds, custom cursor effects, and smooth page transitions.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP, Motion (Framer Motion)
- **3D/WebGL**: Three.js, @react-three/fiber, @react-three/drei
- **Routing**: React Router DOM
- **UI Components**: shadcn/ui
- **Package Manager**: npm

## 📁 Project Structure

```
my-vite-app/
├── public/
├── src/
│   ├── assets/
│   │   └── signature.png        # Logo signature image
│   ├── components/
│   │   ├── Cubes.jsx            # Interactive 3D cube grid
│   │   ├── GradientText.jsx     # Animated gradient text
│   │   ├── Logo.jsx             # Fixed top-left signature logo
│   │   ├── MagicBento.jsx       # Interactive bento card grid
│   │   ├── MagnetLines.jsx      # Magnetic line corner effect
│   │   ├── PixelTrail.jsx       # Cursor pixel trail effect
│   │   ├── Silk.jsx             # Animated WebGL silk background
│   │   ├── StaggeredMenu.jsx    # Animated slide-in nav panel
│   │   └── TargetCursor.jsx     # Custom snapping cursor
│   ├── pages/
│   │   ├── About.jsx            # About page with MagicBento
│   │   └── Home.jsx             # Home page with StaggeredMenu
│   ├── styles/
│   │   └── button.css           # Enter button animations
│   ├── App.jsx                  # Welcome/intro page + routing
│   ├── index.css                # Global styles + Tailwind import
│   └── main.jsx                 # React entry point
├── components.json              # shadcn/ui config
├── tsconfig.json                # TypeScript config (for shadcn)
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.js
└── package.json
```

## 🎨 Color Palette

A custom teal palette used throughout the site, dark to light:

| Name | Hex |
|------|-----|
| Deep Black Teal | `#002B33` |
| Deep Teal | `#004D5C` |
| Dark Cyan | `#007A8A` |
| Mid Cyan | `#00A8B5` |
| Bright Cyan | `#00CDD6` |
| Light Cyan | `#00E5EE` |
| Pale Mint | `#7EEEE8` |
| White Mint | `#B2F5F0` |

## 📄 Pages

### Welcome (`/`)
- Animated **Silk** WebGL background in deep teal
- Large animated **GradientText** "Welcome." headline
- Pulsing **Enter** button with glow animation
- Custom **TargetCursor** that snaps to the Enter button

### Home (`/home`)
- Blurred Silk background
- **StaggeredMenu** navigation panel (slides in from right)
- Links to About, Projects, and Contact pages
- Signature **Logo** in top left

### About (`/about`)
- Blurred Silk background
- **MagicBento** interactive card grid with:
  - 📄 Resume
  - 💻 Skills
  - 🎓 Education
  - 🚀 Projects
  - 🌱 Currently Learning
  - 📬 Contact
- Signature **Logo** in top left

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rwetz/my-vite-app.git
cd my-vite-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## 📦 Dependencies

```json
{
  "@react-three/drei": "^9.x",
  "@react-three/fiber": "^9.x",
  "gsap": "^3.x",
  "motion": "^11.x",
  "react-router-dom": "^7.x",
  "three": "^0.x"
}
```

## 🔧 Component Sources

Several components were sourced and adapted from [React Bits](https://www.reactbits.dev/):
- Silk — WebGL animated background
- PixelTrail — cursor trail effect
- Cubes — interactive 3D cube grid
- GradientText — animated gradient text
- MagnetLines — magnetic line effect
- TargetCursor — custom cursor
- StaggeredMenu — animated navigation
- MagicBento — interactive bento grid

## 📝 Notes

- The project uses **JavaScript** (not TypeScript), but includes `tsconfig` files required by shadcn/ui
- Tailwind CSS v4 uses `@import "tailwindcss"` instead of the legacy `@tailwind` directives
- `@react-three/fiber` and `@react-three/drei` versions must be compatible with the React version in use