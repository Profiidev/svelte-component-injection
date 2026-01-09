import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				css: 'injected'
			}
		}),
		resolve({
			browser: true,
			exportConditions: ['svelte', 'browser', 'import']
		})
	],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'svelte-component-injection',
			fileName: 'index',
			formats: ['es']
		}
	}
});
