const path = require('path')
const webpack = require('webpack')

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'AlteryxWDCInput'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  }
}

module.exports = Object.assign(
  {
    entry: {
      AlteryxWDCInput: './AlteryxWDCInput/AlteryxWDCInput.tsx',
      AlteryxWDCInputEngine: './AlteryxWDCInput/AlteryxWDCInputEngine.ts'
    },
    plugins: [new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    })]
  },
  commonConfig)
