const { posix } = require("path");
const { rootCertificates } = require("tls");

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        letterSpacing: {
            tight: '-0.15em'
        },
        extend: {
            keyframes: {
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(360deg)'},
                }
            },
            animation: {
                'spin-slow': 'spin-slow 13s linear infinite',
                'webk': 'das'
            },
            height: {
                'half-screen': '50vh'
            }
        }
    },
    plugins: [],
  }