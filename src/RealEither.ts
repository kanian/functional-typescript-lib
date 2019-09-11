import { Left } from './RealLeft'
import { Right } from './RealRight'

class Either<T,U> {
    public static of <T,U>(x, left = false) : Either<T,U>{
        return new Either<T,U>(x, left)
    }

    public static isRight<T,U>(either: Right<T,U> | Left<T,U>) {
        return either instanceof Right
    }

    public $value : Right<T,U> | Left<T,U>

    constructor($value = null, left = false) {
        this.$value = left !== true ? Right.of<T,U>($value) : Left.of<T,U>($value)
    }

    public map<B>(fn: (x: T) => B) : Either<B|T,U>{
        const mapped :  Right<T|B,U> | Left<T|B,U> = this.$value.map<B>(fn).unwrapValue()
        return Either.of(mapped.unwrapValue(), !Either.isRight<T|B,U>(mapped))
    }

    public toString() {
        return `Either(${this.$value})`
    }
    public unwrapValue() {
        return this.$value
    }
}

export { Either }
