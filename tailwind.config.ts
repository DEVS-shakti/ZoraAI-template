import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0e27',
        'darker': '#05070f',
        'accent-purple': '#a855f7',
        'accent-cyan': '#06b6d4',
        'accent-blue': '#3b82f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        'glow-blue': 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}

export default config
