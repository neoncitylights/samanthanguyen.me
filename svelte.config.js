import { mdsvex } from 'npm:mdsvex'
import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		// https://svelte.dev/docs/kit/adapters
		// https://svelte.dev/docs/kit/adapter-cloudflare
		adapter: adapter(),
	},
	extensions: ['.svelte', '.svx'],
}

export default config
