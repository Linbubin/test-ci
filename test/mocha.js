const {expect} = require('chai')
const {sum} = require('../src/index')

describe('math', () => {
  describe('sum', () => {
    it('sum 1,2,3  equal 6', () => {
      expect(sum(1,2,3)).to.equal(6)
    })
    it('sum 1,2,3,5  equal 11', () => {
      expect(sum(1,2,3,5)).to.equal(11)
    })
  })
})

