import { Right } from '../src/Right'
import { Left } from '../src/Left'
import { curry } from './curry';
import { Either } from './Either';

const either = curry((f, g, e: Either) => {
    let result
    let value: Right | Left = e.unwrapValue()
    switch (value.constructor) {
        case Left:
            result = f(value.unwrapValue())
            break
        case Right:
            result = g(value.unwrapValue())
            break
        // No Default
    }
    return result
})

export {either}
