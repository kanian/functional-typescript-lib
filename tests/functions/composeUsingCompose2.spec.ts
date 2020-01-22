import { composeUsingCompose2 } from '../../src/functions/composeUsingCompose2';

describe("composeUsingCompose2: The result of repeatedly applying composition to a list of functions", () =>  {
    it("should be the same as the result of applying the inner functions  then applying the outer function", () =>  {
      const add2 = x => x+2
      const square = x => x*x
      const minus = x => -x
      const addThenSquareThenMinus = composeUsingCompose2(minus,square,add2)
  
      expect(addThenSquareThenMinus(2)).toEqual(minus(square(add2(2))))
    });
});

