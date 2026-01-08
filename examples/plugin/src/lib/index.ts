import { registerComponent } from 'svelte-component-injection';
import Replacement from './Replacement.svelte';

export default () => {
	registerComponent('test-key', Replacement);
};
