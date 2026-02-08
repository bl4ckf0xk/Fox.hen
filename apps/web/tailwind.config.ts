import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-highlight': 'var(--surface-highlight)',
        primary: 'var(--primary)',
        'stealth-green': 'var(--stealth-green)',
        'alert-red': 'var(--alert-red)',
        'text-muted': 'var(--text-muted)',
      },
    },
  },
  plugins: [],
}

export default config
