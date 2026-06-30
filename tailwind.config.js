/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:      '#0B1F3F',  // deep navy, near-black — premium base
          midblue:   '#162B52',  // secondary panel blue
          lightblue: '#2C4A7C',  // accents, gradients
          gold:      '#8A5A33',  // dark luxury bronze/brown (replaces orange-gold)
          lightgold: '#C9986A',  // warm light bronze/caramel — hovers, highlights
          deepgold:  '#5C3A1E',  // espresso brown — deepest accent, borders
          cream:     '#EFE6D8',  // soft ivory for premium contrast text/backgrounds
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'carousel-in': 'fade-in 1.2s ease-in-out forwards',
        'carousel-out': 'fade-out 1.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
