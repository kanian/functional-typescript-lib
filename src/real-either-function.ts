import { curry } from './curry'
import {  Either } from './RealEither'
import { Left } from './RealLeft'
import { Right } from './RealRight'

function _e<T,U>(onFailure: (x: U) => any, onSuccess : (x: T) => any , v: Right<T> | Left<U>){
    let result
    const value: T|U = v.value
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
