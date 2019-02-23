import { log } from 'stupid-logger'

export const sum = (a: number, b: number): number => {
  const result = a + b
  log(`Sum calculation: ${a} + ${b} = ${result}`)

  return result
}
