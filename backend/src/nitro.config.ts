//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  runtimeConfig: {
    db: {
      name: '',
      user: '',
      password: '',
      port: null,
      host: '',
      dialect: 'postgres',
    },
    auth: {
      saltRounds: null,
      tokenHashLong: '',
      tokenHash: '',
      refresh: {
        maxAge: null,
      },
    },
    kinopoisk: {
      key: '',
    },
  },
})
