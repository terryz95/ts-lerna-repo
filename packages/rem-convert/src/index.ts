import { round } from '@terryz95/arithmetic'

export default (base: number = 0.625, remDigits: number = 2) => {
  let _base = 16
  if (base < 1) {
    _base = _base * base
  } else {
    _base = base
  }
  const px2rem = (px: number) => round(px / _base, remDigits)
  const rem2px = (rem: number) => rem * _base
  return {
    px2rem,
    rem2px,
  }
}
