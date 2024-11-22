import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ctm-yellow': '#E2DED6',
        'ctm-sky': '#00A5E3',
        'ctm-yellow-dark': '#EEEDE9',
        'ctm-dark': '#002331',
        'ctm-font-black': '#1D1D1D' 
      },
      screens: {
        'dl': '1170'
      },
      backgroundImage: {
        'custom-nav-gradient': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 93.89%)',
        'hero': "url('/assets/hero/hero.png')",
        'feature': "url('/assets/feature/feature.png')",
        'board-top': "url('/assets/board/container.png')",
        'multiboard-bg': "url('/assets/multiboard/bg.png')",
        'multiboard-right': "url('/assets/multiboard/right.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
