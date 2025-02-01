<script lang="ts" module>
	import { Dialog as SheetPrimitive } from 'bits-ui';

	export type SheetCloseProps = SheetPrimitive.CloseProps;
</script>

<script lang="ts">
	let props: SheetCloseProps = $props();
</script>

<SheetPrimitive.Close {...props} />
