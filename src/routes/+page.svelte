<script lang="ts">
	import Button from '@/client/components/buttons/Button.svelte';
	import Sheet from '@/client/components/sheets/base/Sheet.svelte';
	import SheetContent from '@/client/components/sheets/base/SheetContent.svelte';
	import SheetDescription from '@/client/components/sheets/base/SheetDescription.svelte';
	import SheetHeader from '@/client/components/sheets/base/SheetHeader.svelte';
	import SheetTitle from '@/client/components/sheets/base/SheetTitle.svelte';
	import SheetTrigger from '@/client/components/sheets/base/SheetTrigger.svelte';

	let isOpen = $state(false);

	$inspect('isOpen', isOpen);
</script>

<Button onclick={() => (isOpen = true)}>Open drawer</Button>
<Sheet bind:open={isOpen}>
	<SheetTrigger />
	<SheetContent side="left">
		<SheetHeader>
			<SheetTitle>Edit profile</SheetTitle>
			<SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
		</SheetHeader>
	</SheetContent>
</Sheet>
