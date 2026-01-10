<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte';
	import { Inject, loadPlugin } from 'svelte-component-injection';

	let dev = import.meta.env.MODE === 'development';

	function load() {
		loadPlugin(dev ? '../examples/plugin/dist/index.js' : '/plugin/index.js');
	}

	let counter = $state(0);
	function increment() {
		counter += 1;
	}
</script>

<button onclick={load}>Load Data</button>
<button onclick={increment}>Increment Counter</button>

<Inject name="test-key" {counter}>
	{#snippet child()}
		<p>Child snippet: {counter}</p>
	{/snippet}
</Inject>
<Inject name="test-key2" default={Placeholder} props={{}} />
