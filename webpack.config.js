

module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'stage-0', 'react'],
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader'
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
        }
    ]
  },
  /* The below plugin goes with the code at the top of the file that is commented out
  plugins: [
    // new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']})
    new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:[_onBuildEnd]})
  ]
  */
}
