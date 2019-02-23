const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ]
      },
    ],
  },
  output: {
    filename: 'sub-service.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.ts', '.js'],
  },
  target: 'node',
}
