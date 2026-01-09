import { type ComponentMap } from 'svelte-component-injection';
import Replacement from './Replacement.svelte';
import { mount, unmount } from 'svelte';

export default (components: ComponentMap) => {
	components['test-key'] = (target, props = {}) => {
		let comp = mount(Replacement, { target, props });
		return () => {
			unmount(comp);
		};
	};
};
