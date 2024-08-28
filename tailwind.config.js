/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04',
        105: '1.05',
        106: '1.06',
        107: '1.07',
        108: '1.08',
        109: '1.09',
        110: '1.1',
      },
      dropShadow: {
        white: '0px 0px 15px #a4a6b2',
        neon: '0px 0px 3px #06b6d4',
      },
      colors: {
        Anatonelly: {
          Primary: '#0c0035',
          Secundary: '#0a0129',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        truckInicial: "url('/InicialScreen/BgCaminhao.png')",
        AboutUs: "url('/AboutUs/BgNossosNumeros.png')",
        AnatonellyLLC: "url('/AnatonellyLLC/aboutUsLLC.jpg')",
        Global: "url('/GlobalTransportes/GlobalTransportes.svg')",
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      screens: {
        xxs: '280px',
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        fadeIn: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
