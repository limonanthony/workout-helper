<script context="module" lang="ts">
	import type { Snippet } from 'svelte';

	import Button from '@/client/components/buttons/Button.svelte';
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		args: {
			children: 'Click me' as unknown as Snippet
		},
		argTypes: {
			children: {
				control: 'text'
			},
			class: {
				control: 'text'
			},
			disabled: {
				control: 'boolean'
			},
			onclick: {
				action: 'clicked'
			},
			rounded: {
				control: 'boolean'
			},
			size: {
				control: 'select'
			},
			variant: {
				control: 'select'
			}
		},
		component: Button,
		tags: ['autodoc'],
		title: 'Button'
	});
</script>

<script lang="ts">
	import type { Args } from '@storybook/svelte';

	import { Send } from 'lucide-svelte';

	setTemplate(template);
</script>

{#snippet template({ children, ...args }: Args)}
	<div class="flex w-min flex-col gap-2">
		<Button {...args}>{children}</Button>
		<Button {...args} class={'gap-1 ' + args.class}>
			{children}
			<Send class="size-3" />
		</Button>
	</div>
{/snippet}

<Story name="Default" args={{ disabled: false, rounded: false, size: 'md', variant: 'primary' }} />
