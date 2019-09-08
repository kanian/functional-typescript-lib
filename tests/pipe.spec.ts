import {pipe} from "../src/pipe"
import {pipeUsingReverseAndCompose} from "../src/pipeUsingReverseAndCompose"

let minus = x => -x
let square = x => x*x
let add2 = x => x+2

describe("pipe: The function resulting from applying pipe to a list of functions", function(){
    it("behaves the same as successive application of the piped functions",function(){
        expect(pipe(add2,square,minus)(2)).toEqual(minus(square(add2(2))))
    })
})

describe("pipeUsingReverseAndCompose: The function resulting from applying pipeUsingReverseAndCompose to a list of functions", function(){
    it(" behaves the same as pipe when given a list of functions", function(){
        expect(pipeUsingReverseAndCompose(add2,square,minus)(2)).toEqual(pipe(add2,square,minus)(2))
    })
})