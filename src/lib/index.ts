import Inject from './Inject.svelte';
import { type ComponentMap, components, registerComponents } from './store.svelte';

export { Inject, type ComponentMap, components, registerComponents };

export async function loadPlugin(path: string) {
	const plugin = await import(/* @vite-ignore */ path);
	if (typeof plugin.default === 'function') {
		plugin.default(components);
	}
}
