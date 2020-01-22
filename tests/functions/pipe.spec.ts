import { pipe } from '../../src/functions/pipe';
import { pipeUsingReverseAndCompose } from '../../src/functions/pipeUsingReverseAndCompose';

const minus = x => -x
const square = x => x*x
const add2 = x => x+2

describe("pipe: The function resulting from applying pipe to a list of functions", () => {
    it("behaves the same as successive application of the piped functions",() => {
        expect(pipe(add2,square,minus)(2)).toEqual(minus(square(add2(2))))
    })
})

describe("pipeUsingReverseAndCompose: The function resulting from applying pipeUsingReverseAndCompose to a list of functions", () => {
    it(" behaves the same as pipe when given a list of functions", () => {
        expect(pipeUsingReverseAndCompose(add2,square,minus)(2)).toEqual(pipe(add2,square,minus)(2))
    })
})