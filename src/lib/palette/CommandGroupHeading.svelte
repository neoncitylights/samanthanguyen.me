<script lang='ts'>
	import { Command } from 'bits-ui'
	let { children } = $props()
</script>

<Command.GroupHeading
	class="px-3 pb-2 pt-4 text-xs text-muted-foreground"
>
	{@render children()}
</Command.GroupHeading>
