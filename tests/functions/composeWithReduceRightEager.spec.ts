import { composeWithReduceLazy } from '../../src/functions/composeWithReduceLazy';
import { composeWithReduceRightEager } from '../../src/functions/composeWithReduceRightEager';

describe("composeWithReduceRightEager: ", () => {
  it("behave the same as composeWithReduceLazy", () => {
    const sum = (x, y) => x + y
    const square = x => x * x
    const minus = x => -x
    expect(composeWithReduceRightEager(minus, square, sum)(2, 3)).toEqual(
      composeWithReduceLazy(minus, square, sum)(2, 3)
    )
  })
})
