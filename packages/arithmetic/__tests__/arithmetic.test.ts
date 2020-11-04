import { round, add, sub, mul, div } from '../src'

describe('test arithmetic commonly', () => {
  test('1.335 remain 2 decimal places', () => {
    expect(round(1.335, 2)).toBe(1.34)
  })
  test('0.1 add 0.2', () => {
    expect(add(0.1, 0.2)).toBe(0.3)
  })
  test('0.2 add 0.4', () => {
    expect(add(0.2, 0.4)).toBe(0.6)
  })
  test('1.5 sub 1.2', () => {
    expect(sub(1.5, 1.2)).toBe(0.3)
  })
  test('0.3 sub 0.2', () => {
    expect(sub(0.3, 0.2)).toBe(0.1)
  })
  test('19.9 mul 100', () => {
    expect(mul(19.9, 100)).toBe(1990)
  })
  test('0.8 mul 3', () => {
    expect(mul(0.8, 3)).toBe(2.4)
  })
  test('0.3 div 0.1', () => {
    expect(div(0.3, 0.1)).toBe(3)
  })
  test('0.69 div 10', () => {
    expect(div(0.69, 10)).toBe(0.069)
  })
})
describe('test arithmetic specially', () => {
  test('round with negative digits', () => {
    expect(round.bind({}, 1.335, -2)).toThrow(Error)
  })
  test('round with integer value', () => {
    expect(round(20, 2)).toBe(20)
  })
  test('2 div 0', () => {
    expect(div(2, 0)).toBe(Infinity)
  })
})
