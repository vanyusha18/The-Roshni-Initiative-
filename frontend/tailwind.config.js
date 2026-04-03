/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roshni: {
          green: '#2e7d32', // Growth, trust
          teal: '#00838f', // Freshness, digital
          amber: '#ffb300', // Hope/light
          sand: '#f5f5dc', // Rural feel
          ink: '#263238' // Contrast
        }
      },
      fontFamily: {
        sans: ['Hind', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
