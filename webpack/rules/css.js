import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { IS_DEVELOPMENT, IS_PRODUCTION } from '../manifest';

// ---------------
// @Common Loaders
// ---------------

const rule = {};

const loaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: IS_DEVELOPMENT,
      minimize: IS_PRODUCTION,
    },
  },
];

// ---------------------------
// @Merging Production Loaders
// ---------------------------

if (IS_PRODUCTION) {
  Object.assign(rule, {
    test: /\.css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
      use: loaders,
      publicPath: '/build',
    }),
  });
}

// ----------------------------
// @Merging Development Loaders
// ----------------------------

if (IS_DEVELOPMENT) {
  Object.assign(rule, {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      ...loaders,
    ],
  });
}

// -----------------
// @Exporting Module
// -----------------

export default rule;
