/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        'brand-orange': '#C85A1A',
        'brand-green':  '#1A7A4A',
        'brand-gold':   '#E8B84B',
        'brand-red':    '#D94F3D',

        // Light theme surfaces — warm, rich, layered
        'warm-white':   '#F5EDD8',   // parchment base
        'warm-card':    '#FDF6E8',   // slightly lighter card
        'warm-section': '#EDE0C4',   // deeper section bg
        'warm-border':  '#D9C9A8',   // warm tan border
        'warm-text':    '#2C1F0E',   // deep espresso text
        'warm-muted':   '#8A7055',   // muted warm brown

        // Dark theme surfaces — unchanged
        'warm-dark':    '#12100E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
