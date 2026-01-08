<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte';
	import { Inject, loadPlugin } from 'svelte-component-injection';

	function load() {
		loadPlugin('../examples/plugin/dist/index.js');
	}
</script>

<button on:click={load}>Load Data</button>

<Inject name="test-key" />
<Inject name="test-key" default={Placeholder} />
