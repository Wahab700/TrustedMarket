/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#E8192C',
          dark: '#B5121E',
          light: '#FF2D42',
        },
        black: {
          DEFAULT: '#0A0A0A',
          mid: '#111111',
          card: '#161616',
          border: '#222222',
        },
        offwhite: '#F5F5F5',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fadeUp': 'fadeUp 0.8s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,25,44,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(232,25,44,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      clipPath: {
        'logo': 'polygon(0 0, 100% 0, 100% 65%, 65% 100%, 0 100%)',
        'btn': 'polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
};
