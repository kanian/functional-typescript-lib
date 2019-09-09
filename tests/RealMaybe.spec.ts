import { composeUsingReverse } from "../src/composeUsingReverse"
import { curry } from "../src/curry"
import { identity } from "../src/identity"
import { Just } from "../src/Just"
import { Maybe } from "../src/RealMaybe"
import { Nothing } from "../src/RealNothing"

describe("Maybe<T> is a functor because: ", () => {
  it(" Maybe.map respects the functor identity law for Container", () => {
    const maybeOf1 = new Maybe<number>(1)
    expect(maybeOf1.map(identity).flatMap(identity)).toBe(
      maybeOf1.flatMap(identity)
    )
  })
  it(" Maybe<T>.map respects the functor identity law for Nothing", () => {
    const maybeOfNull = new Maybe<number>(null)
    expect(maybeOfNull.map(identity).flatMap(identity)).toBe(
      maybeOfNull.flatMap(identity)
    )
  })
  it(" Maybe<T>.map respects the functor composition law for Container", () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)

    const maybeOf1 = new Maybe<number>(1)
    expect(maybeOf1.map(add1ThenMult2).flatMap(identity)).toEqual(
      maybeOf1
        .map(add1)
        .map(mult2)
        .flatMap(identity)
    )
    expect(maybeOf1.map(add1ThenMult2).flatMap(identity)).toBe(4)
  })
  it(" Maybe<T>.map respects the functor composition law for Nothing", () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)
    const maybeOfNull = new Maybe<number>(null)
    expect(maybeOfNull.map(add1ThenMult2).flatMap(identity)).toEqual(
      maybeOfNull
        .map(add1)
        .map(mult2)
        .flatMap(identity)
    )

    expect(maybeOfNull.map(add1ThenMult2).flatMap(identity)).toBe(null)
  })
  it(" Maybe.map can safely decide if Nothing should be returned or Just", () => {
    const someObj = {
      something: {
        somethingElse: {}
      }
    }
    const safeProp = curry(function safeProp(prop, obj) {
      return Maybe.of(obj[prop])
    })
    const res = Maybe.of(someObj)
      .flatMap(safeProp("something"))
      .flatMap(safeProp("somethingElse"))
    expect(res instanceof Just).toBe(true)
    expect(res.flatMap(safeProp("more")) instanceof Nothing).toBe(true)
  })
})
