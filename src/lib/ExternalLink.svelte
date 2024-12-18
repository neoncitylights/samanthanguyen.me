<script>
	let { children, ...props } = $props()
</script>

<a {...props} target="_blank" rel="noopener noreferrer">
	{@render children()}
</a>
