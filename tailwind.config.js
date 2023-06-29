module.exports = {
    plugins: [{
        tailwindcss: {},
        "tailwindcss/nesting": {},
        autoprefixer: {}
    }],
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#dc3545',
                dark: '#333333',
                light: '#f4f4f4',
                danger: '#dc3545',
                success: '#28a745'
            }
        },
    }
}
