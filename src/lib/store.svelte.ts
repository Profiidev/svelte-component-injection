import type { Component } from 'svelte';

export type ComponentFn = (
	target: Document | Element | ShadowRoot,
	props?: Record<string, any>
) => Component;
export type ComponentMap = Record<string, ComponentFn>;

export let components = $state<ComponentMap>({});

export function registerComponent(type: string, component: ComponentFn) {
	console.log('Registering component:', type, component);
	components[type] = component;
}
