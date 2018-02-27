import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { paths, APP_TYPE, getDirectories } from '../manifest';

const htmlPlugin = [];

if (APP_TYPE === 'MULTI') {
  htmlPlugin.push(getDirectories(`${path.src}/screens`).map(name => new HtmlWebpackPlugin({
    template: path.join(paths.src, 'screens', name, 'index.ejs'),
    path: paths.build,
    filename: `${name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()}.html`,
    inject: true,
    hash: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  })));
}

if (APP_TYPE === 'SPA') {
  htmlPlugin.push(new HtmlWebpackPlugin({
    template: path.join(paths.src, 'index.html'),
    path: paths.build,
    filename: `index.html`,
    inject: true,
    hash: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  }));
}

export default htmlPlugin;
