/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(220, 20%, 98%)',
        foreground: 'hsl(225, 10%, 25%)',
        muted: 'hsl(225, 10%, 50%)',
        accent: 'hsl(170, 80%, 40%)',
        primary: 'hsl(220, 95%, 45%)',
        surface: 'hsl(0, 0%, 100%)',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      boxShadow: {
        lg: '0 10px 15px -3px hsla(0,0%,0%,0.1), 0 4px 6px -4px hsla(0,0%,0%,0.1)',
        md: '0 4px 6px -1px hsla(0,0%,0%,0.1), 0 2px 4px -2px hsla(0,0%,0%,0.1)',
        sm: '0 1px 3px 0px hsla(0,0%,0%,0.08)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
