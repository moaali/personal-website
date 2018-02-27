const rule = {
  test: /\.(eot|svg|ttf|woff2?)$/,
  exclude: /node_modules/,
  loader: 'file-loader',
};

export default rule;
