import { Right } from '../src/Right'
import { Left } from '../src/Left'

class Either {
    $value
    constructor($value = null, left = false) {
        this.$value = left !== true ? Right.of($value) : Left.of($value)
    }

    public static of(x, left = false) {
        return new Either(x, left)
    }
   
    static isRight(either: Right | Left) {
        return either instanceof Right
    }

    map(fn) {
        let mapped = this.$value.map(fn).unwrapValue()
        if (Either.isRight(mapped)) {
            return Either.of(mapped.unwrapValue()) // we unwrap 'mapped' because Right maps to Either<Right>
        }
        return Either.of(mapped, true) // no need to unwrap 'mapped' because Left maps to itself and mapped is naked
    }

    toString(){
      return `Either(${this.$value})` 
    }
    unwrapValue() {
        return this.$value
    }
}

export { Either }
