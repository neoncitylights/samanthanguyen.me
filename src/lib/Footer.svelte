<script lang="ts">
	import { IconBrandBluesky, IconBrandGithubFilled, IconMailFilled } from '@tabler/icons-svelte'
	import { twJoin } from 'tailwind-merge'
</script>

<footer class={twJoin(
	"mt-[-1rem] lg:mt-0 pt-4 flex flex-row justify-end",
	"border-0 lg:border-t border-[#CFB4C5] dark:border-zinc-800",
)}>
	<span class="flex flex-row gap-4">
		<a href="mailto:contact@samanthanguyen.me" title="Email me at contact@samanthanguyen.me">
			<IconMailFilled
				size={32}
				stroke={1}
				class={twJoin("fill-[#CFB4C5] dark:fill-neutral-300")} />
		</a>
		<a href="https://bsky.app/profile/samanthanguyen.me" title="@samanthanguyen.me on Bluesky">
			<IconBrandBluesky
				size={32}
				stroke={1}
				class={twJoin("text-[#CFB4C5] fill-[#CFB4C5]", "dark:text-neutral-300 dark:fill-neutral-300")} />
		</a>
		<a href="https://github.com/neoncitylights" title="@neoncitylights on GitHub">
			<IconBrandGithubFilled
				size={32}
				stroke={1}
				class={twJoin("fill-[#CFB4C5]", "dark:fill-neutral-300")} />
		</a>
	</span>
</footer>
