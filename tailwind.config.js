/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    450: '#5F99F7'
                },
            }
        },
    },
    plugins: [],
}