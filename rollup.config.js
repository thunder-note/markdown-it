import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: {
    dir: './dist',
    format: 'esm',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    resolve({ preferBuiltins: false }),
    replace({
      values: {
        'process.env.NODE_ENV': '"production"'
      }
    }),
    json()
  ]
};
