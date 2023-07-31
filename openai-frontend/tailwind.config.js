/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#010C15',
        'bordercolor': '#1E2D3D',
        'textcolor':'#607B96',
        'bgchat':'#011221',
        'textcolor2':'#c7c5c5',
      },
    },
  },
  plugins: [],
}

