/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#A78BFA',
                    DEFAULT: '#8B5CF6',
                    dark: '#7C3AED',
                },
                secondary: '#EC4899',
                accent: '#F59E0B',
                dark: {
                    bg: '#0F0F1E',
                    card: '#1E1B4B',
                },
                discord: '#5865F2',
                tiktok: {
                    cyan: '#00F2EA',
                    pink: '#FF0050',
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'tilt': 'tilt 10s infinite linear',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
                    '50%': { opacity: '.5', boxShadow: '0 0 10px rgba(139, 92, 246, 0.2)' },
                },
            }
        },
    },
    plugins: [],
}
