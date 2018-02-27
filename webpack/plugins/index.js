import imageminPlugin from './imageminPlugin';
import htmlPlugin from './htmlPlugin';
import internal from './internal';
import caseSensitivePlugin from './caseSensitivePlugin';
import extractPlugin from './extractPlugin';
import faviconsWebpackPlugin from './faviconsWebpackPlugin';

const plugins = [];

plugins.push(
  imageminPlugin,
  faviconsWebpackPlugin,
  ...htmlPlugin,
  ...internal,
  caseSensitivePlugin,
  extractPlugin
);

export default plugins;
