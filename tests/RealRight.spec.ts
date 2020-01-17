import { composeUsingReverse } from "../src/composeUsingReverse";
import { identity } from "../src/identity";
import { Right } from "../src/RealRight";

describe("Right is a functor, because : ", () =>  {
  it(" Right.map respects the functor identity law for Right", () =>  {
    const eitherOf1 = Right.of(1);
    console.log(eitherOf1)
    console.log(eitherOf1.map(identity))
    expect(eitherOf1).toEqual(eitherOf1.map(identity));
    expect(eitherOf1.map(identity) instanceof Right).toBe(true);
  });
  
  it(" Right.map respects the functor composition law for Right", () =>  {
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
