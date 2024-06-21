const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // Other configurations...
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
      },
    }),
  ],
};