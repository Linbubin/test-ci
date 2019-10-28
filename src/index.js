const sum = (...args) => {
  return args.reduce((a,b) => a + b, 0)
}

const min = (a,b) => {
  return a < b ? a : b
}
const max = (a,b) => {
  return a > b ? a : b
}

module.exports = {
  sum, min, max
}