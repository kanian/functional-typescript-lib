import { composeWithReduceLazy } from "../src/composeWithReduceLazy";
import {compose} from "../src/compose"

let sum = (...x: number[]) => {
  //console.info("in sum: ")
  //console.log(x.toString())
  return x.reduce((x = 0, y) => x + y);
};
let minus = n => {
  //console.info("in minus: ")
  //console.log(n)
  let ns = [...n];
  return ns.map(x => -x);
};
let mult3 = x => {
  //console.info("in mult: ")
  //console.log(x)
  return x.reduce((x = 1, y) => x * y);
};

describe("composeWithReduceLazy: Writing compose using reduce", function() {
  it("should allow to compose methods of varying arity", function() {
    let composed = composeWithReduceLazy(sum, mult3, minus);
    expect(composed([2, 3, 4])).toEqual(sum(mult3(minus([2, 3, 4]))));
  });

  it("should return the same results as compose", function() {
    let composed = composeWithReduceLazy(sum,mult3,minus)
    expect(composed([2,3,4])).toEqual(compose(sum,mult3,minus)([2,3,4]));
  });
});
