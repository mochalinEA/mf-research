const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json')

const config = {
  publicPath: 'http://localhost:3003/',
  port: 3003
}

const sharedDeps = Object.values(packageJson.dependencies).reduce((acc, [name, version]) => {
  acc[name] = {
    singleton: true,
    requiredVersion: version
  }

  return acc
}, {})

module.exports = {
  output: {
    publicPath: config.publicPath,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  devServer: {
    port: config.port,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: packageJson.name,
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './app': './src/bootstrap.tsx'
      },
      shared: sharedDeps,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ].filter(Boolean),
};
