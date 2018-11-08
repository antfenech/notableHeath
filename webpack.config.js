const Path = require('path');
const cssNano = require('cssnano');
const AutoPrefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
  {
    context: Path.resolve(__dirname),
    entry: {
      main: ['babel-polyfill', './public/js/main.js'],
    },
    output: {
      path: Path.resolve(__dirname, './public/bin/js/'),
      pathinfo: true,
      filename: '[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: Path.resolve(__dirname, 'node_modules/'),
          loader: 'babel-loader',
          query: {
            presets: ['env'],
          }
        },
        {
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!postcss-loader!sass-loader',
          }),
        }
      ]
    },
    plugins: [
      AutoPrefixer,
      new ExtractTextPlugin({
        filename: './../css/[name].css'
      }),

      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: cssNano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      })

      // new purifyCSSPlugin({
      //   paths: Glob.sync.(Path.join(__dirname, 'app/*.html')),
      // }),
    ]
  }
];
