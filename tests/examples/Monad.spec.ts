import { Monad } from '../../src/examples/Monad'
import { identity } from '../../src/functions/identity'
import { compose2 } from '../../src/functions/compose2'
import { curry } from '../../src/functions/curry'

describe('Monad: ', () => {
  it(' Respects the Left Identity Law', () => {
    const f = (x: string) => Monad.of(x.toUpperCase())
    const a = 'Hello'
    const lhs = Monad.of(a).chain(f)
    const rhs = f(a)
    expect(lhs).toEqual(rhs)
  })

  it(' Respects the Right Identity Law', () => {
    const f = (x: string) => Monad.of(x)
    const ma = Monad.of('hello')
    const rhs = ma.chain(f)
    const lhs = ma
    expect(lhs).toEqual(rhs)
  })

  it(' Respects the Associativity Law', () => {
    const f = (x: string) => Monad.of(x.toUpperCase())
    const g = (x: string) => Monad.of(x.repeat(2))

    const ma = Monad.of('hello')
    const rhs = ma.chain(f).chain(g)
    const lhs = ma.chain((x) => f(x).chain(g))
    expect(lhs).toEqual(rhs)
  })
})
