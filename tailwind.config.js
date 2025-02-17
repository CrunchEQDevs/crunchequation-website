// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition:{
        'leftCustom': '-40% 10%',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.55)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(90deg, #FFFFFF 13%, #DB7C22 38%, #DC6129 66%, #000000 100%)',
        'service-gradient': 'linear-gradient(0deg, #383838 13%, #DB7C22 38%, #DB7C22 66%, #DC6129 100%)',
        'custom-gradient': 'linear-gradient(90deg, #DC6129 0%, #DC6927 28%, #DC6D26 44%, #DB7125 60%, #DB7723 82%, #DB7923 89%, #DB7C22 100%)',
        'hero-gradient': 'linear-gradient(90deg, #fff 0%, #DB7C22 28%, #DC6129 44%, #000 60%)',
        'career-gradient': 'linear-gradient(to bottom, transparent 0%, #292929 90% )',
        'footer-gradient': 'linear-gradient(to bottom, #282828 90%, #000)',
        'services-bg': 'url(https://crunchequation.com/devit/assets/sitecrunch/services/LogoGrandeC.png)',
        'logoOpacity': 'url(https://crunchequation.com/devit/assets/sitecrunch/home/logoCopacity.png)',
        'contact-bg': 'url(https://crunchequation.com/devit/assets/sitecrunch/contact/bgContact3.png)',
        'careers-bg': 'url(https://crunchequation.com/devit/assets/sitecrunch/careers/careersimg.png)',
      },
      colors: {
        'primary': '#DB7C22',
        'pretoCinzento': '#383838',
        'branco': '#FFFFFF',
        'pretoQuase100': '#262626',
        'pretoClaro': '#3A3837',
        'laranja': '#DC6129',
        'transp': 'rgba(0, 0, 0, 0)',
        'footerBG': 'rgba(0,0,0, .5)',
        'cinza': '#8A8787',
        'blackBg': '#282828',
        'opacityOrangent': 'rgba(220, 97, 41, .7)',
        'aboutPopUp': 'rgba(57, 57, 57, .9)',
        'bgOpacity': 'rgba(0, 0, 0,0.8)',
      },     
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
