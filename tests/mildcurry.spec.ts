import {mildCurry} from "../src/mildCurry"

describe("A function with no parameters", () =>  {
    it("should behave as if it were not mild curried", () =>  {
      const fn = () => true
      const curried = mildCurry(fn)
  
      expect(curried()).toEqual(true)
    });
});

describe("A function with one parameter", () =>  {
    it("should behave as if it were not mild curried", () =>  {
      const fn = (x:any) => x
      const curried = mildCurry(fn)
  
      expect(curried(true)).toEqual(true)
    });
});

describe("A function with more than one parameter", () =>  {
    it("should allow the same number arguments in successive applications  as its arity", () =>  {
      const fn = (x:any,y:any) => [x,y]
      const curried = mildCurry(fn)
      expect(curried(1,2)).toEqual([1,2])
      const fn2 = (x,y,z,a,b,c) => [x,y,z,a,b,c]
      const curried2 = mildCurry(fn2)
      expect(curried2(1)(2)(3,4)(5)(6)).toEqual([1,2,3,4,5,6])
    });
});