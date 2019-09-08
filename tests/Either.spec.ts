import { composeUsingReverse } from "../src/composeUsingReverse";
import { prop } from "../src/prop";
import { Either } from "../src/Either";
import { Right } from "../src/Right";
import { Left } from "../src/Left";
import { identity } from "../src/identity";

describe("Either is a functor, because : ", function() {
  it(" Either.map respects the functor identity law for Right", function() {
    let eitherOf1 = Either.of(1);

    expect(eitherOf1).toEqual(eitherOf1.map(identity));
    expect(eitherOf1.map(identity).$value instanceof Right).toBe(true);
  });
  it(" Either.map respects the functor identity law for Left", function() {
    let left = true;
    let eitherOfNull = Either.of(null, left);
    expect(eitherOfNull).toEqual(eitherOfNull.map(identity));
    expect(eitherOfNull.map(identity).$value instanceof Left).toBe(true);
  });
  it(" Either.map respects the functor composition law for Right", function() {
    let add1 = x => x + 1;
    let mult2 = x => x * 2;
    let add1ThenMult2 = composeUsingReverse(mult2, add1);
    let eitherOf1 = Either.of(1);
    expect(eitherOf1.map(add1ThenMult2)).toEqual(
      eitherOf1.map(add1).map(mult2)
    );
    expect(eitherOf1.map(add1ThenMult2).$value instanceof Right).toBe(true);
  });
  it(" Either.map respects the functor composition law for Left", function() {
    let left = true;
    let add1 = x => x + 1;
    let mult2 = x => x * 2;
    let add1ThenMult2 = composeUsingReverse(mult2, add1);
    let eitherOfNull = Either.of(null, left);
    expect(eitherOfNull.map(add1ThenMult2)).toEqual(
      eitherOfNull.map(add1).map(mult2)
    );

    expect(eitherOfNull.map(add1ThenMult2).$value instanceof Left).toBe(true);
  });
});
