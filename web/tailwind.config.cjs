/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/fundo.png')",
        gradient1:
          "linear-gradient(89.86deg,  #9572fc 23.08%, #E1D55D 44.57%, #43E7AD 33.94%)",
        gradient2:
          "linear-gradient(188deg,  rgba(0,0,0,0) 0%, rgba(0,0,0,1) 67.08%)",
      },
    },
  },
  plugins: [],
};
