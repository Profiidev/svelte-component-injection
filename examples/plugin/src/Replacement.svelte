<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		counter: number;
		child: Snippet<[]>;
	}

	let { counter = $bindable(), child }: Props = $props();
</script>

<p>Replacement component</p>
<p>Counter value: {counter}</p>
<button onclick={() => counter++}>Increment Replacement</button>
{@render child()}
