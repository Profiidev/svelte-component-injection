<script lang="ts">
	import type { Component } from 'svelte';
	import { components } from './index.ts';

	interface Props {
		name: keyof typeof components;
		default?: Component;
	}

	const { name, default: Default }: Props = $props();
	let Comp = $derived(components[name]);
</script>

{#if Comp}
	<Comp />
{:else if Default}
	<Default />
{/if}
