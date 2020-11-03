enum ArithmeticType {
  Addition = 'addition',
  Subtraction = 'subtraction',
  Multiplication = 'multiplication',
  Division = 'division',
}

interface Arithmetic {
  (type: ArithmeticType): (arg1: number, arg2: number) => number | undefined
}

const arithmetic: Arithmetic = (type: ArithmeticType) => (
  arg1: number,
  arg2: number
) => {
  if (typeof arg1 !== 'number' && typeof arg2 !== 'number') {
    throw new Error(`utils/arithmetic: Arguments should be Number.`)
  }
  let t1: number = 0,
    t2: number = 0,
    m: number,
    n: number
  const s1 = arg1.toString()
  const s2 = arg2.toString()
  try {
    t1 = s1.split('.')[1].length
  } catch (e) {}
  try {
    t2 = s2.split('.')[1].length
  } catch (e) {}
  switch (type) {
    case 'addition':
      m = Math.pow(10, Math.max(t1, t2))
      return (arg1 * m + arg2 * m) / m
    case 'subtraction':
      n = Math.max(t1, t2)
      m = Math.pow(10, n)
      return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
    case 'multiplication':
      return (
        (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, t1 + t2)
      )
    case 'division':
      return (
        (Number(s1.replace('.', '')) / Number(s2.replace('.', ''))) *
        Math.pow(10, t2 - t1)
      )
  }
}

export const add = arithmetic(ArithmeticType.Addition)
export const sub = arithmetic(ArithmeticType.Subtraction)
export const mul = arithmetic(ArithmeticType.Multiplication)
export const div = arithmetic(ArithmeticType.Division)
