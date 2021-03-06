import { Either } from '../../src/algebra/RealEither';
import { Left } from '../../src/algebra/RealLeft';
import { compose } from '../../src/functions/compose';
import { curry } from '../../src/functions/curry';
import { prop } from '../../src/functions/prop';
import { either } from '../../src/functions/real-either-function';
import { Right } from '../../src';

describe("either function: embodies disjuction by selectively applying functions f and g depending on e being Right or Left", () =>  {
  it("When e is Right, execute fortune", () =>  {
    
    expect(tellHimIfHegotAGift(jake)).toEqual(fortune('Address 1'));
  })
  it("When e is Left, execute misfortune", () =>  {
    
    expect(tellHimIfHegotAGift(john)).toEqual(misfortune('A Person must have an address'));
  });
});


const Person = class {
  constructor(private name, private addresses){
    this.name = name
    this.addresses = [...addresses]
  }
  public isValid(){
    return this.addresses.length > 0
  }
  public toString(){
    return `this.name: ${this.name}
     this.addresses: ${this.addresses.join()}`
  }
}

const indexAccess = curry((f, anyIndexable) => f(anyIndexable));
const getHead = xs => indexAccess(r => r[0])(xs)

const fortune = address => `Congrats! You will recieve your gift at address: ${address}`;
const misfortune = txt => `Sorry! You will not receive anything because... ${txt}`

function getAddress(person) {
  const getAddressesHead = compose(
    getHead,
    prop("addresses")
  );
  return person.isValid()
    ? Right.of(person).map(getAddressesHead)
    : Left.of("A Person must have an address")
}

const decideOnGift = either(misfortune)(fortune)
const tellHimIfHegotAGift = compose(decideOnGift, getAddress)

const jake = new Person('jake',['Address 1', 'Address 2'])
const john = new Person('john', [])