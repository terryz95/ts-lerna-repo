import createRemConversion from '../src'

describe('default', () => {
  let _px2rem: any = null,
    _rem2px: any = null
  beforeEach(() => {
    const { px2rem, rem2px } = createRemConversion()
    _px2rem = px2rem
    _rem2px = rem2px
  })
  test('px to rem', () => {
    expect(_px2rem(24)).toBe(2.4)
  })
  test('rem to px', () => {
    expect(_rem2px(2.4)).toBe(24)
  })
})
describe('change base and remDigits', () => {
  let _px2rem: any = null,
    _rem2px: any = null
  beforeEach(() => {
    const { px2rem, rem2px } = createRemConversion(16, 3)
    _px2rem = px2rem
    _rem2px = rem2px
  })
  test('px to rem', () => {
    expect(_px2rem(15)).toBe(0.938)
  })
  test('rem to px', () => {
    expect(_rem2px(0.875)).toBe(14)
  })
})
