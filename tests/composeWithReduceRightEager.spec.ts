import {composeWithReduceRightEager} from "../src/composeWithReduceRightEager"
import {composeWithReduceLazy}  from "../src/composeWithReduceLazy"
describe("composeWithReduceRightEager: ", function(){
    it("behave the same as composeWithReduceLazy", function(){
        let sum = (x,y)=> x+y
      let square = x => x*x
      let minus = x => -x
      expect(composeWithReduceRightEager(minus,square,sum)(2,3)).toEqual(composeWithReduceLazy(minus,square,sum)(2,3))
    })
})