module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
    variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}