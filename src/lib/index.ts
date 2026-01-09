import Inject from './Inject.svelte';
import { type ComponentMap, components, registerComponent } from './store.svelte';

export { Inject, type ComponentMap, components, registerComponent };

export async function loadPlugin(path: string) {
	const plugin = await import(/* @vite-ignore */ path);
	if (typeof plugin.default === 'function') {
		plugin.default(components);
	}
}
