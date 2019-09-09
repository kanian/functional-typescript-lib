import { composeUsingReverse } from "../src/composeUsingReverse";
import { Either } from "../src/Either";
import { identity } from "../src/identity";
import { Left } from "../src/Left";
import { Right } from "../src/Right";

describe("Either is a functor, because : ", () =>  {
  it(" Either.map respects the functor identity law for Right", () =>  {
    const eitherOf1 = Either.of(1);

    expect(eitherOf1).toEqual(eitherOf1.map(identity));
    expect(eitherOf1.map(identity).$value instanceof Right).toBe(true);
  });
  it(" Either.map respects the functor identity law for Left", () =>  {
    const left = true;
    const eitherOfNull = Either.of(null, left);
    expect(eitherOfNull).toEqual(eitherOfNull.map(identity));
    expect(eitherOfNull.map(identity).$value instanceof Left).toBe(true);
  });
  it(" Either.map respects the functor composition law for Right", () =>  {
    const add1 = x => x + 1;
    const mult2 = x => x * 2;
    const add1ThenMult2 = composeUsingReverse(mult2, add1);
    const eitherOf1 = Either.of(1);
    expect(eitherOf1.map(add1ThenMult2)).toEqual(
      eitherOf1.map(add1).map(mult2)
    );
    expect(eitherOf1.map(add1ThenMult2).$value instanceof Right).toBe(true);
  });
  it(" Either.map respects the functor composition law for Left", () =>  {
    const left = true;
    const add1 = x => x + 1;
    const mult2 = x => x * 2;
    const add1ThenMult2 = composeUsingReverse(mult2, add1);
    const eitherOfNull = Either.of(null, left);
    expect(eitherOfNull.map(add1ThenMult2)).toEqual(
      eitherOfNull.map(add1).map(mult2)
    );

    expect(eitherOfNull.map(add1ThenMult2).$value instanceof Left).toBe(true);
  });
});
