import { partialProps } from "../src/partialProps";
class SumOptions{
  public x:number|null;
  public y:number|null;
  public z:number|null;
}

function sumProp({ x , y , z  }) {
 return x+y+z
}
function sumTypedProp(sumOptions: SumOptions) {
  return sumOptions.x+sumOptions.y+sumOptions.z
 }
function idem({ x = null}) {
  return {x}
 }
function bar() {
  return true
}
describe("A function with no parameters", () =>  {
  it("should behave as if it were not partially applied", () =>  {
    
    const partiallyApplied = partialProps(bar);

    expect(partiallyApplied()).toEqual(true);
  });
});

describe("A function of which the object parameter only has one property ", () =>  {
  it("should behave as if it were not partially applied", () =>  {
    
    const partiallyApplied = partialProps(idem);

    expect(partiallyApplied({x:2})).toEqual({x:2});
  });
});

describe("A function of which the object parameter has more than one property ", () =>  {
  it("should accept an object argument with 1 less property set after being partially applied", () =>  {
    
    const partiallyApplied = partialProps(sumTypedProp,{y:2});

    expect(partiallyApplied({x:2,z:10})).toEqual(14);
  });
});
