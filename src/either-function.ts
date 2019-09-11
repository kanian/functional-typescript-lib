import { curry } from './curry'
import { Either } from './Either'
import { Left } from '../src/Left'
import { Right } from '../src/Right'

const either = curry((onFailure, onSuccess, v: Either) => {
    let result
    const value: Right | Left = v.unwrapValue()
    switch (value.constructor) {
        case Left:
            result = onFailure(value.unwrapValue())
            break
        case Right:
            result = onSuccess(value.unwrapValue())
            break
        // No Default
    }
    return result
})

export { either }
