import {composeUsingCompose2} from "../src/composeUsingCompose2"

describe("composeUsingCompose2: The result of repeatedly applying composition to a list of functions", function() {
    it("should be the same as the result of applying the inner functions  then applying the outer function", function() {
      let add2 = x => x+2
      let square = x => x*x
      let minus = x => -x
      let addThenSquareThenMinus = composeUsingCompose2(minus,square,add2)
  
      expect(addThenSquareThenMinus(2)).toEqual(minus(square(add2(2))))
    });
});

