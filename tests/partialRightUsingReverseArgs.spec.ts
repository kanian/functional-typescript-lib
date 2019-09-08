import {partialRightUsingReverseArgs} from "../src/partialRightUsingReverseArgs"
import {partialRight} from "../src/partialRight"
describe("partialRightUsingReverseArgs: ", function(){
    it("should behave exactly as partialRight", function(){
        let sum4 = (w,x,y,z) => w+x+y+z
        expect(partialRightUsingReverseArgs(sum4,2,3)(4,5)).toEqual(partialRight(sum4,2,3)(4,5))
    })
})