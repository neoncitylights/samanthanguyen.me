<script lang="ts">
	import "../app.css";
	import "@fontsource-variable/public-sans";
	import '@fontsource-variable/domine'; // Supports weights 400-700
    import { twJoin } from "tailwind-merge";
	let { children } = $props();
</script>

<svelte:head>
	<title>samanthanguyen.me</title>
</svelte:head>

<div class={twJoin(
	"mx-8 max-w-lg",
	"lg:mx-auto lg:max-w-xl",
)}>
	{@render children()}
</div>
