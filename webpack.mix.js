let mix = require('laravel-mix')

mix.setPublicPath('public_html/')

mix
  .options({
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }
  })
  .js('src/js/app.js', 'public_html/assets')
  .sass('src/scss/app.scss', 'public_html/assets')
  .copy('src/img/*.webp', 'public_html/images/')
  .copy('src/json/lugares.json', 'public_html/js/')
  .copy('src/json/propiedades.json', 'public_html/js/')
  //.copy('src/img/*.png', 'public_html/img/')
  .copy('src/img/cercano/mobile/*.webp', 'public_html/images/cercano/mobile')
  .copy('src/img/cercano/web/*.webp', 'public_html/images/cercano/web')
  .copy('src/img/iconos/*.webp', 'public_html/images/iconos')
  .copy('src/img/galeria/*.webp', 'public_html/images/galeria')
  .copy('src/img/iconos/*.svg', 'public_html/images/iconos')
  .copy('src/img/favicon.png', 'public_html/')
  .copy('src/php/*.php', 'public_html/functions/')
  .copy('src/templates/*.html', 'public_html/templates/')

mix.version()
  .sourceMaps()


const HtmlWebpackPlugin = require('html-webpack-plugin')

mix.webpackConfig({
  output: {
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      output: 'public_html',
      inject: 'body',
      hash: true
    })
  ]
});

