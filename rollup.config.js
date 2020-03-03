import nodeResolve from '@rollup/plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';
import { terser } from 'rollup-plugin-terser';
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js';
import { GLOBAL_DEFS_FOR_TERSER, GLOBAL_DEFS_FOR_TERSER_WITH_AOT } from '@angular/compiler-cli';

const cliUglifyConfig = {
  safari10: true,
  output: {
    ascii_only: true,
    comments: false,
    webkit: true,
  },
  compress: {
    pure_getters: true,
    passes: 3,
    global_defs: {
      ...GLOBAL_DEFS_FOR_TERSER,
      ...GLOBAL_DEFS_FOR_TERSER_WITH_AOT,
    },
  },
}

export default {
  input: './src/main-rollup.js',
  output: {
    dir: './dist/',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    includePaths({ paths: ['./src'] }),
    nodeResolve({ mainFields: ['es2015', 'browser', 'module', 'main'] }),
    buildOptimizer({
      sideEffectFreeModules: [
        `node_modules/@angular/animations/`,
        `node_modules/@angular/cdk/`,
        `node_modules/@angular/common/`,
        `node_modules/@angular/compiler/`,
        `node_modules/@angular/core/`,
        `node_modules/@angular/elements/`,
        `node_modules/@angular/forms/`,
        `node_modules/@angular/material/`,
        `node_modules/@angular/platform-browser/`,
        `node_modules/@angular/router/`,
        `node_modules/@angular/service-worker/`,
        `node_modules/rxjs/`,
      ]
    }),
    // terser(cliUglifyConfig),
  ]
};
