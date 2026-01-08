import type { Component } from 'svelte';

export type ComponentMap = Record<string, Component>;

export let components = $state<ComponentMap>({});

export function registerComponent(type: string, component: Component) {
	components[type] = component;
}
