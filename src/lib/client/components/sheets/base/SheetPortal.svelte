<script lang="ts" module>
	import { Dialog as SheetPrimitive } from 'bits-ui';

	export type SheetPortalProps = SheetPrimitive.PortalProps;
</script>

<script lang="ts">
	let props: SheetPortalProps = $props();
</script>

<SheetPrimitive.Portal {...props} />
