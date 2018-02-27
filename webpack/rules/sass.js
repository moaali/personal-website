import path from 'path';
import cssNext from 'postcss-cssnext';
import { IS_DEVELOPMENT, IS_PRODUCTION, paths } from '../manifest';

const rule = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        minimize: IS_PRODUCTION,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        plugins: () => [
          cssNext(),
        ],
      },
    },
    {
      loader: 'resolve-url-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: IS_DEVELOPMENT,
        includePaths: [
          path.join('../../', 'node_modules'),
          path.join(paths.src, 'shared', 'styles'),
          path.join(paths.src, ''),
        ],
      },
    },
  ],
};

export default rule;
