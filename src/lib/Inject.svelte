<script lang="ts">
	import type { Component } from 'svelte';
	import { components } from './index.ts';
	import type { ComponentFn } from './store.svelte.ts';

	interface Props {
		name: keyof typeof components;
		default?: Component;
	}

	const { name, default: Default }: Props = $props();

	let target = $state<Element | Document | ShadowRoot>();
	let Comp = $derived<ComponentFn | undefined>(components[name]);
	$effect(() => {
		if (Comp && target) {
			Comp(target);
		}
	});

	$inspect(components).with(console.log);
</script>

{#if Comp}
	<div bind:this={target}></div>
{:else if Default}
	<Default />
{/if}
