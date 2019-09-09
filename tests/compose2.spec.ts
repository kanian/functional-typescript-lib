import {compose2} from "../src/compose2"

describe("The result of applying a function resulting from the composition of 2 functions", () =>  {
    it("should be the same as the result of applying the inner function  then applying the outer function", () =>  {
      const add2 = (x) => x+2
      const square = (x) => x*x
      const addThenSquare = compose2(square,add2)
  
      expect(addThenSquare(2)).toEqual(square(add2(2)))
    });
});

