//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  runtimeConfig: {
    db: {
      name: 'la-professional',
      user: 'la-professional-user',
      password: 'la-professional-password',
      port: 5432,
      dialect: 'postgres',
      host: 'db',
    },
    auth: {
      saltRounds: 10,
      tokenHashLong: 'asdfjhqweiunhwieurcn23r',
      tokenHash: 'TruLaLaLa',
      refresh: {
        maxAge: 60 * 60 * 24 * 7,
      },
    },
    kinopoisk: {
      key: '89e47a16-4d5e-436f-8e3d-2c764f44051c',
    },
  },
})
