<script lang="ts">
	import ExternalLink from '$lib/ExternalLink.svelte'

	const socials = [
		{
			href: 'mailto:contact@samanthanguyen.me',
			title: 'Email me at contact@samanthanguyen.me',
			text: 'Email',
		},
		{
			href: 'https://bsky.app/profile/samanthanguyen.me',
			title: '@samanthanguyen.me on Bluesky',
			text: 'Bluesky',
		},
		{
			href: 'https://github.com/neoncitylights',
			title: '@neoncitylights on GitHub',
			text: 'GitHub',
		},
	]
</script>

<footer class={[
	'flex flex-col lg:gap-6',
	'pt-4 border-t-2 border-t-zinc-950 dark:border-t-zinc-300',
	'font-mono'
]}>
	<span class={[
		'flex flex-row gap-4 lg:gap-6 justify-end',
	]}>
		{#each socials as link}
			<span>
				<ExternalLink
					href={link.href}
					id={`socials-anchor-${link.text.toLowerCase()}`}
					class={[
						'socials-anchor',
						'flex flex-row items-center gap-1 lg:gap-2',
						'text-xs lg:text-sm font-mono',
						'hover:bg-zinc-900 hover:text-zinc-100',
						'dark:hover:bg-zinc-100 dark:hover:text-zinc-900',
					]}
				>
					{`${link.text} \u{2197}`}
				</ExternalLink>
				<span
					class={[
						'socials-target hidden absolute p-2 mt-1',
						'bg-blue-600',
						'text-xs text-white',
					]}
					id={`socials-target-${link.text.toLowerCase()}`}
				>
					{link.title}
				</span>
			</span>
		{/each}
	</span>
</footer>

<style>
	.socials-target {
		position-area: bottom;
		position-visibility: no-overflow;
		box-shadow: 5px 5px #1e3a8a;
	}

	:global(#socials-anchor-email)   { anchor-name:       --email-anchor; }
	:global(#socials-target-email)   { position-anchor:   --email-anchor; }
	:global(#socials-anchor-bluesky) { anchor-name:     --bluesky-anchor; }
	:global(#socials-target-bluesky) { position-anchor: --bluesky-anchor; }
	:global(#socials-anchor-github)  { anchor-name:      --github-anchor; }
	:global(#socials-target-github)  { position-anchor:  --github-anchor; }
	:global(.socials-anchor:hover ~ .socials-target) {
		display: block;
	}
</style>
