const webpack = require("webpack");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "フレンズしょうぎ on Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Implementation of friends-shogi.com by Nuxt.js"
      }
    ],
    // CDNを使う場合はここに書くこと！
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.2/rangeslider.min.css"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js"
      },
      { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
      { src: "https://use.fontawesome.com/releases/v5.0.7/js/all.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.2/rangeslider.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"
      }
    ]
  },
  css: ["~/assets/css/main.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        lodash: "lodash"
      })
    ]
  }
};
