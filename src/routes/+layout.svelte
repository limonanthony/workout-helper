<script lang="ts">
	import '../app.css';
	import type { ChildrenProp } from '@/client/types/props';

	let { children }: Required<ChildrenProp> = $props();
</script>

{@render children()}
