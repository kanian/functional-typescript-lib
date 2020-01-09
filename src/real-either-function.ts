import { curry } from './curry'
import { Either } from './RealEither'
import { Left } from './RealLeft'
import { Right } from './RealRight'

function _e<T, U>(
    onFailure: (x: U) => any,
    onSuccess: (x: T) => any,
    v: Either<T, U>
) {
    let result
    const value: Right<T, U> | Left<T, U> = v.unwrapValue()
    switch (value.constructor) {
        case Left:
            result = onFailure(value.unwrapValue() as U)
            break
        case Right:
            result = onSuccess(value.unwrapValue() as T)
            break
        // No Default
    }
    return result
}
const either = curry(_e)

export { either }
