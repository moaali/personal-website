import { IS_PRODUCTION, paths } from './manifest';

// ------------------
// @DevServer Configs
// ------------------

/**
 * [1] : To enable local network testing.
 */

const devServer = {
  contentBase: IS_PRODUCTION ? paths.build : paths.src,
  historyApiFallback: true,
  port: IS_PRODUCTION ? 3001: 3000,
  compress: IS_PRODUCTION,
  inline: !IS_PRODUCTION,
  watchContentBase: true,
  hot: !IS_PRODUCTION,
  host: '0.0.0.0',
  disableHostCheck: true, // [1]
  overlay: true,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: true,
  },
};

// -----------------
// @Exporting Module
// -----------------

export default devServer;
