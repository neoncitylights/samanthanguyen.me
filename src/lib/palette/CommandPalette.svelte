<script>
	import { Command, Dialog } from 'bits-ui'
	import CommandItem from './CommandItem.svelte'
	import CommandGroupHeading from './CommandGroupHeading.svelte'
	let { open = $bindable() } = $props()
</script>

<Dialog.Root bind:open={open}>
	<Dialog.Portal>
		<Dialog.Overlay class={[
			'fixed inset-0 z-50',
			'data-[state=open]:animate-in',
			'data-[state=closed]:animate-out',
			'data-[state=closed]:fade-out-0',
			'data-[state=open]:fade-in-0',
		]} />
	</Dialog.Portal>
	<Dialog.Content class={[
		'fixed left-[50%] top-[50%] z-50 w-full',
		'max-w-[94%] translate-x-[-50%] translate-y-[-50%]',
		'rounded-card-lg bg-background shadow-popover outline-none',
		'data-[state=open]:animate-in',
		'data-[state=closed]:animate-out',
		'data-[state=closed]:fade-out-0',
		'data-[state=open]:fade-in-0',
		'data-[state=closed]:zoom-out-95',
		'data-[state=open]:zoom-in-95',
		'data-[state=closed]:slide-out-to-left-1/2',
		'data-[state=closed]:slide-out-to-top-[48%]',
		'data-[state=open]:slide-in-from-left-1/2',
		'data-[state=open]:slide-in-from-top-[48%]',
		'sm:max-w-[490px] md:w-full',
	]}>
		<Command.Root class={[
			'flex h-full w-full flex-col self-start',
			'divide-y divide-border overflow-hidden',
			'rounded-xl border border-muted bg-slate-100',
		]}>
			<Command.Input
				class={[
					'inline-flex h-input w-[296px] p-4',
					'truncate text-sm',
					'bg-background transition-colors placeholder:text-foreground-alt/50',
					'focus-override focus:outline-none focus:ring-0',
					'appearance-none bg-[unset]',
				]}
				placeholder="Search for something..."
			/>
			<Command.List class="max-h-[280px] overflow-y-auto overflow-x-hidden px-2 pb-2">
				<Command.Viewport>
					<Command.Empty
						class="flex w-full items-center justify-center pb-6 pt-8 text-sm text-muted-foreground"
					>
						No results found.
					</Command.Empty>
					<Command.Group>
						<CommandGroupHeading>Suggestions</CommandGroupHeading>
						<Command.GroupItems>
							<CommandItem keywords={['getting started', 'tutorial']}>Introduction</CommandItem>
							<CommandItem keywords={['child', 'custom element', 'snippets']}>Delegation</CommandItem>
							<CommandItem keywords={['css', 'theme', 'colors', 'fonts', 'tailwind']}>Styling</CommandItem>
						</Command.GroupItems>
					</Command.Group>
					<Command.Separator />
					<Command.Group>
						<CommandGroupHeading>Components</CommandGroupHeading>
						<Command.GroupItems>
							<CommandItem keywords={['dates', 'times']}>Calendar</CommandItem>
							<CommandItem keywords={['buttons', 'forms']}>Radio Group</CommandItem>
							<CommandItem keywords={['inputs', 'text', 'autocomplete']}>Combobox</CommandItem>
						</Command.GroupItems>
					</Command.Group>
				</Command.Viewport>
			</Command.List>
		</Command.Root>
	</Dialog.Content>
</Dialog.Root>
