import { filterIn, filterOut } from '../../src/functions/filter';

describe("filter: ", () => {
    it("filterIn keeps array elements if predicate is true ",() => {
        const r = [1,2,3,4,5]
        const isOdd = x => x%2 ===1
        const filterInOdds = filterIn(isOdd)
        expect(filterInOdds(r)).toEqual([1,3,5])
    })
    it("filterOut keeps array elements if predicate is false ",() => {
        const r = [1,2,3,4,5]
        const isOdd = x => x%2 ===1
        const filterOutOdds = filterOut(isOdd)
        expect(filterOutOdds(r)).toEqual([2,4])
    })
})