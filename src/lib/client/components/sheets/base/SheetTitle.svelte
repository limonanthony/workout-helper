<script lang="ts">
	import { cn } from '@/client/utils/classes';
	import { Dialog as SheetPrimitive } from 'bits-ui';

	let { class: className, ref = $bindable(null), ...restProps }: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title bind:ref class={cn('text-base font-semibold text-gray-900', className)} {...restProps} />
