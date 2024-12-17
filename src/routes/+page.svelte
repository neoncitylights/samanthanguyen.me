<script>
	import { IconBrandBluesky, IconBrandGithub } from '@tabler/icons-svelte'
	import { twMerge } from 'tailwind-merge'
</script>
<section class="flex flex-col gap-8">
	<header class="flex flex-col gap-2">
		<h1 class={twMerge(
			"h-[200px] flex items-end",
		 	"text-4xl font-domine",
		)}>
			samanthanguyen.me
		</h1>
		<span class="font-domine">she/her. artist, software engineer, aspiring computer scientist</span>
	</header>
	<main class="flex flex-col gap-4">
		<p class="font-domine">
			I've most recently worked as a Research Assistant
			at the Security & Privacy Research Lab
			of UT Arlington, from May 2024 to December 2024.
			My main interests mainly revolve in low-level programming,
			including compiler design, programming languages, operating
			systems, and graphics programming.
		</p>
		<p class="font-domine">
			Besides programming, I've enjoyed fine arts since I was a child,
			and hope to one day work in a field where I can combine both,
			such as a developer for a video game and/or video game engine.
			{`:-)`}
		</p>
		<blockquote class="italic font-sans text-sm mt-8">
			<p>
				"We adventure together, explore together, and capture wonderful memories together.
				In the journeys to come, we will "trailblaze" more beautiful moments, preserving
				them with our camera, our eyes, and our hearts."
			</p>
			<cite class="text-right">—Honkai Star Rail</cite>
		</blockquote>
	</main>
	<footer class="border-t-2 border-zinc-300 pt-4 flex flex-row gap-4 justify-end">
		<a href="https://bsky.app/profile/samanthanguyen.me" title="@samanthanguyen.me on Bluesky">
			<IconBrandBluesky size={32} stroke={1} class="text-zinc-950" />
		</a>
		<a href="https://github.com/neoncitylights" title="@neoncitylights on GitHub">
			<IconBrandGithub size={32} stroke={1} class="text-zinc-950" />
		</a>
	</footer>
</section>
