'use strict'

const date = new Date()

const currentYear = () => date.getFullYear()

const formatDate = (date) => {
  const _date = new (date)
  return _date.toDateString()
}

module.exports = {
  year: currentYear,
  formatDate: formatDate
}
