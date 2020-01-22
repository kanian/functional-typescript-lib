import { Just } from '../../src/algebra/Just';
import { composeUsingReverse } from '../../src/functions/composeUsingReverse';
import { curry } from '../../src/functions/curry';
import { identity } from '../../src/functions/identity';
import { prop } from '../../src/functions/prop';
import { safe } from '../../src/functions/safe';

describe('Just is a Functor because: ', () => {
  it(' Just.map respects the Functor identity law for Just<T>', () => {
    const JustOf1 = Just.of<number>(1)
    expect(JustOf1.map(identity).map(identity).value).toBe(
      JustOf1.map(identity).value
    )
  })

  it(' Just.map respects the Functor composition law for Just<T>', () => {
    const add1 = x => x + 1
    const mult2 = x => x * 2
    const add1ThenMult2 = composeUsingReverse(mult2, add1)
    const JustOf1 = Just.of<number>(1)
    expect(JustOf1.map(add1ThenMult2).map(identity).value).toEqual(
      JustOf1.map(add1)
        .map(mult2)
        .map(identity).value
    )
    expect(JustOf1.map(add1ThenMult2).map(identity).value).toBe(4)
  })

  it(' Just.map can map from Just<T> to Just<U> ', () => {
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
    const pointedFunctorOfDog = Just.of<Dog>(new Dog('Medor'))
    const pointedFunctorOfCat = pointedFunctorOfDog.map(transform)
    expect(pointedFunctorOfCat.map(identity).value.speaks()).toEqual(
      `Medor meows`
    )
  })
  it('Just.ap first maps to Just<Function> then to Just<T> ', () => {
    const Person = class {
      public name: any
      public addresses: any[]
      constructor(name, addresses) {
        this.name = name
        this.addresses = [...addresses]
      }
    }
    const jake = new Person('jake', ['Address 1'])
    const betterPerson = curry((person, enhancement) => {
      return new Person(
        prop('name')(person) + enhancement,
        prop('addresses')(person)
      )
    }) // and
    const safeBetterPersonEnhancement = safe(betterPerson)(jake) // then
    const enhancedJake = safeBetterPersonEnhancement.ap(
      safe(identity)(' can fly')
    )
    expect((enhancedJake as Just<any>).map(prop('name')).value).toEqual(
      jake.name + ' can fly'
    )
    expect(enhancedJake instanceof Just).toEqual(true)
  })
})
