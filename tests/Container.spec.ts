import {Container} from "../src/Container"
import {map} from "../src/map"
import {prop} from "../src/prop"

describe("Container: ",function(){
    it(" creating a Container of a value returns an object that holds the value", function(){
        let containerOf1 = Container.of(1)
        let getValue = prop('$value')
        expect(map(getValue)([containerOf1])[0]).toEqual(1)
    })

    it("Container.map(fn) produces another Container that holds the same value as the return value of fn applied to fn(Container.$value) ", function(){
        let containerOf1 = Container.of(1)
        let toString = x => x.toString()
        let getValue = prop('$value')
        let containerOfString1 = containerOf1.map(toString)
        let valueOfContainerOf1 = getValue(containerOf1)
        let valueOfContainerOfString1 = getValue(containerOfString1)
        expect(valueOfContainerOfString1).toEqual(toString(valueOfContainerOf1))

    })
})