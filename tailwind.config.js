/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#FF0080",
        
"secondary": "#6477c9",
        
"accent": "#bf59db",
        
"neutral": "#1B2831",
        
"base-100": "#FFFFFF",
        
"info": "#88B5EC",
        
"success": "#1AC197",
        
"warning": "#B5690D",
        
"error": "#EB424D",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
