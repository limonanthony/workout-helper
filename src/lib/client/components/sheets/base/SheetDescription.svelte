<script lang="ts">
	import { cn } from '@/client/utils/classes';
	import { Dialog as SheetPrimitive } from "bits-ui";


	let {
		class: className,
		ref = $bindable(null),
		...restProps
	}: SheetPrimitive.DescriptionProps = $props();
</script>

<SheetPrimitive.Description
	bind:ref
	class={cn("text-muted-foreground text-sm", className)}
	{...restProps}
/>