import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff41',
          dark: '#00cc33',
          light: '#39ff14',
        },
        secondary: {
          DEFAULT: '#00ff88',
        },
        accent: {
          DEFAULT: '#0dff92',
        },
        // Colores originales de los logos de tecnologías
        tech: {
          python: '#3776AB',
          django: '#092E20',
          flask: '#02569B',
          java: '#007396',
          spring: '#6DB33F',
          react: '#61DAFB',
          angular: '#DD0031',
          nextjs: '#02569B',
          flutter: '#02569B',
          mongodb: '#47A248',
          postgresql: '#336791',
          docker: '#2496ED',
          thingspeak: '#F15A29',
          n8n: '#EA4B71',
          arduino: '#00979D',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        code: ['var(--font-fira-code)', 'monospace'],
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      boxShadow: {
        'glow-sm': '0 2px 8px rgba(0, 255, 65, 0.1)',
        'glow-md': '0 4px 15px rgba(0, 255, 65, 0.2)',
        'glow-lg': '0 8px 25px rgba(0, 255, 65, 0.25)',
        'glow-xl': '0 15px 40px rgba(0, 255, 65, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 65, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
