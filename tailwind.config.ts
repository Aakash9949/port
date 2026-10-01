import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] }, colors: { ink: '#0b0c10', panel: '#12141b', accent: '#b7ff5a' }, boxShadow: { glow: '0 0 60px rgba(183,255,90,.12)' } } }, plugins: [] };
export default config;
