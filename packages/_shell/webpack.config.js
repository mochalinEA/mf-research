const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

const config = {
  publicPath: 'http://localhost:3000/',
  port: 3000
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
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: packageJson.name,
      filename: 'remoteEntry.js',
      remotes: {
        login: 'login@http://localhost:3001/remoteEntry.js',
        header: 'header@http://localhost:3002/remoteEntry.js',
        sidebar: 'sidebar@http://localhost:3003/remoteEntry.js',
        profile: 'profile@http://localhost:3004/remoteEntry.js',
        chat: 'chat@http://localhost:3005/remoteEntry.js',
      },
      exposes: {},
      shared: sharedDeps
      // shared: {
      //   react: {
      //     singleton: true,
      //     requiredVersion: packageJson.dependencies.react,
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
