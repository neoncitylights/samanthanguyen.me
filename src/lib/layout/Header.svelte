<script>
	import { twJoin } from 'tailwind-merge'
</script>

<header>
	<hgroup class="flex flex-col gap-1 lg:gap-2">
		<h1 class={twJoin(
			"pt-12 flex items-end",
		 	"text-2xl lg:text-4xl font-domine font-bold lg:font-medium",
		)}>
			samanthanguyen.me
		</h1>
		<p class={twJoin(
			"text-sm lg:text-base dark:text-zinc-500",
			"font-domine",
		)}>
			she / her. artist, software engineer, aspiring computer scientist
		</p>
	</hgroup>
</header>
