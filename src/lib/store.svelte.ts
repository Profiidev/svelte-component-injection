import { mount, unmount, type Component } from 'svelte';

export type ComponentFn = (
	target: Document | Element | ShadowRoot,
	props?: Record<string, any>
) => () => void;

export type ComponentMap = Record<string, ComponentFn>;

export let components = $state<ComponentMap>({});

export function registerComponents(components: Record<string, Component<any>>) {
	return (map: ComponentMap) => {
		for (const key in components) {
			map[key] = (target, props = {}) => {
				let comp = mount(components[key], { target, props });
				return () => {
					unmount(comp);
				};
			};
		}
	};
}
