const collection = require("lodash/filter")
const sort = require("lodash/sortBy")
const find = require('lodash/find')

const filterTokens = (arr = [], keys = {}) => {
  return collection(arr, keys)

}

module.exports = {
  tokenColor: (color) => {
    // string.substring(0, length);
    return color.substring(0, 7)
  },
  tokenType: (arr = [], keys = {}) => {
    return filterTokens(arr, keys)
  },
  sortBy: (arr, keys = ['name']) => {
    return sort(arr, keys)
  },
  fontFilterBy: (arr = [], key = 'size') => {
    const item = find(arr, ['key', key])
    return item.value

  }
}
