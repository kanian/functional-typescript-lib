import { Either } from '../algebra/RealEither'
import { Left } from '../algebra/RealLeft'
import { Right } from '../algebra/RealRight'
import { curry } from './curry'

function _e<T, U>(
    onFailure: (x: U) => any,
    onSuccess: (x: T) => any,
    v: Right<T> | Left<U>
) {
    let result
    const value: T | U = v.value
    switch (v.constructor) {
        case Left:
            result = onFailure(value as U)
            break
        case Right:
            result = onSuccess(value as T)
            break
        // No Default
    }
    return result
}
const either = curry(_e)

export { either }
