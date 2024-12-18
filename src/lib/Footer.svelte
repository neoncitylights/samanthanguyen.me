<script lang="ts">
	import { IconBrandBluesky, IconBrandGithubFilled, IconMailFilled } from '@tabler/icons-svelte'
	import { twJoin } from 'tailwind-merge'
    import ExternalLink from './ExternalLink.svelte'
</script>

<div class="h-0 lg:h-[1px] bg-separator-light dark:bg-separator-dark"></div>
<footer class={twJoin(
	"mt-[-1rem] lg:mt-0 flex flex-row justify-end",
)}>
	<span class="flex flex-row gap-4">
		<ExternalLink
			href="mailto:contact@samanthanguyen.me"
			title="Email me at contact@samanthanguyen.me">
			<IconMailFilled
				size={32}
				stroke={1}
				class={twJoin("fill-[#CFB4C5] dark:fill-neutral-300")} />
		</ExternalLink>
		<ExternalLink
			href="https://bsky.app/profile/samanthanguyen.me"
			title="@samanthanguyen.me on Bluesky">
			<IconBrandBluesky
				size={32}
				stroke={1}
				class={twJoin("text-[#CFB4C5] fill-[#CFB4C5]", "dark:text-neutral-300 dark:fill-neutral-300")} />
		</ExternalLink>
		<ExternalLink
			href="https://github.com/neoncitylights"
			title="@neoncitylights on GitHub">
			<IconBrandGithubFilled
				size={32}
				stroke={1}
				class={twJoin("fill-[#CFB4C5]", "dark:fill-neutral-300")} />
		</ExternalLink>
	</span>
</footer>
