const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: path.join(_dirname + "./public/dist/"),
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [new WebpackPwaManifest({
    name: 'Images App',
    short_name: 'Images App',
    description: 'This is my super awesome Images App Description!',
    theme_color: "#ffffff",
    background_color: '#ffffff',
    display: "standalone",
    // crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('./public/assets/images/icons/icon-512x512.png'),
        sizes: [72 ,96, 128, 144, 152, 192, 256, 384, 512] // multiple sizes
      }
    ],
    inject: false, 
    fingerprints: false
  })]
};

module.exports = config;
