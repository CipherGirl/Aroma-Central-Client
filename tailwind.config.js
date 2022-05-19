module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut .3s ease',
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
};
