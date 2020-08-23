type BuildExtendConfig = {
  module: {
    rules: {
      enforce: string
      test: RegExp
      loader: string
      exclude: RegExp
    }[]
  }
}

type BuildExtendCtx = {
  isDev: any
  isClient: any
}

export default {
  build: {
    extend(config: BuildExtendConfig, ctx: BuildExtendCtx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(ts|js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
  ],
  plugins: ["@/plugins/vuetify.ts"],
  mode: "spa",
  target: "static",
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },
  vuetify: {
    defaultAssets: {
      icons: false,
    },
  },
}
