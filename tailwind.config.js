/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [require('tailwindcss-primeui')],
    theme: {
        screens: {
            xs: '400px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1410px',
            '2xl': '1920px'
        }
    }
};
