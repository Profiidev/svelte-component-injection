<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { components } from './index.ts';
	import type { ComponentFn } from './store.svelte.ts';

	interface Props {
		name: keyof typeof components;
		default?: Component;
	}

	const { name, default: Default }: Props = $props();

	let target = $state<Element | Document | ShadowRoot>();
	let Comp = $derived<ComponentFn | undefined>(components[name]);
	let mountedComp: (() => void) | undefined = undefined;

	$effect(() => {
		if (Comp && target) {
			if (mountedComp) {
				mountedComp();
			}
			mountedComp = Comp(target);
		}
	});

	onMount(() => {
		return () => {
			if (mountedComp) {
				mountedComp();
			}
		};
	});
</script>

{#if Comp}
	<div bind:this={target}></div>
{:else if Default}
	<Default />
{/if}
