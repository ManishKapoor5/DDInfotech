/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   
    extend: {
      fontSize: {
        's': '1.125em',
        
      },
      width: {
        'sl': '1181px',
        'smd': '900px',
        'sss' : '300px',
      },
      colors: {
        'custom-silver': '#c5c5c5',
        'custom-black' : '#121212',
        'custom-blackbg': '#1a1e23',
      },
    },
    
  },
  plugins: [require("daisyui")],
  
}