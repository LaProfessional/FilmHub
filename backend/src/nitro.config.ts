//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  runtimeConfig: {
    db: {
      name: 'la-professional',
      user: 'la-professional-user',
      password: 'la-professional-password',
      port: 5432,
      dialect: 'postgres',
      host: 'db'
    },
    auth: {
      saltRounds: 10,
      tokenHashLong: 'asdfjhqweiunhwieurcn23r',
      tokenHash: 'TruLaLaLa',
      refresh: {
        maxAge: 60 * 60 * 24 * 7
      }
    }
  }
});
