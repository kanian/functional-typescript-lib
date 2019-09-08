import { partialProps } from "../src/partialProps";
class SumOptions{
  x:number|null;
  y:number|null;
  z:number|null;
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
describe("A function with no parameters", function() {
  it("should behave as if it were not partially applied", function() {
    
    const partiallyApplied = partialProps(bar);

    expect(partiallyApplied()).toEqual(true);
  });
});

describe("A function of which the object parameter only has one property ", function() {
  it("should behave as if it were not partially applied", function() {
    
    const partiallyApplied = partialProps(idem);

    expect(partiallyApplied({x:2})).toEqual({x:2});
  });
});

describe("A function of which the object parameter has more than one property ", function() {
  it("should accept an object argument with 1 less property set after being partially applied", function() {
    
    const partiallyApplied = partialProps(sumTypedProp,{y:2});

    expect(partiallyApplied({x:2,z:10})).toEqual(14);
  });
});
