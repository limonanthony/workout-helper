<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	import { tv, type VariantProps } from 'tailwind-variants';

	export type ButtonProps = VariantProps<typeof button> &
		WithElementRef<HTMLAnchorAttributes> &
		WithElementRef<HTMLButtonAttributes>;

	export const button = tv({
		base: [
			'inline-flex items-center justify-center gap-x-1.5 rounded-md text-nowrap transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2'
		],
		compoundVariants: [
			{
				class: 'rounded-full',
				rounded: true,
				size: ['sm', 'lg', 'md', 'xl', 'xs']
			},
			{
				class:
					'border bg-gray-100 text-gray-400 hover:bg-gray-100 focus-visible:outline-transparent active:bg-gray-100',
				disabled: true,
				variant: ['error', 'secondary', 'ghost', 'soft', 'primary', 'success']
			}
		],
		defaultVariants: {
			disabled: false,
			rounded: false,
			size: 'md',
			variant: 'primary'
		},
		variants: {
			disabled: {
				true: 'cursor-not-allowed'
			},
			loading: {
				true: 'cursor-loading'
			},
			rounded: {
				true: 'rounded-full'
			},
			size: {
				icon: 'h-10 w-10 p-1',
				lg: 'h-11 rounded-md px-3 py-2 text-sm',
				md: 'h-10 rounded-md px-2.5 py-1.5 text-sm',
				sm: 'h-9 rounded-sm px-2 py-1 text-sm',
				xl: 'h-12 rounded-md px-3.5 py-2.5 text-sm',
				xs: 'h-8 rounded-sm px-2 py-1 text-xs'
			},
			variant: {
				error: 'bg-rose-600 text-white shadow-xs hover:bg-rose-500 focus-visible:outline-rose-600 active:bg-rose-700',
				ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 active:bg-gray-200',
				primary:
					'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600 active:bg-indigo-700',
				secondary:
					'bg-white text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 active:bg-gray-200',
				soft: 'bg-indigo-50 text-indigo-600 shadow-xs hover:bg-indigo-100 active:bg-indigo-200',
				success:
					'bg-emerald-600 text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-emerald-600 active:bg-emerald-700'
			}
		}
	});
</script>

<script lang="ts">
	import Spinner from '@/client/components/progress/Spinner.svelte';
	import { cn } from '@/client/utils/classes';

	let {
		children,
		class: className,
		disabled,
		href = undefined,
		loading,
		onclick: onclickProps,
		ref = $bindable(null),
		rounded,
		size,
		type = 'button',
		variant,
		...restProps
	}: ButtonProps = $props();

	const onclick = $derived(disabled || loading ? undefined : onclickProps);
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn(button({ disabled: disabled || loading, loading, rounded, size, variant }), className)}
		{href}
		{onclick}
		{...restProps}
	>
		{#if loading}
			<Spinner size={size === 'icon' ? 'md' : size} />
			{#if size !== 'icon'}
				Loading
			{/if}
		{:else}
			{@render children?.()}
		{/if}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(button({ disabled: disabled || loading, loading, rounded, size, variant }), className)}
		{type}
		{onclick}
		{...restProps}
	>
		{#if loading}
			<Spinner size={size === 'icon' ? 'md' : size} />
			{#if size !== 'icon'}
				Loading
			{/if}
		{:else}
			{@render children?.()}
		{/if}
	</button>
{/if}
