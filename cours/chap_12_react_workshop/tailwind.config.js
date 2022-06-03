module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  plugins: [],
  theme: {
    extend: {
      minHeight: {
        96: '24rem',
      },
      colors: {
        background: '#f9f9f9',
      },
    },
  },
  variants: {
    extend: {},
  },
};
