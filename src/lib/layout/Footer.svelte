<script lang="ts">
	import ExternalLink from '$lib/ExternalLink.svelte'
	import { IconArrowUpRight } from '@tabler/icons-svelte'

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
		'',
	]}>
		{#each socials as link}
			<ExternalLink
				href={link.href}
				title={link.title}
				class={[
					'flex flex-row items-center gap-0.5 lg:gap-1',
					'text-xs lg:text-sm font-mono',
					'hover:bg-zinc-900 hover:text-zinc-100',
					'dark:hover:bg-zinc-100 dark:hover:text-zinc-900',
				]}
			>
				{link.text}<IconArrowUpRight size={20} />
			</ExternalLink>
		{/each}
	</span>
</footer>
