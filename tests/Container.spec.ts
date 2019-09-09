import {Container} from "../src/Container"
import {map} from "../src/map"
import {prop} from "../src/prop"

describe("Container: ",() => {
    it(" creating a Container of a value returns an object that holds the value", () => {
        const containerOf1 = Container.of(1)
        const getValue = prop('$value')
        expect(map(getValue)([containerOf1])[0]).toEqual(1)
    })

    it("Container.map(fn) produces another Container that holds the same value as the return value of fn applied to fn(Container.$value) ", () => {
        const containerOf1 = Container.of(1)
        const toString = x => x.toString()
        const getValue = prop('$value')
        const containerOfString1 = containerOf1.map(toString)
        const valueOfContainerOf1 = getValue(containerOf1)
        const valueOfContainerOfString1 = getValue(containerOfString1)
        expect(valueOfContainerOfString1).toEqual(toString(valueOfContainerOf1))

    })
})