require('dotenv').config()

module.exports = {
  hello: process.env.HELLO || 'Hello not set, but hi, anyway 👋',
  node_env: process.env.NODE_ENV || null,
  map_url: process.env.MAP_URL || 'https//',
  contact_email: process.env.CONTACT_EMAIL || 'site@amce.inc',
  webforms_success: process.env.WEBFORMS_SUCCESS || 'https://web3forms.com/success',
  netlify_success: process.env.NETLIFY_SUCCESS || '/thank-you/'
}
