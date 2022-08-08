const challenge = require('../challengeOne')

describe('Challenge One Testing', () => {
  it('should respond correctly with a positive value array', () => {
    const input = [1, 2, 3, 5, 6, 8, 9]

    const result = challenge(input)

    expect(result).toStrictEqual([1, 4, 9, 25, 36, 64, 81])
  })

  it('should respond correctly with negative value array', () => {
    const input = [-2, -1, -3, -6, -5, -8, -9]

    const result = challenge(input)

    expect(result).toStrictEqual([1, 4, 9, 25, 36, 64, 81])
  })

  it('should respond correctly with mixed value array', () => {
    const input = [-10, -5, 0, 5, 10]

    const result = challenge(input)

    expect(result).toStrictEqual([0, 25, 25, 100, 100])
  })
})
