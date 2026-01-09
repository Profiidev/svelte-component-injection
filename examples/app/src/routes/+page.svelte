<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte';
	import { Inject, loadPlugin } from 'svelte-component-injection';

	function load() {
		loadPlugin('../examples/plugin/dist/index.js');
	}

	let counter = $state(0);
	function increment() {
		counter += 1;
	}
</script>

<button onclick={load}>Load Data</button>
<button onclick={increment}>Increment Counter</button>

<Inject name="test-key" {counter} />
<Inject name="test-key2" default={Placeholder} />
