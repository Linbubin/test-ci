const {expect} = require('chai')
const {sum, min, max} = require('../src/index')

describe('math', () => {
  describe('sum', () => {
    it('sum 1,2,3  equal 6', () => {
      expect(sum(1,2,3)).to.equal(6)
    })
    it('sum 1,2,3,5  equal 11', () => {
      expect(sum(1,2,3,5)).to.equal(11)
    })
  })
  describe('min', () => {
    it('min 1,2  equal 1', () => {
      expect(min(1,2)).to.equal(1)
    })
    it('min 3,2  equal 2', () => {
      expect(min(3,2)).to.equal(2)
    })
  })
  describe('max', () => {
    it('max 1,2  equal 2', () => {
      expect(max(1,2)).to.equal(2)
    })
    it('max 3,2  equal 3', () => {
      expect(max(3,2)).to.equal(3)
    })
  })
})

