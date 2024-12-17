<script lang="ts">
	import "../app.css";
	import "@fontsource-variable/public-sans";
	import '@fontsource-variable/domine'; // Supports weights 400-700
	let { children } = $props();
</script>

<svelte:head>
	<title>samanthanguyen.me</title>
</svelte:head>

<div class="pt-16 mx-auto max-w-xl">
	{@render children()}
</div>
