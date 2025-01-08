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
			backgroundImage: {
				'pattern-dots-sm': 'radial-gradient(currentColor 0.5px, transparent 0.5px)',
				'diagonal-lines-sm': 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
			},
		},
	},
	plugins: [],
} satisfies Config
