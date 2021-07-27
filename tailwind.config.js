module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ds: {
          verde: '#4caf50',
          azul: '#00acc1',
          rojo: '#d81b60',
          naranja: '#fb8c00',
          texto: '#212121',
          titulo: '#3c4858',
          subtitulo: '#999;',
          header: '#999',
        } 
      },
      fontFamily: {
        'muli': ['muli'],
        'roboto': ['roboto'],
        'roboto-mono': ['roboto-mono'],
        'source-sans-pro': ['source-sans-pro'],
        'roboto-condensed': ['roboto-condensed']
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.50rem'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}

