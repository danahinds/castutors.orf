'use strict'

const date = new Date()

const currentYear = () => date.getFullYear()

const formatDate = (date) => new Date(date).toDateString()

module.exports = {
  year: currentYear,
  formatDate: formatDate
}
