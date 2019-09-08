import { composeUsingReverse } from "../src/composeUsingReverse";
import { Just } from "../src/Just";
import { identity } from "../src/identity";
import { safe } from "../src/safe";
import { curry } from "../src/curry";
import { prop } from "../src/prop";

describe("Just is a functor because: ", function() {
  it(" Just.map respects the functor identity law for Just<T>", function() {
    let JustOf1 = new Just<number>(1);
    expect(JustOf1.map(identity).flatMap(identity)).toBe(
      JustOf1.flatMap(identity)
    );
  });

  it(" Just.map respects the functor composition law for Just<T>", function() {
    let add1 = x => x + 1;
    let mult2 = x => x * 2;
    let add1ThenMult2 = composeUsingReverse(mult2, add1);
    let JustOf1 = new Just<number>(1);
    expect(JustOf1.map(add1ThenMult2).flatMap(identity)).toEqual(
      JustOf1.map(add1)
        .map(mult2)
        .flatMap(identity)
    );
    expect(JustOf1.map(add1ThenMult2).flatMap(identity)).toBe(4);
  });

  it(" Just.map can map from Just<T> to Just<U> ", function() {
    class Dog {
      name: any;
      constructor(name) {
        this.name = name;
      }
      speaks() {
        return `${this.name} barks`;
      }
    }

    class Cat {
      name: any;
      constructor(name) {
        this.name = name;
      }
      speaks() {
        return `${this.name} meows`;
      }
    }

    function transform(dog: Dog): Cat {
      return new Cat(dog.name);
    }
    var containerOfDog = new Just<Dog>(new Dog("Medor"));
    //console.log(containerOfDog.$value.speaks()); // Medor barks
    var containerOfCat = containerOfDog.map(transform);
    expect(containerOfCat.flatMap(identity).speaks()).toEqual(`Medor meows`);
  });
  it("Just.ap first maps to Just<Function> then to Just<T> ", function() {
    var Person = class {
      name: any;
      addresses: any[];
      constructor(name, addresses) {
        this.name = name;
        this.addresses = [...addresses];
      }
    };
    var jake = new Person("jake", ['Address 1'])
    var betterPerson = curry(
      (person, enhancement) =>{
        return new Person(
          prop("name")(person) + enhancement,
          prop("addresses")(person)
        )}
    ); //and
    var safeBetterPersonEnhancement = safe(betterPerson)(jake); //then
    var enhancedJake = safeBetterPersonEnhancement.ap(
      safe(identity)(" can fly")
    );
    expect(enhancedJake.flatMap(prop('name'))).toEqual(jake.name+' can fly')
    expect(enhancedJake instanceof Just).toEqual(true)
  });
});
