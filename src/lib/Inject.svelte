<script lang="ts" generics="P extends Record<string, any> = {}">
	import { onMount, type Component } from 'svelte';
	import { components } from './index.ts';
	import type { ComponentFn } from './store.svelte.ts';

	interface Props {
		name: keyof typeof components;
		default?: Component<P>;
	}

	const { name, default: Default, ...props }: Props & P = $props();

	let target = $state<Element | Document | ShadowRoot>();
	let Comp = $derived<ComponentFn | undefined>(components[name]);
	let mountedComp: (() => void) | undefined = undefined;

	$effect(() => {
		if (Comp && target) {
			if (mountedComp) {
				mountedComp();
			}
			mountedComp = Comp(target, props);
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
	<Default {...props} />
{/if}
