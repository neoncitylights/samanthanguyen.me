<script>
	import { IconBrandBluesky, IconBrandGithub } from '@tabler/icons-svelte'
	import { twJoin, twMerge } from 'tailwind-merge'
</script>

<section class="flex flex-col gap-6 lg:gap-8 selection:bg-pink-200 selection:text-pink-800">
	<header class="flex flex-col gap-2">
		<h1 class={twMerge(
			"pt-12 flex items-end",
		 	"text-2xl lg:text-4xl font-domine font-bold lg:font-medium",
		)}>
			samanthanguyen.me
		</h1>
		<span class={twJoin(
			"text-sm lg:text-base",
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
	<footer class={twJoin(
		"mt-[-1rem] lg:mt-0 pt-4 flex flex-row gap-4 justify-end",
		"border-0 lg:border-t border-zinc-300",
	)}>
		<a href="https://bsky.app/profile/samanthanguyen.me" title="@samanthanguyen.me on Bluesky">
			<IconBrandBluesky size={32} stroke={1} class="text-zinc-950 hover:fill-zinc-950" />
		</a>
		<a href="https://github.com/neoncitylights" title="@neoncitylights on GitHub">
			<IconBrandGithub size={32} stroke={1} class="text-zinc-950 hover:fill-zinc-950" />
		</a>
	</footer>
</section>
