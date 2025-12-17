import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        windows: {
          dos: '#0a0a0a',
          '95': '#008080',
          '98': '#4682b4',
          me: '#4169e1',
          xp: '#228b22',
          vista: '#1ba1e2',
          '7': '#436eee',
          '8': '#00bcf2',
          '10': '#0078d4',
          '11': '#0067c0',
        }
      },
      animation: {
        'crt-shake': 'crtShake 0.24s linear',
        'bloom-pulse': 'bloomPulse 4s ease-in-out infinite',
      },
      keyframes: {
        crtShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-0.2px)' },
          '50%': { transform: 'translateX(0.2px)' },
          '75%': { transform: 'translateX(-0.2px)' },
        },
        bloomPulse: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 24px currentColor)' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 40px currentColor)' 
          },
        }
      },
      backdropBlur: {
        xs: '2px',
        xl: '24px',
      },
      fontFamily: {
        'ms-sans': ['MS Sans Serif', 'sans-serif'],
        'segoe-ui': ['Segoe UI', 'system-ui', 'sans-serif'],
        'segoe-variable': ['Segoe UI Variable', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;