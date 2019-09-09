import { partialRight } from '../src/partialRight';
import { partialRightUsingReverseArgs } from '../src/partialRightUsingReverseArgs';
describe("partialRightUsingReverseArgs: ", () => {
    it("should behave exactly as partialRight", () => {
        const sum4 = (w,x,y,z) => w+x+y+z
        expect(partialRightUsingReverseArgs(sum4,2,3)(4,5)).toEqual(partialRight(sum4,2,3)(4,5))
    })
})