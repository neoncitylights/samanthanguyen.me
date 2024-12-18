import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Public Sans Variable', 'sans-serif'],
				domine: ['Domine Variable', 'serif'],
			},
			backgroundImage: {
				separator: 'linear-gradient(to right, transparent, #CFB4C5 50%, transparent)',
				darkSeparator: 'linear-gradient(to right, transparent, rgb(39 39 42), transparent)',
			}
		}
	},
	plugins: []
} satisfies Config;
