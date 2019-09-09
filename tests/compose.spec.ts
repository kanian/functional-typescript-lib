import {compose} from "../src/compose"

describe("The result of applying a function resulting from the composition of a number of functions", () =>  {
    it("should be the same as the result of applying the inner functions  then applying the outer function", () =>  {
      const add2 = x => x+2
      const square = x => x*x
      const minus = x => -x
      const addThenSquareThenMinus = compose(minus,square,add2)
  
      expect(addThenSquareThenMinus(2)).toEqual(minus(square(add2(2))))
    });
});

