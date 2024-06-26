/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      WavvePADO: ['WavvePADO-Regular'],
      'Giants-Inline': ['Giants-Inline'],
      MaruBuri: ['MaruBuri-Regular'],
    },
    extend: {
      height: {
        '460vh': '460vh',
        '400vh': '400vh',
        '340vh': '340vh',
        '300vh': '300vh',
        '230vh': '230vh',
        '200vh': '200vh',
        '180vh': '180vh',
        '170vh': '170vh',
        '150vh': '150vh',
        '120vh': '120vh',
      },
      backgroundImage: {
        'soccer-1': "url('/img/soccer-1.jpg')",
        'soccer-2': "url('/img/soccer-2.jpg')",
        'soccer-3': "url('/img/soccer-3.jpg')",
        'bg-img': "url('/img/bg-img.jpg')",
        'top-bg': "url('/img/top-bg.jpg')",
        'soccer-player': "url('/img/soccer-player.jpg')",
        'ask-bg': "url('/img/ask-bg.jpg')",
        'career-bg': "url('/img/career-bg.jpg')",
        player: "url('/img/player.jpg')",
      },
    },
  },
  plugins: [],
};
