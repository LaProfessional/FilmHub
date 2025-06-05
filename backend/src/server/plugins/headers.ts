export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('request', event => {
    const origin = getHeader(event, 'origin') || '*'

    setHeader(event, 'Access-Control-Allow-Origin', origin)
    setHeader(event, 'Access-Control-Allow-Credentials', 'true')
    setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')
  })
})
