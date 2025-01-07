<script>
	import Footer from '$lib/layout/Footer.svelte'
	import Header from '$lib/layout/Header.svelte'
	import Quote from '$lib/Quote.svelte'
</script>

<Header />
<main class="flex flex-col gap-8 lg:gap-12 font-mono">
	<span class={[
		'flex flex-col gap-6 lg:gap-8',
		'text-xs leading-snug',
		'lg:text-base lg:leading-tight',
		'text-balance',
	]}>
		<p>
			I've most recently worked as a Research Assistant
			at the Security & Privacy Research Lab
			of UT Arlington, from May 2024 to December 2024.
			My main interests mainly revolve in low-level programming,
			including
			<span class="bg-yellow-400 text-zinc-900">compiler design</span>,
			<span class="bg-blue-600 text-zinc-100">programming languages</span>,
			<span class="bg-red-600 text-zinc-100">operating systems</span>, and
			<span class="bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">graphics programming</span>.
		</p>
		<p>
			Besides programming, I've enjoyed fine arts since I was a child,
			and hope to one day work in a field where I can combine both,
			such as a developer for a video game and/or video game engine.
			Here's to the future!
		</p>
	</span>
	<Quote author="Honkai Star Rail">
		We adventure together, explore together, and capture wonderful memories together.
		In the journeys to come, we will "trailblaze" more beautiful moments, preserving
		them with our camera, our eyes, and our hearts.
	</Quote>
</main>
<Footer />
