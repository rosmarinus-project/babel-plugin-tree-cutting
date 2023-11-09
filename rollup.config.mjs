import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

const external = [''];

/**
 *
 * @returns {import('rollup').RollupOptions}
 */
function getConfig({ input, format, output, banner }) {
  const dir = `dist/${output || format}`;

  return {
    input,
    output: {
      dir,
      format,
      banner,
      sourcemap: true,
    },
    external,
    plugins: [
      commonjs(),
      resolve(),
      json(),
      typescript({
        outDir: dir,
        declarationDir: dir,
        tsconfig: './tsconfig.json',
      }),
      babel({
        babelHelpers: 'bundled',
      }),
    ],
  };
}

export default [
  getConfig({ input: 'src/cli.ts', format: 'cjs', output: 'bin', banner: '#!/usr/bin/env node' }),
  getConfig({ input: 'src/index.ts', format: 'es' }),
  getConfig({ input: 'src/index.ts', format: 'cjs' }),
  getConfig({ input: { 'babel-plugin/index': 'src/babel-plugin/index.ts' }, format: 'cjs', output: 'babel' }),
];
