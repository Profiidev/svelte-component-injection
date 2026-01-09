import { registerComponents } from 'svelte-component-injection';
import Replacement from './Replacement.svelte';

export default registerComponents({
	'test-key': Replacement
});
