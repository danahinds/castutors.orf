require('dotenv').config()

module.exports = {
  hello: process.env.HELLO || 'Hello not set, but hi, anyway 👋',
  node_env: process.env.NODE_ENV || null,
  site_map_url: process.env.SITE_MAP_URL || 'https//',
  contact_email: process.env.CONTACT_EMAIL || 'site@amce.inc',
  webforms_success: process.env.WEBFORMS_SUCCESS || 'https://web3forms.com/success',
  contact_success: process.CONTACT_SUCCESS || '/thank-you',
  contact_provider: process.env.CONTACT_PROVIDER || null
}
