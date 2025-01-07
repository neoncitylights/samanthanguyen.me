import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Public Sans Variable', 'sans-serif'],
				serif: ['Domine Variable', 'serif'],
				mono: ['Departure Mono', 'monospace'],
			},
		},
	},
	plugins: [],
} satisfies Config
