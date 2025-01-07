<script lang='ts'>
	import { Command } from 'bits-ui'
	type Props = {
		children: any
		keywords?: string[]
	}
	let { children, keywords = [] }: Props = $props()
</script>

<Command.Item
	class={[
		'flex items-center gap-2 h-10 px-3 py-2.5',
		'cursor-pointer select-none text-sm capitalize',
		'outline-none data-[selected]:bg-muted',
	]}
	keywords={keywords}
>
	{@render children()}
</Command.Item>
