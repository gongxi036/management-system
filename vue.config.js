module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  devServer: {
    // host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        // https://patrol-test.koudailingqian.com
        target: 'https://patrol-test.koudailingqian.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {

  },
  chainWebpack: config => {
    if (process.env.VUE_APP_ANALYZE === 'true') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}
