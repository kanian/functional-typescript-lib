import { Left } from '../src/Left'
import { Right } from '../src/Right'

class Either {
    public static of(x, left = false) {
        return new Either(x, left)
    }

    public static isRight(either: Right | Left) {
        return either instanceof Right
    }
    
    public $value

    constructor($value = null, left = false) {
        this.$value = left !== true ? Right.of($value) : Left.of($value)
    }

    public map(fn) {
        const mapped = this.$value.map(fn).unwrapValue()
        if (Either.isRight(mapped)) {
            return Either.of(mapped.unwrapValue()) // we unwrap 'mapped' because Right maps to Either<Right>
        }
        return Either.of(mapped, true) // no need to unwrap 'mapped' because Left maps to itself and mapped is naked
    }

    public toString() {
        return `Either(${this.$value})`
    }
    public unwrapValue() {
        return this.$value
    }
}

export { Either }
