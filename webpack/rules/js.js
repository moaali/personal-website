const rule = {
  test: /\.(jsx?)$/,
  exclude: /(node_modules|build\/)/,
  loader: 'babel-loader',
};

export default rule;
