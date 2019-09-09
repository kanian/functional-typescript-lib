import {curryProps} from "../src/curryProps"

describe("A function with no parameters", () =>  {
    it("should behave as if it were not curried", () =>  {
      const fn = () => true
      const curried = curryProps(fn)
  
      expect(curried()).toEqual(true)
    });
});

describe("A function with one parameter", () =>  {
    it("should behave as if it were not curried", () =>  {
      const fn = (x:any) => x
      const curried = curryProps(fn)
  
      expect(curried({x: true})).toEqual({x: true})
    });
});

describe("A function with more than one parameter", () =>  {
    it("should allow the same number of successive applications  as its arity", () =>  {
      const fn = ({x,y}) => [x,y]
      const curried = curryProps(fn,2)
      expect(curried({x:1})({y:2})).toEqual([1,2])
      const fn2 = ({x,y,z}) => [x,y,z]
      const curried2 = curryProps(fn2,3)
      expect(curried2({x:1})({y:2})({z:3})).toEqual([1,2,3])
    });
});