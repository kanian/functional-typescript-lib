import {Nothing} from "../src/Nothing"
import {prop} from "../src/prop"
describe("Nothing: ", function(){
    it(" Nothing contains only null", function(){
        expect(prop('$value')(Nothing.of())).toBe(null)
    })
})