<script lang="ts" module>
	import { type ClassProp, tv, type VariantProps } from 'tailwind-variants';

	export type SpinnerProps = ClassProp & VariantProps<typeof spinner>;

	export const spinner = tv({
		base: 'animate-spin-slower',
		defaultVariants: {
			size: 'md'
		},
		variants: {
			size: {
				lg: 'size-4',
				md: 'size-4',
				sm: 'size-3',
				xl: 'size-5',
				xs: 'size-2'
			}
		}
	});
</script>

<script lang="ts">
	import { cn } from '@/client/utils/classes';
	import { Loader } from 'lucide-svelte';

	let { class: className, size }: SpinnerProps = $props();
</script>

<Loader class={cn(spinner({ size }), className)} />
