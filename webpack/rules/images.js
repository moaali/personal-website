const rule = {
  test: /\.(png|gif|jpe?g|svg)$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'assets',
      },
    },
  ],
};

export default rule;
