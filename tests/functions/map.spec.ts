import { map } from '../../src/functions/map';

describe("map: applying the curried Array.protoype.map(fn) function ", () => {
    it("repeatedly to a function fn then to an array r should return same result as r.map(fn) ", () => {
        const f1 = x => x*2
        const multiplyArrayElBy2 = map(f1)
        const f2 = x =>x*3
        const multiplyArrayElBy3 = map(f2)
        expect(multiplyArrayElBy2([1,2,3])).toEqual([1,2,3].map(f1))
        expect(multiplyArrayElBy3([1,2,3])).toEqual([1,2,3].map(f2))
    })
})