module.exports = {
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
      },
      backgroundColor: {
        'header-color': '#fff',
        'footer-color': '#fff',
      },
      fontFamily: {
        custom: ['PlusJakartaSans'],
      },
      textColor: {
        'Titles': '#000', 
        'SubTitles': '#1c2a30', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
}