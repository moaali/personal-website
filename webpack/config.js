import path from 'path';
import {
  paths,
  entries,
  IS_PRODUCTION,
  outputFiles,
} from './manifest';
import devServer from './devServer';
import rules from './rules';
import plugins from './plugins';

// ------------------
// @Entry Point Setup
// ------------------

const entry = [
  path.join(paths.src, entries.js),
];

// ---------------
// @Path Resolving
// ---------------

const resolve = {
  extensions: ['.js', '.jsx'],
  modules: [
    path.join(__dirname, '../node_modules'),
    path.join(paths.src, ''),
    path.join(paths.src, 'shared/scripts'),
  ],
};

// -----------------
// @Exporting Module
// -----------------

const config = {
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: path.join(paths.src, entries.js),
  watch: !IS_PRODUCTION,
  entry,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: outputFiles.bundle,
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
};

export default config;
