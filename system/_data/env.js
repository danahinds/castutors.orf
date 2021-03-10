require('dotenv').config()

module.exports = {
  otherSiteUrl:
    process.env.OTHER_SITE_URL || 'https://eleventy-env-vars-private.netlify.app',
  hello: process.env.HELLO || 'Hello not set, but hi, anyway 👋',
  node_env: process.env.NODE_ENV || null,
  map_url: process.env.MAP_URL || "https//"

}
