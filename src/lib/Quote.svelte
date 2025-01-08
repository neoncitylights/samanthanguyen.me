<script lang="ts">
	let { children, author, styles = '' }: {
		children: any
		author: string
		styles?: string
	} = $props()
</script>
<blockquote class={['flex flex-col gap-2 italic', styles]}>
	<p>
		{'"'}{@render children()}{'"'}
	</p>
	<cite class="text-right">— {author}</cite>
</blockquote>
