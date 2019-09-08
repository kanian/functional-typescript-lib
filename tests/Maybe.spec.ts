import { composeUsingReverse } from "../src/composeUsingReverse";
import { prop } from "../src/prop";
import { Maybe } from "../src/Maybe";
import { Container } from "../src/Container";
import { Nothing } from "../src/Nothing";
import { identity } from "../src/identity";

describe("Maybe is a functor because: ", function() {
  it(" Maybe.map respects the functor identity law for Container", function() {
    let maybeOf1 = Maybe.of(1);
    expect(maybeOf1).toEqual(maybeOf1.map(identity));
    expect(maybeOf1.map(identity).$value instanceof Container).toBe(true);
  })
  it(" Maybe.map respects the functor identity law for Nothing", function() {
    let maybeOfNull = Maybe.of(null);
    expect(maybeOfNull).toEqual(maybeOfNull.map(identity));
    expect(maybeOfNull.map(identity).$value instanceof Nothing).toBe(true);
  })
  it(" Maybe.map respects the functor composition law for Container", function() {
    let add1 = x => x+1
    let mult2 = x => x*2
    let add1ThenMult2 = composeUsingReverse(mult2,add1)
    let maybeOf1 = Maybe.of(1);
    expect(maybeOf1.map(add1ThenMult2)).toEqual(maybeOf1.map(add1).map(mult2));
    expect(maybeOf1.map(add1ThenMult2).$value instanceof Container).toBe(true);
  })
  it(" Maybe.map respects the functor composition law for Nothing", function() {
    let add1 = x => x+1
    let mult2 = x => x*2
    let add1ThenMult2 = composeUsingReverse(mult2,add1)
    let maybeOfNull = Maybe.of(null);
    expect(maybeOfNull.map(add1ThenMult2)).toEqual(maybeOfNull.map(add1).map(mult2));

    expect(maybeOfNull.map(add1ThenMult2).$value instanceof Nothing).toBe(true);

  })
})
