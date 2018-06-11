module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-element',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Nuxt.js and element project.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: [
    { src: '~/plugins/iview', ssr: true }
  ],
  css: ['~assets/app.less'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // iview-loader
    extend (config) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'iview-loader',
        options: {
          prefix: true
        }
      })
    }
  }
}
