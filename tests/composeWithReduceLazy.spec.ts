import { composeWithReduceLazy } from "../src/composeWithReduceLazy";
import {compose} from "../src/compose"

const sum = (...x: number[]) => {
  return x.reduce((x = 0, y) => x + y);
};
const minus = n => {
  const ns = [...n];
  return ns.map(x => -x);
};
const mult3 = x => {
  return x.reduce((x = 1, y) => x * y);
};

describe("composeWithReduceLazy: Writing compose using reduce", () =>  {
  it("should allow to compose methods of varying arity", () =>  {
    const composed = composeWithReduceLazy(sum, mult3, minus);
    expect(composed([2, 3, 4])).toEqual(sum(mult3(minus([2, 3, 4]))));
  });

  it("should return the same results as compose", () =>  {
    const composed = composeWithReduceLazy(sum,mult3,minus)
    expect(composed([2,3,4])).toEqual(compose(sum,mult3,minus)([2,3,4]));
  });
});
