<script lang="ts" module>
	import { Dialog as SheetPrimitive } from 'bits-ui';

	export type SheetTriggerProps = SheetPrimitive.TriggerProps;
</script>

<script lang="ts">
	let props: SheetTriggerProps = $props();
</script>

<SheetPrimitive.Trigger {...props} />
