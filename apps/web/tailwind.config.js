/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        cyber: {
          black: '#0a0a0a',
          gunmetal: '#2a3439',
          silver: '#c0c0c0',
          blue: '#2563eb',
        },
      },
      backgroundColor: {
        'cyber-black': '#0a0a0a',
        'cyber-gunmetal': '#2a3439',
      },
      textColor: {
        'cyber-silver': '#c0c0c0',
        'cyber-blue': '#2563eb',
      },
    },
  },
  plugins: [],
}
