import { filterIn, filterOut } from "../src/filter";

describe("filter: ", function(){
    it("filterIn keeps array elements if predicate is true ",function(){
        let r = [1,2,3,4,5]
        let isOdd = x => x%2 ===1
        let filterInOdds = filterIn(isOdd)
        expect(filterInOdds(r)).toEqual([1,3,5])
    })
    it("filterOut keeps array elements if predicate is false ",function(){
        let r = [1,2,3,4,5]
        let isOdd = x => x%2 ===1
        let filterOutOdds = filterOut(isOdd)
        expect(filterOutOdds(r)).toEqual([2,4])
    })
})