import {Nothing} from "../src/Nothing"
import {prop} from "../src/prop"
describe("Nothing: ", () => {
    it(" Nothing contains only null", () => {
        expect(prop('$value')(Nothing.of())).toBe(null)
    })
})