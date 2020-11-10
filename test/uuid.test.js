const {uuid} = require('../')

const idPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/

const id1 = uuid()
const id2 = uuid()

if (!idPattern.test(id1)) {
  throw new Error(`${id1} does not match UUID pattern`)
}

if (!idPattern.test(id2)) {
  throw new Error(`${id2} does not match UUID pattern`)
}

if (id1 === id2) {
  throw new Error('Generated same ID twice in a row')
}
