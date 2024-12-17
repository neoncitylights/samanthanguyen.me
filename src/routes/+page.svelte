<script>
	import Footer from '$lib/Footer.svelte'
	import { twJoin } from 'tailwind-merge'
</script>

<header class="flex flex-col gap-2">
	<h1 class={twJoin(
		"pt-12 flex items-end",
	 	"text-2xl lg:text-4xl font-domine font-bold lg:font-medium",
	)}>
		samanthanguyen.me
	</h1>
	<span class={twJoin(
		"text-sm lg:text-base dark:text-zinc-500",
		"font-domine",
	)}>
		she / her. artist, software engineer, aspiring computer scientist
	</span>
</header>
<main class="flex flex-col gap-8 lg:gap-12">
	<span class="flex flex-col gap-6 lg:gap-8 font-domine text-sm lg:text-base text-left lg:text-balance">
		<p>
			I've most recently worked as a Research Assistant
			at the Security & Privacy Research Lab
			of UT Arlington, from May 2024 to December 2024.
			My main interests mainly revolve in low-level programming,
			including compiler design, programming languages, operating
			systems, and graphics programming.
		</p>
		<p>
			Besides programming, I've enjoyed fine arts since I was a child,
			and hope to one day work in a field where I can combine both,
			such as a developer for a video game and/or video game engine.
			{`:-)`}
		</p>
	</span>
	<blockquote class="flex flex-col gap-2 italic font-sans text-sm">
		<p>
			"We adventure together, explore together, and capture wonderful memories together.
			In the journeys to come, we will "trailblaze" more beautiful moments, preserving
			them with our camera, our eyes, and our hearts."
		</p>
		<cite class="text-right">—Honkai Star Rail</cite>
	</blockquote>
</main>
<Footer />
