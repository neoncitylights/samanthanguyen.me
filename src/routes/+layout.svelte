<script lang="ts">
	import '../app.css'
	let { children } = $props()
</script>

<svelte:head>
	<title>samanthanguyen.me</title>
	<meta name="description" content="Samantha Nguyen. An artist, software engineer, and aspiring computer scientist" />
</svelte:head>
<div
	class={[
		'mx-8 max-w-lg',
		'lg:mx-auto lg:max-w-xl',
		'flex flex-col gap-6 lg:gap-8',
	]}
>
	{@render children()}
</div>

<style>
	@font-face {
		font-family: 'Departure Mono';
		font-style: normal;
		font-weight: 400;
		src: local('Departure Mono'), url('/fonts/DepartureMono-Regular.woff2') format('woff2');
		font-display: swap;
	}
</style>
