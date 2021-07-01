import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: [
		{
			dir: 'es',
			format: 'es',
		},
		{
			dir: 'lib',
			format: 'cjs',
		},
	],
	plugins: [resolve(), json(), babel(), production && terser()],
	exclude: 'node_modules',
};
