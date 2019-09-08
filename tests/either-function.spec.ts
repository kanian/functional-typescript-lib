import { either } from "../src/either-function";

import { Right } from "../src/Right";
import { Left } from "../src/Left";
import { Either } from "../src/Either";
import { curry } from "../src/curry";
import { prop } from "../src/prop";
import { compose } from "../src/compose";



describe("either function: embodies disjuction by selectively applying functions f and g depending on e being Right or Left", function() {
  it("When e is Right, execute fortune", function() {
    
    expect(tellHimIfHegotAGift(jake)).toEqual(fortune('Address 1'));
  })
  it("When e is Left, execute misfortune", function() {
    
    expect(tellHimIfHegotAGift(john)).toEqual(misfortune('A Person must have an address'));
  });
});


var Person = class {
  constructor(private name, private addresses){
    this.name = name
    this.addresses = [...addresses]
  }
  isValid(){
    return this.addresses.length > 0
  }
  toString(){
    return `this.name: ${this.name}
     this.addresses: ${this.addresses.join()}`
  }
}

var indexAccess = curry((f, anyIndexable) => f(anyIndexable));
var getHead = xs => indexAccess(r => r[0])(xs)

const fortune = address => `Congrats! You will recieve your gift at address: ${address}`;
const misfortune = txt => `Sorry! You will not receive anything because... ${txt}`

function getAddress(person) {
  var left = true;
  var getAddressesHead = compose(
    getHead,
    prop("addresses")
  );
  return person.isValid()
    ? Either.of(person).map(getAddressesHead)
    : Either.of("A Person must have an address", left)
}

const decideOnGift = either(misfortune)(fortune)
const tellHimIfHegotAGift = compose(decideOnGift, getAddress)

var jake = new Person('jake',['Address 1', 'Address 2'])
var john = new Person('john', [])