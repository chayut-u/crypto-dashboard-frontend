import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        card: '#0f172a',
        border: '#1e293b',
        muted: '#94a3b8',
        accent: '#22c55e',
      },
    },
  },
  plugins: [],
};

export default config;
