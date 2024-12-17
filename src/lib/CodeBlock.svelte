<script lang='ts'>
	import { onMount } from 'svelte'
	import { createStarryNight } from '@wooorm/starry-night'
	import sourceTs from '@wooorm/starry-night/source.ts'
	import sourceJs from '@wooorm/starry-night/source.js'
	import sourceRust from '@wooorm/starry-night/source.rust'
	import { toHtml } from 'hast-util-to-html'
	import '@wooorm/starry-night/style/dark'

	type Language =
		| 'js'
		| 'ts'
		| 'rust'

	export let code: string
	export let language: Language = 'rust'
	let highlightedCode = ''

	onMount(async () => {
		const starryNight = await createStarryNight([
			sourceJs,
			sourceTs,
			sourceRust,
		])
		const normalizedCode = code.trim()
		const tree = starryNight.highlight(normalizedCode, `source.${language}`)
		highlightedCode = toHtml(tree)
	})
</script>
<!-- eslint-disable svelte/no-at-html-tags -->
<div class="font-mono text-sm bg-neutral-900 p-4 text-white">
	<pre>{@html highlightedCode}</pre>
</div>
