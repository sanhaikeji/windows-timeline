# Windows Timeline

An interactive, scroll-driven cinematic timeline showcasing 40 years of Windows evolution from MS-DOS (1985) to Windows 11 (2025).
![Read Chinese](https://github.com/sanhaikeji/windows-timeline/blob/master/README_CN.md)
## Features

- **🎨 Cinematic Experience**: Scroll-driven animations with glass morphism effects
- **🔊 Authentic Audio**: Era-specific startup sounds with Howler.js
- **🎮 Interactive Elements**: 
  - Start buttons with particle explosions
  - Windows 8 Metro tiles with 3D flip animations
  - Win+R Run dialog with easter eggs
- **⚡ Performance Optimized**: 
  - Automatic particle count adjustment based on FPS
  - GPU-accelerated Three.js rendering
  - Lighthouse score ≥ 95 on mobile & desktop
- **♿ Accessibility**: AAA compliant with reduced motion support
- **📱 Responsive**: Optimized for all screen sizes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.2
- **3D Graphics**: Three.js r160 + React Three Fiber
- **Audio**: Howler.js 2.2
- **State Management**: Zustand 4.5
- **Performance**: Web Vitals monitoring

## Getting Started

### Prerequisites

- Node.js ≥ 18.0.0
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/windows-timeline.git
cd windows-timeline

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Building for Production

```bash
# Build the project
pnpm build

# Export static files
pnpm export

# Test with Lighthouse CI
pnpm lh
```

## Project Structure

```
windows-timeline/
├── app/
│   └── windows-timeline/
│       ├── page.tsx          # Main timeline page
│       └── loading.tsx       # Loading screen
├── components/
│   ├── sections/             # Era-specific sections
│   │   ├── Section.tsx       # Generic section wrapper
│   │   ├── DosSection.tsx    # MS-DOS (1985)
│   │   ├── 95Section.tsx     # Windows 95 (1995)
│   │   ├── XPSection.tsx     # Windows XP (2001)
│   │   ├── VistaSection.tsx  # Windows Vista (2007)
│   │   ├── Win8Section.tsx   # Windows 8 (2012)
│   │   └── Win11Section.tsx  # Windows 11 (2021)
│   ├── ui/
│   │   ├── GlassWindow.tsx   # Acrylic window component
│   │   ├── StartButton.tsx   # Era-specific start buttons
│   │   ├── MetroTile.tsx     # Windows 8 tiles
│   │   └── RunDialog.tsx     # Run dialog with easter eggs
│   └── canvas/
│       ├── WallpaperMorph.tsx # Three.js wallpaper transitions
│       └── ParticleExplosion.tsx # GPU particle system
├── hooks/
│   ├── useTimelineStore.ts   # Zustand state management
│   ├── useStartupSound.ts    # Audio management
│   ├── useGlobalHotkey.ts    # Keyboard shortcuts
│   ├── useParallaxParticles.ts # Background particles
│   └── useFPS.ts            # Performance monitoring
├── lib/
│   ├── animations/
│   │   ├── variants.ts       # Framer Motion variants
│   │   └── gradients.ts      # Color interpolation
│   └── constants.ts          # Configuration constants
├── public/
│   ├── sounds/              # Startup audio files
│   │   ├── 95.ogg
│   │   ├── xp.ogg
│   │   └── 11.ogg
│   └── wallpapers/          # Era wallpapers
│       ├── dos-black.webp
│       ├── xp-bliss.webp
│       └── 11-bloom.webp
└── styles/
    └── windows.css          # Custom styles & fonts
```

## Key Features Implementation

### Scroll-Driven Timeline
- Uses Framer Motion's `useScroll` hook
- Smooth section transitions with `scrollIntoView`
- Progress-based background color interpolation

### Audio System
- Howler.js for cross-browser audio
- User interaction requirement for audio context
- Automatic cleanup and memory management

### Three.js Integration
- Wallpaper morphing with custom shaders
- GPUComputationRenderer for particles
- Automatic performance scaling

### Performance Optimizations
- FPS monitoring with automatic particle reduction
- Lazy loading of non-critical sections
- GPU acceleration hints
- Reduced motion support

## Adding a New Era

To add Windows 12 (future version):

1. **Add constants** in `/lib/constants.ts`:
```typescript
{ id: '12', name: 'Windows 12', year: 2025, color: '#00a8ff' }
```

2. **Create section component** in `/components/sections/Win12Section.tsx`

3. **Generate assets**:
   - Wallpaper: `/public/wallpapers/12-hero.webp`
   - Sound: `/public/sounds/12.ogg`

4. **Import and add** to main page

## Performance Metrics

Target Lighthouse scores:
- **Performance**: ≥ 95
- **Accessibility**: ≥ 95  
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

Bundle size: ≤ 250KB gzipped

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details

## Credits

- Windows and Microsoft are trademarks of Microsoft Corporation
- This is a fan project celebrating Windows history
- All assets are either generated or used under fair use for educational purposes

---

**Windows Timeline** - Celebrating 40 years of innovation (1985-2025)
