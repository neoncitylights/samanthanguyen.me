<script lang="ts">
	let { heading, subheading }: {
		heading: string
		subheading: string
	} = $props()
</script>
<header class="pt-12">
	<hgroup class="flex flex-col gap-1">
		<h1 class={[
			'text-2xl lg:text-4xl',
			'font-mono font-bold lg:font-medium',
		]}>
			{heading}
		</h1>
		<p class={[
			'font-mono text-balance text-xs lg:text-base',
			'dark:text-zinc-400',
		]}>
			{subheading}
		</p>
	</hgroup>
</header>
