/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}




module.exports = {

  content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]

}

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}

module.exports = {

  content: [
      "./node_modules/flowbite/**/*.js"
  ]

}