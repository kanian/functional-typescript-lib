import { Just } from '../../src/algebra/Just'
import { compose2 } from '../../src/functions/compose2'
import { composeUsingReverse } from '../../src/functions/composeUsingReverse'
import { curry } from '../../src/functions/curry'
import { identity } from '../../src/functions/identity'
import { prop } from '../../src/functions/prop'
import { safe } from '../../src/functions/safe'

describe('Just is a Functor because: ', () => {
  it(' Just.map respects the Functor identity law for Just<T>', () => {
    const JustOf1 = Just.of<number>(1)
    expect(JustOf1.map(identity).value).toBe(JustOf1.value)
  })

  it(' Just.map respects the Functor composition law for Just<T>', () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)
    const JustOf1 = Just.of<number>(1)
    expect(JustOf1.map(add1ThenMult2).value).toEqual(
      JustOf1.map(add1).map(mult2).value
    )
  })

  it(' Just.map can map from Just<T> to Just<U> ', () => {
    class Dog {
      public name: any
      constructor(name) {
        this.name = name
      }
      public speaks() {
        return `${this.name} barks`
      }
    }

    class Cat {
      public name: any
      constructor(name) {
        this.name = name
      }
      public speaks() {
        return `${this.name} meows`
      }
    }

    function transform(dog: Dog): Cat {
      return new Cat(dog.name)
    }
    const pointedFunctorOfDog = Just.of<Dog>(new Dog('Medor'))
    const pointedFunctorOfCat = pointedFunctorOfDog.map(transform)
    expect(pointedFunctorOfCat.map(identity).value.speaks()).toEqual(
      `Medor meows`
    )
  })
})

describe('Just is a Monad because: ', () => {
  it(' Respects the Monad Left Identity Law', () => {
    const f = (x: string) => Just.of(x.toUpperCase())
    const a = 'Hello'
    const lhs = Just.of(a).chain(f)
    const rhs = f(a)
    expect(lhs).toEqual(rhs)
  })

  it(' Respects the Monad Right Identity Law', () => {
    const f = (x: string) => Just.of(x)
    const ma = Just.of('hello')
    const rhs = ma.chain(f)
    const lhs = ma
    expect(lhs).toEqual(rhs)
  })

  it(' Respects the Monad Associativity Law', () => {
    const f = (x: string) => Just.of(x.toUpperCase())
    const g = (x: string) => Just.of(x.repeat(2))

    const ma = Just.of('hello')
    const rhs = ma.chain(f).chain(g)
    const lhs = ma.chain(x => f(x).chain(g))
    expect(lhs).toEqual(rhs)
  })
})

describe('Just is an Applicative because: ', () => {
  it(' Respects the Identity Law', () => {
    const applicativeOfId = Just.of(identity)
    const functorOf4 = Just.of(4)
    expect(applicativeOfId.ap(functorOf4)).toEqual(functorOf4)
  })

  it(' Respects the Homomorphism Law', () => {
    const f = x => x + 2
    const applicativeOfF = Just.of(f)
    const applicativeOf1 = Just.of(1)
    expect(applicativeOfF.ap(applicativeOf1)).toEqual(Just.of(f(1)))
  })

  it(' Respects the Interchange Law', () => {
    const f = x => x + 2
    const applicativeOfF = Just.of(f)
    const applicativeOf1 = Just.of(1)
    expect(applicativeOfF.ap(Just.of(1))).toEqual(Just.of(f).ap(applicativeOf1))
  })

  it(' Respects the Composition Law', () => {
    const compose = curry(compose2)
    const u = Just.of((x: string) => x.toUpperCase())
    const v = Just.of((x: string) => x.concat('& beyond'))
    const w = Just.of('blood bath')
    expect(
      Just.of(compose)
        .ap(u)
        .ap(v)
        .ap(w)
    ).toEqual(u.ap(v.ap(w)))
  })
})
