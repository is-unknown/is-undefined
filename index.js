var isNotUndefined = require('@technically/is-not-undefined').isNotUndefined

module.exports = function isUndefined(value) {
  return !isNotUndefined(value)
}