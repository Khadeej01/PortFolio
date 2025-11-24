/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',
        'surface-strong': 'var(--surface-strong)',
        brand: '#2563eb',
        'brand-accent': '#0ea5e9'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        floating: '0 35px 120px rgba(15, 23, 42, 0.25)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 0.35, transform: 'scale(1.15)' }
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease forwards',
        'fade-in': 'fade-in 1s ease forwards'
      },
      backdropBlur: {
        xl: '28px'
      }
    }
  },
  plugins: []
};

