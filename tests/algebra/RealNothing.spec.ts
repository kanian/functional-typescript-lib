import { Nothing } from '../../src/algebra/RealNothing'
import { composeUsingReverse } from '../../src/functions/composeUsingReverse'
import { identity } from '../../src/functions/identity'

describe('Nothing<T> is a Functor because: ', () => {
  it(' Nothing<T>.map respects the Functor identity law', () => {
    const maybeOfNull = Nothing.of<number>(null) 
    expect(maybeOfNull.map(identity)).toEqual(maybeOfNull)
  })

  it(' Nothing<T>.map respects the Functor composition law', () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)
    const maybeOfNull = Nothing.of<number>(null) 
    expect(maybeOfNull.map(add1ThenMult2)).toEqual(
      maybeOfNull.map(add1).map(mult2)
    )

    expect(maybeOfNull.map(add1ThenMult2).value).toBe(null)
  })
})
