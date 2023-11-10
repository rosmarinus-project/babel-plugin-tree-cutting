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
function getConfig(input, format) {
  const dir = `dist/${format}`;

  return {
    input,
    output: {
      dir,
      format,
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

export default [getConfig('src/index.ts', 'es'), getConfig('src/index.ts', 'cjs')];
