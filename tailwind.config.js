/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,hbs}'],
    theme: {
        extend: {
            boxShadow: {
                search: '0 1px 6px rgb(32 33 36 / 28%)',
                'normal-search': '0 2px 5px 1px rgb(64 60 67 / 16%)',
                'fixed-header': '0 1px 6px 0 rgb(32 33 36 / 28%)',
            },
        },
        colors: {
            'gray-light': '#dfe1e5',
        },
        fontFamily: {
            arial: ['arial', 'sans-serif'],
        },
    },
    plugins: [],
};
