<script lang="ts">
	let { children, author } = $props()
</script>
<blockquote class="flex flex-col gap-2 italic text-xs lg:text-sm">
	<p>
		{'"'}{@render children()}{'"'}
	</p>
	<cite class="text-right">— {author}</cite>
</blockquote>
