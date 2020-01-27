import { Applicative } from '../../src/examples/Applicative'
import { identity } from '../../src/functions/identity'
import { compose2 } from '../../src/functions/compose2'
import { curry } from '../../src/functions/curry'

describe('Applicative: ', () => {
  it(' Respects the Identity Law', () => {
    const applicativeOfId = Applicative.of(identity)
    const functorOf4 = Applicative.of(4)
    expect(applicativeOfId.ap(functorOf4)).toEqual(functorOf4)
  })

  it(' Respects the Homomorphism Law', () => {
    const f = x => x + 2
    const applicativeOfF = Applicative.of(f)
    const applicativeOf1 = Applicative.of(1)
    expect(applicativeOfF.ap(applicativeOf1)).toEqual(Applicative.of(f(1)))
  })

  it(' Respects the Interchange Law', () => {
    const f = x => x + 2
    const applicativeOfF = Applicative.of(f)
    const applicativeOf1 = Applicative.of(1)
    expect(applicativeOfF.ap(Applicative.of(1))).toEqual(
      Applicative.of(f).ap(applicativeOf1)
    )
  })

  it(' Respects the Composition Law', () => {
    const compose = curry(compose2)
    const u = Applicative.of((x: string) => x.toUpperCase())
    const v = Applicative.of((x: string) => x.concat('& beyond'))
    const w = Applicative.of('blood bath')
    expect(
      Applicative.of(compose)
        .ap(u)
        .ap(v)
        .ap(w)
    ).toEqual(u.ap(v.ap(w)))
  })
})
