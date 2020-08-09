const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/index.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: path.join(__dirname, "./public/dist/"),
    filename: "bundle.js"
  },
  mode: "development",
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"]
  //         }
  //       }
  //     }
  //   ]
  // },

  plugins: [new WebpackPwaManifest({
    name: 'Progressive Budget',
    short_name: 'Budget App',
    description: 'Homework for week 18: Progressive Budget App',
    theme_color: "#ffffff",
    background_color: '#ffffff',
    display: "standalone",
    start_url: "/",
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('./public/icons/icon-512x512.png'),
        sizes: [72, 96, 128, 144, 152, 192, 256, 384, 512] // multiple sizes
      }
    ],
    inject: false,
    fingerprints: false
  })]
};

module.exports = config;