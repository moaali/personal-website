import ImageminPlugin from 'imagemin-webpack-plugin';
import { IS_DEVELOPMENT } from '../manifest';

export default new ImageminPlugin({
  disable: IS_DEVELOPMENT,
});
