import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Public Sans Variable', 'sans-serif'],
				domine: ['Domine Variable', 'serif'],
			}
		}
	},
	plugins: []
} satisfies Config;
