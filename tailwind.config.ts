import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#080b14', panel: '#111827', accent: '#7c3aed', electric: '#38bdf8' }, boxShadow: { glow: '0 0 45px rgba(56,189,248,.12)' } } }, plugins: [] };
export default config;
