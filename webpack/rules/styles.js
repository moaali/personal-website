import path from 'path';
import cssNext from 'postcss-cssnext';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { IS_DEVELOPMENT, paths } from '../manifest';

const rule = {
  test: /\.(s?)css$/,
  exclude: /(node_modules|build\/)/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader',
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
  })
};

export default rule;
