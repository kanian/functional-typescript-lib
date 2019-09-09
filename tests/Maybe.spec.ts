import { composeUsingReverse } from '../src/composeUsingReverse';
import { Container } from '../src/Container';
import { identity } from '../src/identity';
import { Maybe } from '../src/Maybe';
import { Nothing } from '../src/Nothing';

describe("Maybe is a functor because: ", () =>  {
  it(" Maybe.map respects the functor identity law for Container", () =>  {
    const maybeOf1 = Maybe.of(1);
    expect(maybeOf1).toEqual(maybeOf1.map(identity));
    expect(maybeOf1.map(identity).$value instanceof Container).toBe(true);
  })
  it(" Maybe.map respects the functor identity law for Nothing", () =>  {
    const maybeOfNull = Maybe.of(null);
    expect(maybeOfNull).toEqual(maybeOfNull.map(identity));
    expect(maybeOfNull.map(identity).$value instanceof Nothing).toBe(true);
  })
  it(" Maybe.map respects the functor composition law for Container", () =>  {
    const add1 = x => x+1
    const mult2 = x => x*2
    const add1ThenMult2 = composeUsingReverse(mult2,add1)
    const maybeOf1 = Maybe.of(1);
    expect(maybeOf1.map(add1ThenMult2)).toEqual(maybeOf1.map(add1).map(mult2));
    expect(maybeOf1.map(add1ThenMult2).$value instanceof Container).toBe(true);
  })
  it(" Maybe.map respects the functor composition law for Nothing", () =>  {
    const add1 = x => x+1
    const mult2 = x => x*2
    const add1ThenMult2 = composeUsingReverse(mult2,add1)
    const maybeOfNull = Maybe.of(null);
    expect(maybeOfNull.map(add1ThenMult2)).toEqual(maybeOfNull.map(add1).map(mult2));

    expect(maybeOfNull.map(add1ThenMult2).$value instanceof Nothing).toBe(true);

  })
})
