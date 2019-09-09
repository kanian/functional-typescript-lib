import { composeUsingReverse } from "../src/composeUsingReverse"
import { curry } from "../src/curry"
import { identity } from "../src/identity"
import { Just } from "../src/Just"
import { prop } from "../src/prop"
import { safe } from "../src/safe"

describe("Just is a functor because: ", () => {
  it(" Just.map respects the functor identity law for Just<T>", () => {
    const JustOf1 = new Just<number>(1)
    expect(JustOf1.map(identity).flatMap(identity)).toBe(
      JustOf1.flatMap(identity)
    )
  })

  it(" Just.map respects the functor composition law for Just<T>", () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)
    const JustOf1 = new Just<number>(1)
    expect(JustOf1.map(add1ThenMult2).flatMap(identity)).toEqual(
      JustOf1.map(add1)
        .map(mult2)
        .flatMap(identity)
    )
    expect(JustOf1.map(add1ThenMult2).flatMap(identity)).toBe(4)
  })

  it(" Just.map can map from Just<T> to Just<U> ", () => {
    class Dog {
      public name: any
      constructor(name) {
        this.name = name
      }
      public speaks() {
        return `${this.name} barks`
      }
    }

    class Cat {
      public name: any
      constructor(name) {
        this.name = name
      }
      public speaks() {
        return `${this.name} meows`
      }
    }

    function transform(dog: Dog): Cat {
      return new Cat(dog.name)
    }
    const containerOfDog = new Just<Dog>(new Dog("Medor"))
    const containerOfCat = containerOfDog.map(transform)
    expect(containerOfCat.flatMap(identity).speaks()).toEqual(`Medor meows`)
  })
  it("Just.ap first maps to Just<Function> then to Just<T> ", () => {
    const Person = class {
      public name: any
      public addresses: any[]
      constructor(name, addresses) {
        this.name = name
        this.addresses = [...addresses]
      }
    }
    const jake = new Person("jake", ["Address 1"])
    const betterPerson = curry((person, enhancement) => {
      return new Person(
        prop("name")(person) + enhancement,
        prop("addresses")(person)
      )
    }) // and
    const safeBetterPersonEnhancement = safe(betterPerson)(jake) // then
    const enhancedJake = safeBetterPersonEnhancement.ap(
      safe(identity)(" can fly")
    )
    expect(enhancedJake.flatMap(prop("name"))).toEqual(jake.name + " can fly")
    expect(enhancedJake instanceof Just).toEqual(true)
  })
})
