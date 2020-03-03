import nodeResolve from '@rollup/plugin-node-resolve';
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js';

export default {
  input: './src/main.js',
  output: {
    dir: './dist/',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      mainFields: [
        'esm2015',
        'es2015',
        'browser',
        'module',
        'main',
      ]
    }),
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
  ]
};
