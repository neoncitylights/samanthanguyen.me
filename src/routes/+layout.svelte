<script lang="ts">
	import "../app.css";
	import "@fontsource-variable/public-sans";
	import '@fontsource-variable/domine'; // Supports weights 400-700
    import { twJoin } from "tailwind-merge";
	let { children } = $props();
</script>

<svelte:head>
	<title>samanthanguyen.me</title>
	<meta name="description" content="Samantha Nguyen. An artist, software engineer, and aspiring computer scientist" />
</svelte:head>

<div class={twJoin(
	"mx-8 max-w-lg",
	"lg:mx-auto lg:max-w-xl",
)}>
	<section class={twJoin(
		"flex flex-col gap-6 lg:gap-8",
		"selection:bg-pink-200 selection:text-pink-700",
		"dark:selection:bg-yellow-400 selection:text-zinc-950"
	)}>
	{@render children()}
	</section>
</div>
