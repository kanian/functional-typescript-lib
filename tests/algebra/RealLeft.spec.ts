import { Left } from '../../src/algebra/RealLeft';
import { composeUsingReverse } from '../../src/functions/composeUsingReverse';
import { identity } from '../../src/functions/identity';

describe("Left is a PointedFunctor, because : ", () =>  {
  
  it(" Left.map respects the PointedFunctor identity law for Left", () =>  {
    const eitherOfNull = Left.of(null);
    const eitherOfNullIdentity = eitherOfNull.map(identity)
    expect(eitherOfNull).toEqual(eitherOfNullIdentity);
    expect(eitherOfNullIdentity instanceof Left).toBe(true);
  });
  
  it(" Left.map respects the PointedFunctor composition law for Left", () =>  {
    const left = true;
    const add1 = x => x + 1;
    const mult2 = x => x * 2;
    const add1ThenMult2 = composeUsingReverse(mult2, add1);
    const eitherOfNull = Left.of(null);
    expect(eitherOfNull.map(add1ThenMult2)).toEqual(
      eitherOfNull.map(add1).map(mult2)
    );

    expect(eitherOfNull.map(add1ThenMult2) instanceof Left).toBe(true);
  });
});
