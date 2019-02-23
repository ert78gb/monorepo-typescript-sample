const { log } = require('stupid-logger')

const sub = (a, b) => {
  const result = a - b
  log(`Sub calculation: ${a} - ${b} = ${result}`)

  return result
}

module.exports = {
  sub,
}
