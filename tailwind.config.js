module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF5F0", // warm-gray-50
          100: "#F7E6D7", // warm-gray-100
          200: "#EDCCB0", // warm-gray-200
          300: "#D4A574", // warm-gray-300
          400: "#B8824A", // warm-gray-400
          500: "#8B4513", // saddle-brown
          600: "#7A3D11", // brown-600
          700: "#68350F", // brown-700
          800: "#562D0D", // brown-800
          900: "#45250B", // brown-900
        },
        secondary: {
          DEFAULT: "#6B8E23", // olive-drab
          50: "#F5F7F0", // green-50
          100: "#E8EFDB", // green-100
          200: "#D1DFB7", // green-200
          300: "#B5CF8E", // green-300
          400: "#94BF65", // green-400
          500: "#6B8E23", // olive-drab
          600: "#5F7F20", // green-600
          700: "#52701C", // green-700
          800: "#456018", // green-800
          900: "#385014", // green-900
        },
        accent: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FEFBF5", // yellow-50
          100: "#FDF4E0", // yellow-100
          200: "#FAE8C1", // yellow-200
          300: "#F5D89D", // yellow-300
          400: "#EFC574", // yellow-400
          500: "#DAA520", // goldenrod
          600: "#C4941D", // yellow-600
          700: "#AD821A", // yellow-700
          800: "#977117", // yellow-800
          900: "#805F14", // yellow-900
        },
        background: "#FFF8DC", // cornsilk
        surface: "#F5F5DC", // beige
        text: {
          primary: "#2F2F2F", // gray-800
          secondary: "#666666", // gray-500
        },
        success: "#228B22", // forest-green
        warning: "#FF8C00", // dark-orange
        error: "#CD5C5C", // indian-red
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'interactive': '0 6px 16px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'smooth': '300ms',
        'micro': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}