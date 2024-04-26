import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'soccer-1': "url('/img/soccer-1.jpg')",
        'soccer-2': "url('/img/soccer-2.jpg')",
        'soccer-3': "url('/img/soccer-3.jpg')",
      },
    },
  },
  fontFamily: {
    'PartialSansKR-Regular': ['PartialSansKR-Regular'],
  },
  plugins: [],
};
export default config;
