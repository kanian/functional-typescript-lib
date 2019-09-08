import {compose2} from "../src/compose2"

describe("The result of applying a function resulting from the composition of 2 functions", function() {
    it("should be the same as the result of applying the inner function  then applying the outer function", function() {
      let add2 = (x) => x+2
      let square = (x) => x*x
      let addThenSquare = compose2(square,add2)
  
      expect(addThenSquare(2)).toEqual(square(add2(2)))
    });
});

