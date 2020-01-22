import { Just } from '../../src/algebra/Just';
import { Maybe } from '../../src/algebra/RealMaybe';
import { Nothing } from '../../src/algebra/RealNothing';
import { composeUsingReverse } from '../../src/functions/composeUsingReverse';
import { curry } from '../../src/functions/curry';
import { identity } from '../../src/functions/identity';

describe('Maybe<T> is a Functor because: ', () => {
  it(' Maybe.map respects the Functor identity law for Functor', () => {
    const maybeOf1: Just<number> = Maybe.of(1)
    expect(maybeOf1.map(identity).chain(identity)).toBe(
      maybeOf1.chain(identity)
    )
  })
  it(' Maybe<T>.map respects the Functor identity law for Nothing', () => {
    const maybeOfNull = Maybe.of<number>(null) as Nothing<number>
    expect(maybeOfNull.map(identity)).toEqual(maybeOfNull)
  })
  it(' Maybe<T>.map respects the Functor composition law for Functor', () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)

    const maybeOf1: Just<number> = Maybe.of<number>(1)
    const idMaybe1 = maybeOf1.map(add1ThenMult2)
    expect(maybeOf1.map(add1ThenMult2)).toEqual(
      maybeOf1
        .map(add1)
        .map(mult2)
    )
    expect(maybeOf1.map(add1ThenMult2).value).toBe(4)
  })
  it(' Maybe<T>.map respects the Functor composition law for Nothing', () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)
    const maybeOfNull = Maybe.of<number>(null) as Nothing<number>
    expect(maybeOfNull.map(add1ThenMult2)).toEqual(
      maybeOfNull
        .map(add1)
        .map(mult2)
    )

    expect(maybeOfNull.map(add1ThenMult2).value).toBe(null)
  })
  it(' Maybe.map can safely decide if Nothing should be returned or Just', () => {
    const someObj = {
      something: {
        somethingElse: {}
      }
    }
    const safeProp = curry(function safeProp(prop, obj) {
      return Maybe.of(obj[prop])
    })
    const res = (Maybe.of(someObj) as Just<any>)
      .chain(safeProp('something'))
      .chain(safeProp('somethingElse'))
    expect(res instanceof Just).toBe(true)
    expect(res.chain(safeProp('more')) instanceof Nothing).toBe(true)
  })
})
