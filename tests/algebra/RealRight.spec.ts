import { Right } from '../../src/algebra/RealRight';
import { composeUsingReverse } from '../../src/functions/composeUsingReverse';
import { identity } from '../../src/functions/identity';

describe("Right is a PointedFunctor, because : ", () =>  {
  it(" Right.map respects the PointedFunctor identity law for Right", () =>  {
    const eitherOf1 = Right.of(1);
    console.log(eitherOf1)
    console.log(eitherOf1.map(identity))
    const idEitherOf1 = eitherOf1.map(identity)
    expect(eitherOf1).toEqual(idEitherOf1);
    expect(eitherOf1.map(identity) instanceof Right).toBe(true);
  });
  
  it(" Right.map respects the PointedFunctor composition law for Right", () =>  {
    const add1 = x => x + 1;
    const mult2 = x => x * 2;
    const add1ThenMult2 = composeUsingReverse(mult2, add1);
    const eitherOf1 = Right.of(1);
    expect(eitherOf1.map(add1ThenMult2)).toEqual(
      eitherOf1.map(add1).map(mult2)
    );
    expect(eitherOf1.map(add1ThenMult2) instanceof Right).toBe(true);
  });
  
});
