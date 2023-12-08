/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'fsm':'480px'
    },
   
    extend: {
      fontFamily:{
        yek : ['yek'],
        dow : ['dow'],
        sew : ['sew'],
        chahar : ['chahar'],
        panj : ['panj']
        
  
      },
      
    },
  },
  plugins: [],
}