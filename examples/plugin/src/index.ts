import { type ComponentMap } from 'svelte-component-injection';
import Replacement from './Replacement.svelte';
import { mount } from 'svelte';

export default (components: ComponentMap) => {
	components['test-key'] = (target, props = {}) => {
		return mount(Replacement, { target, props });
	};
};
