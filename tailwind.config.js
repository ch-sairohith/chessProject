/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('geoiq-frontend-ui-kit/dist/ui-kit-preset.js')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  // plugins: [],
}