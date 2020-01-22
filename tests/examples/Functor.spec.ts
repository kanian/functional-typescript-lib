import { Functor } from '../../src/examples/Functor';
import { map } from '../../src/functions/map';
import { prop } from '../../src/functions/prop';

describe("Functor: ",() => {
    it(" creating a Functor of a value returns an object that holds the value", () => {
        const pointedFunctorOf1 = new Functor(1)
        const getValue = prop('$value')
        expect(map(getValue)([pointedFunctorOf1])[0]).toEqual(1)
    })

    it("Functor.map(fn) produces another Functor that holds the same value as the return value of fn applied to fn(Functor.$value) ", () => {
        const pointedFunctorOf1 = new Functor(1)
        const toString = x => x.toString()
        const getValue = prop('$value')
        const pointedFunctorOfString1 = pointedFunctorOf1.map(toString)
        const valueOfFunctorOf1 = getValue(pointedFunctorOf1)
        const valueOfFunctorOfString1 = getValue(pointedFunctorOfString1)
        expect(valueOfFunctorOfString1).toEqual(toString(valueOfFunctorOf1))

    })
})