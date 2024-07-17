/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883'
                },
            },
            fontFamily: {
                body: ['Nunito'],
            },
            keyframes: {
                appear: {
                    '0%': { opacity: '0.25'},
                    '100%': {opacity: '1'},
                } 
            },
            animation: {
                appear: 'appear 1s ease-in-out',
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        }
    },
    plugins: [],
}

